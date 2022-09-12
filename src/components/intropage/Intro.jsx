import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bg from "../../img/당근로고.png"



const Intro = () => {
  const navigate = useNavigate();
  return (
    <div>
      <StContainer>
        <StDanggeunimage src={bg} />
        <StHeader>당신 근처의 당근마켓</StHeader>
        <p>내 동네를 설정하고</p>
        <p>당근마켓을 시작해보세요.</p>
      </StContainer>

    <div style={{position:"absolute", bottom:"0", width:"100%", marginBottom:"20px"}}>
      <StBtnContainer>
        <StSignBtn onClick={() => navigate("/signup")}>시작하기</StSignBtn>
      </StBtnContainer>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#9e9e9e" }}>이미 계정이 있나요? </p>
        <p onClick={() => navigate("/login")}
          style={{ color: "#ff7e36", fontWeight: "bold", cursor: "pointer" }}>로그인</p>
      </div>
    </div>
    </div>
  );
}

export default Intro;

const StDanggeunimage = styled.img`
    width: 130px;
    height: 130px;
    background-position: center;
    background-size: cover;
    margin-top: 40%
`;

const StContainer = styled.div`
  width: 340px;
  margin: 0px auto;
  letter-spacing: -0.6px;
  margin-bottom: 5px;
  text-align: center;
`;

const StHeader = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  margin-top: 10px;
`;


const StBtnContainer = styled.div`
  display: flex;
  margin-top: 28px;
  width:100%;
  align-item:center;
  justify-content: center;
  `;



const StSignBtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  margin: 20px;
  width: 95%;
  height: 54px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: #fa6616;
  border: 0px none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

