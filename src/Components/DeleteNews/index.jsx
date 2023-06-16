import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteNewsService } from "../../Services/postsServices";
import { Form } from "../Form";
import { Modal } from "../Modal";

export function DeleteNews({ news, open, setOpen }) {
  const navigate = useNavigate();

  async function deleteNew(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const newsID = news.id;

    const response = await deleteNewsService(newsID, token);
    const data = await response.json();

    toast.success("Notícia excluída com sucesso!");
    setOpen(false);

    navigate(0);
  }

  return (
    <>
      <Toaster />
      {open ? (
        <Modal>
          <Form title="Apagar notícia" handleClick={() => setOpen(false)}>
            <div className="text">
              <i className="bi bi-x-circle-fill"></i>
              <p>Certeza que deseja excluir esta notícia?</p>
            </div>

            <div className="containerButtons">
              <button className="no" onClick={() => setOpen(false)}>
                Não
              </button>
              <button className="yes" onClick={deleteNew}>
                Sim
              </button>
            </div>
          </Form>
        </Modal>
      ) : null}
    </>
  );
}
