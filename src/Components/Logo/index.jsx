import logo from "../../../src/assets/logocortada.png"

export const Logo = () => {
  return (
      <a href="/breaknews_app/" style={{textDecoration: "none"}}>
      <img
        style={{ width: "7rem" }}
            src={logo}
            alt="Logo BreakNews"
          />
      </a>
  )
}
