import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { useAuth } from "../../Context/authContext";
import {
  addCommentsTheNewsService,
  deleteCommentsTheNewsService,
} from "../../Services/postsServices";
import { formatarData } from "../../Services/formatDate";
import { initialName } from "../../Services/initialName";

import { Card } from "../Cards";
import { DeleteModal } from "../DeleteModal";
import { Modal } from "../Modal";
import { Button } from "../Button";

import { Send, X } from "lucide-react";
import { ProfileWithoutImage } from "../Cards/styles";
import * as S from "./styles";

export function Comments({ news, open, setOpen }) {
  const [input, setInput] = useState("");
  const [idComments, setIdComments] = useState("");
  const [newsComments, setNewsComments] = useState(news.comments);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Isdisabled, setIsDisabled] = useState(true);

  const { token } = useAuth();

  const newsId = news.id;

  function handleChange(e) {
    const { name, value } = e.target;

    const inputUpdated = { ...input, [name]: value };

    setInput(inputUpdated);
    checkInputValue(inputUpdated);
  }

  function checkInputValue(inputUpdated) {
    const isValue = inputUpdated.comment;
    setIsDisabled(!isValue);
  }

  async function sendComment(e) {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await addCommentsTheNewsService(newsId, token, input);
      const data = await response.json();
      setNewsComments([...newsComments, data.commentCreated]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleClickModalDelete(idComment) {
    setOpenModal(true);
    setIdComments(idComment);
  }

  async function deleteComment() {
    setLoading(true);
    try {
      const response = await deleteCommentsTheNewsService(
        newsId,
        idComments,
        token
      );
      await response.json();

      setLoading(false);
      setOpenModal(false);
      setNewsComments(
        newsComments.filter((comment) => comment.idComment !== idComments)
      );
    } catch {
      setLoading(false);
    }
  }

  return (
    <>
      {open ? (
        <Modal>
          <S.Wrapper>
            <X className="btn-close" onClick={() => setOpen(false)} />
            <Card news={news} />

            <S.Comments>
              {news.comments.length &&
                newsComments.map((item) => {
                  return (
                    <S.Comment key={item.idComment}>
                      {item.avatar ? (
                        <S.ImageUser
                          src={item.avatar}
                          alt={`imagem que reprensenta ${item.name}`}
                        />
                      ) : (
                        <ProfileWithoutImage>
                          {initialName(item.name)}
                        </ProfileWithoutImage>
                      )}
                      <S.CommentByUser>
                        <S.UserAndCreated>
                          <strong className="username">{item.name}</strong>

                          <S.CreatedAt>
                            <span>{formatarData(item.createdAt)}</span>
                            <X
                              onClick={() =>
                                handleClickModalDelete(item.idComment)
                              }
                              className="btn-more"
                              color="rgb(0, 55, 128)"
                            />
                          </S.CreatedAt>
                        </S.UserAndCreated>

                        <p className="comment">{item.comment}</p>
                      </S.CommentByUser>
                    </S.Comment>
                  );
                })}
            </S.Comments>

            {openModal && (
              <DeleteModal
                title="Deletar comentário"
                description="Certeza que deseja excluir este comentário?"
                open={openModal}
                setOpen={setOpenModal}
                handleChange={deleteComment}
                loading={loading}
              />
            )}

            <S.CommentsForm>
              <S.CommentsInput
                placeholder="Comente aqui"
                name="comment"
                onInput={handleChange}
              />
              <Button onClick={sendComment} absolute disabled={Isdisabled}>
                {loading ? (
                  <CircleLoader color="#fff" size={14} />
                ) : (
                  <Send className="icon-send" />
                )}
              </Button>
            </S.CommentsForm>
          </S.Wrapper>
        </Modal>
      ) : null}
    </>
  );
}
