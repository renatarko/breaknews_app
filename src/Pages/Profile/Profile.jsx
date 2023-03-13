import { news } from "../../../datas";
import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { BoxText, ContainerCardProfile, ProfileBody } from "./ProfileStyles";

export function Profile() {
  return (
    <>
      <Navbar />
      <ProfileBody>
        <i class="bi bi-arrow-left-circle"></i>

        <ContainerCardProfile>
          <div className="background"></div>

          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt="User photo"
          />

          <BoxText>
            <div>
              <h1>UserName</h1>
              <p>@username</p>
            </div>
            <i className="bi bi-plus-circle-fill"></i>
          </BoxText>
        </ContainerCardProfile>

        {news.map((item, index) => (
          <Card key={index} news={item} />
        ))}
      </ProfileBody>
    </>
  );
}
