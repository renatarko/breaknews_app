import { Link } from "react-router-dom"
import styled from "styled-components"

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  
  h2 {
    background: #1086f5;
    background: linear-gradient(to bottom right, #1086f5 26%, #757575 87%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 20px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const Logo = () => {
  return (
    <Link to="/breaknews_app/" style={{textDecoration: "none"}}>
      <LogoWrapper role="link">
        <img
          src="https://www.pngkey.com/png/detail/256-2566407_worldwide-news-api-newspaper-logo-design-png.png"
          alt="Logo Breaking News"
        />
        <h2>
          Breaking <br />
          News
        </h2>
      </LogoWrapper>
    </Link>)
}
