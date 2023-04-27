import { useNavigate } from "react-router-dom";
import { SignInContainer } from "../SignIn/SignInStyles";
import { DeleteNew } from "./DeleteNewsStyles";

export function DeleteNews({ news, open, setOpen }) {
  const navigate = useNavigate();

  async function deleteNew(e) {
    e.preventDefault();

    fetcher({
      url: `${ApiRoute.news}/${news.id}`,
      method: "DELETE",
    })
     .then((data) => {
        alert(data.message);
        setOpen(false);
        navigate(0);
      })
     .catch((error) => console.log(error.message));
  }

  return (
    <>
      {open ? (
        <SignInContainer>
          <DeleteNew>
            <h1>Apagar Notícia</h1>
            <i className="bi bi-x"></i>

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
          </DeleteNew>
        </SignInContainer>
      ) : null}
    </>
  );
}
