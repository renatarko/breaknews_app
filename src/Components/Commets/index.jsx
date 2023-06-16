import { useState } from "react";
import {
  addCommentsTheNewsService,
  deleteCommentsTheNewsService,
} from "../../Services/postsServices";
import { Card } from "../Cards";

import { FaTrash } from "react-icons/fa";

import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { DeleteModal } from "../DeleteModal";
import { Modal } from "../Modal";
import * as S from "./styles";

export function Comments({ news, open, setOpen }) {
  const [input, setInput] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const { token } = useAuth();

  const newsId = news.id;

  function handleChange(e) {
    const { value } = e.target;

    setInput(value);
  }

  async function sendComment(e) {
    e.preventDefault();

    const response = await addCommentsTheNewsService(newsId, token, input);
    await response.json();
    // console.log(data);
  }

  async function deleteComment(commentId = item.idComment) {
    const response = await deleteCommentsTheNewsService(
      newsId,
      commentId,
      token
    );
    const data = await response.json();
    // console.log(data);

    if (data.message === "comment deleted successfully") {
      setOpenModal(false);
      navigate(0);
    }
  }

  return (
    <>
      {open ? (
        <Modal>
          <S.Wrapper>
            <X className="btn-close" onClick={() => setOpen(false)} />
            <Card news={news} />
            {/* fazer um map dos comentários */}
            <S.Comments>
              {news.comments.length &&
                news.comments.map((item) => {
                  return (
                    <S.Comment key={item.idComment}>
                      <p>{item.comment}</p>
                      <FaTrash onClick={() => setOpenModal(true)} />

                      {openModal && (
                        <DeleteModal
                          title="Deletar comentário"
                          description="Certeza que deseja apagar este comentário?"
                          open={openModal}
                          setOpen={setOpenModal}
                          handleChange={() => deleteComment(item.idComment)}
                        />
                      )}
                    </S.Comment>
                  );
                })}
            </S.Comments>

            <S.CommentsForm>
              <S.CommentsInput
                placeholder="Comente aqui"
                onChange={handleChange}
              />
              {/* <ButtonS
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  margin: "0.5rem",
                }}
                onClick={sendComment}
              >
                Enviar
              </ButtonS> */}
            </S.CommentsForm>
          </S.Wrapper>
        </Modal>
      ) : null}
    </>
  );
}
