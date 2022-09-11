import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';



export default function SignIn() {
  const navigate = useNavigate();
  const initialState = {
    phoneNumber:"",
    password:""
  }
  const [user, setUser] = useState(initialState);


  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setUser({...user, [name]: value});
  };

  const login = async (payload) => {
        let a = await axios.post("http://3.34.5.30/api/member/login", payload);
        if(a.data.data === null){
          alert("잘못된 비밀번호 입니다.")
          return
        }
        localStorage.setItem("Authorization", a.headers.authorization);
        localStorage.setItem("Refreshtoken", a.headers.refreshtoken);
        localStorage.setItem("name", a.data.data);
        console.log(a);
        navigate("/")
  };

  return (
    <StContainer>

      <StHeader>로그인</StHeader>
      <StIdPwdInput
        id="phoneNumber"
        placeholder="휴대폰 번호를 입력해주세요"
        type="text"
        value={user.phoneNumber}
        name="phoneNumber"
        onChange={onChangeHandler}
      />
      <StIdPwdInput
        id="password"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={user.password}
        name="password"
        onChange={onChangeHandler}
      />
      <StBtnContainer>
        <StLoginBtn onClick={()=>{login(user)}}>로그인</StLoginBtn>
      </StBtnContainer>
        <p onClick={()=>{navigate("/intro")}}
        style={{cursor:"pointer"}}>취소</p>
    </StContainer>
  );
}

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
  color: #fa6616;
  margin-top: 50px;
`;

const StIdPwdInput = styled.input`
  height: 54px;
  font-size: 14px;
  width: 100%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  // font-size: 16px;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  // outline: none;
  box-sizing: border-box;
  // margin-bottom: 5px;
  margin-top: 30px;
`;

const StBtnContainer = styled.div`
  margin-top: 28px;
`;

const StLoginBtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 54px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: #fa6616;
  border: 0px none;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

