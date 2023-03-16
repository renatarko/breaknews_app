import { useState } from "react";
import { SignInContainer } from "../SignIn/SignInStyles";
import { DeleteNew } from "./DeleteNewsStyles";

export function DeleteNews({ newId }) {
  const [open, setOpen] = useState(true);

  function deleteNew(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    fetch(`http://localhost:5000/news/${newId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        setOpen(false);
      })
      .catch((error) => console.log(error.message));
  }

  console.log(newId);

  // function handleOpen(e) {
  //   e.preventDefault();

  //   setOpen(false);
  // }

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
