import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useNews } from "../../Context/newsContext";
import { deleteNewsService } from "../../Services/postsServices";
import { DeleteModal } from "../DeleteModal";
import { Modal } from "../Modal";

export function DeleteNews({ newsObj, open, setOpen }) {
  const [loading, setLoading] = useState(false);

  const { token } = useAuth();
  const { setNews, news } = useNews();
  const navigate = useNavigate();
  async function deleteNew(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const newsID = newsObj.id;

      const response = await deleteNewsService(newsID, token);
      const data = await response.json();
      console.log(data);
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
