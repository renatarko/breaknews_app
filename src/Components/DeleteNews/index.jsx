import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { deleteNewsService } from "../../Services/postsServices";
import { DeleteModal } from "../DeleteModal";
import { Modal } from "../Modal";

export function DeleteNews({ news, open, setOpen }) {
  const [loading, setLoading] = useState(false);

  const { token } = useAuth();
  const navigate = useNavigate();

  async function deleteNew(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const newsID = news.id;
      await deleteNewsService(newsID, token);

      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Toaster />
      {open ? (
        <Modal>
          <DeleteModal
            handleChange={deleteNew}
            title="Excluir notícia"
            description="Certeza que deseja excluir essa notícia?"
            setOpen={() => setOpen(false)}
            loading={loading}
          />
        </Modal>
      ) : null}
    </>
  );
}
