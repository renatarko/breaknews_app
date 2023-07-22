import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { CircleLoader } from "react-spinners";
import { useAuth } from "../../Context/authContext";
import { formatData } from "../../Services/formatDate";
import { initialName } from "../../Services/initialName";
import {
  addCommentsTheNewsService,
  deleteCommentsTheNewsService,
} from "../../Services/postsServices";

import { Button } from "../Button";
import { Card } from "../Cards";
import { ProfileWithoutImage } from "../Cards/styles";
import { DeleteModal } from "../DeleteModal";
import { Modal } from "../Modal";

import { Send, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export function Comments({ news, open, setOpen }) {
  const [input, setInput] = useState("");
  const [idComments, setIdComments] = useState("");
  const [newsComments, setNewsComments] = useState(news?.comments || []);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isdisabled, setIsDisabled] = useState(true);

  const { user, token } = useAuth();
  const navigate = useNavigate();

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
    if (!token) {
      const toast = toast(
        (t) => (
          <span
            style={{ display: "flex", gap: "0.2rem", alignItems: "center" }}
          >
            Sua sessão expirou.
            <Link
              to="/login"
              onClick={() => toast.dismiss(t.id)}
              style={{ textDecoration: "none" }}
            >
              <Button>Login</Button>
            </Link>
          </span>
        ),
        {
          style: {
            background: "#fff",
            color: "rgb(0, 55, 128)",
          },
        }
      );
      return toast;
    }
    const _commented = {
      name: user.name,
      avatar: user.avatar,
      comment: input.comment,
      createdAt: new Date(),
    };
    setNewsComments([...newsComments, _commented]);
    try {
      const response = await addCommentsTheNewsService(newsId, token, input);
      await response.json();
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
      await deleteCommentsTheNewsService(newsId, idComments, token);
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
      <Toaster />
      {open ? (
        <Modal>
          <S.Wrapper>
            <X
              className="btn-close"
              onClick={() => {
                setOpen(false);
                navigate(0);
              }}
            />
            <Card news={news} />

            <S.Comments>
              {newsComments.length > 0 &&
                newsComments.map((item) => {
                  return (
                    <S.Comment key={item?.idComment}>
                      {item?.avatar ? (
                        <S.ImageUser
                          src={item?.avatar}
                          alt={`imagem que reprensenta ${item?.name}`}
                        />
                      ) : (
                        <ProfileWithoutImage>
                          {initialName(item?.name)}
                        </ProfileWithoutImage>
                      )}
                      <S.CommentByUser>
                        <S.UserAndCreated>
                          <strong className="username">{item?.name}</strong>

                          <S.CreatedAt>
                            <span>{formatData(item?.createdAt)}</span>

                            {user?._id === item?.userId && (
                              <X
                                onClick={() =>
                                  handleClickModalDelete(item?.idComment)
                                }
                                className="btn-delete"
                                color="rgb(0, 55, 128)"
                                size={16}
                              />
                            )}
                          </S.CreatedAt>
                        </S.UserAndCreated>

                        <p className="comment">{item?.comment}</p>
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

            {token && (
              <S.CommentsForm>
                <S.TextArea
                  placeholder="Comente aqui"
                  name="comment"
                  onInput={handleChange}
                />
                <Button onClick={sendComment} isAbsolute disabled={isdisabled}>
                  {loading ? (
                    <CircleLoader color="#fff" size={14} />
                  ) : (
                    <Send className="icon-send" />
                  )}
                </Button>
              </S.CommentsForm>
            )}
          </S.Wrapper>
        </Modal>
      ) : null}
    </>
  );
}
