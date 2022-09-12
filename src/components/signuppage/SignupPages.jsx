import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function SignUp() {
  const navigate = useNavigate();
  const { username } = useParams();

  // 휴대폰번호, 닉네임, 비밀번호, 비밀번호 확인
  const [userId, setUserId] = useState('');
  const [nickname, setNickName] = useState('');
  const [location, setLoCation] = useState('');
  const [password, setPassWord] = useState('');
  const [confirmpwd, setConFirmPwd] = useState('');

  // 오류메시지 상태
  const [userIdError, setUserIdError] = useState(false);
  const [nicknameError, setNickNameError] = useState(false);
  const [locationError, setLoCationError] = useState(false);
  const [passwordError, setPassWordError] = useState(false);
  const [confirmpwdError, setConFirmPwdError] = useState(false);

  const [getIdCheck, setGetIdCheck] = useState();
  const [getNickCheck, setGetNickCheck] = useState();

  // 휴대폰번호
  const onChangeUserId = (event) => {
    const userIdRegex = /^[A-Za-z0-9+]{4,12}$/;
    if (!event.target.value || userIdRegex.test(event.target.value)) {
      setUserIdError(false);
    } else {
      setUserIdError(true);
    }
    setUserId(event.target.value);
  };

  // 닉네임
  const onChangeNickName = (event) => {
    const nicknameRegex =
      /^[a-zA-Z0-9가-힣ㄱ-ㅎ~!@#$%^&*()_+|<>?:{}`';,./-=]{2,8}$/;
    if (!event.target.value || nicknameRegex.test(event.target.value)) {
      setNickNameError(false);
    } else {
      setNickNameError(true);
    }
    setNickName(event.target.value);
  };

  //지역
  const onChangeLoCation = (event) => {
  const locationRegex = /[가-힣]{5,}/;
  if (!event.target.value || locationRegex.test(event.target.value)) {
      setLoCationError(false);
    } else {
      setLoCationError(true);
    }
    setLoCation(event.target.value);
   };

  // 비밀번호
  const onChangePassWord = (event) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;
    if (!event.target.value || passwordRegex.test(event.target.value)) {
      setPassWordError(false);
    } else {
      setPassWordError(true);
    }
    if (!confirmpwd || event.target.value === confirmpwd) {
      setConFirmPwdError(false);
    } else {
      setConFirmPwdError(true);
    }
    setPassWord(event.target.value);
  };

  // 비밀번호 확인
  const onChangeConFirmPwd = (event) => {
    if (password === event.target.value) {
      setConFirmPwdError(false);
    } else {
      setConFirmPwdError(true);
    }
    setConFirmPwd(event.target.value);
  };
  const validation = () => {
    if (!userId) setUserIdError(true); // 유저아이디가 빈문자열이면 유저아이디에러를 트루로 바꿈
    if (!password) setPassWordError(true);
    if (!confirmpwd) setConFirmPwdError(true);
    if (!nickname) setNickNameError(true);
    if (location) setLoCationError(true);
    if (
      userId &&
      password &&
      confirmpwd &&
      nickname &&
      location &&
      !userIdError &&
      !passwordError &&
      !confirmpwdError &&
      !nicknameError
    ) {
      return true;
    } else {
      return false;
    }
  };
  // 회원가입 버튼
  const onSubmitHandler = async () => {
    if (validation()) {
      try {
        const data = await axios.post('http://3.35.22.118/user/signup', {
          username: userId,
          nickname,
          location,
          password,
        });
        alert(data.data.data); // 데이터 안에 데이터 안에 데이터 값
        setUserId('');
        setPassWord('');
        setConFirmPwd('');
        setNickName('');
        setLoCation('');
        navigate('/signin');
        return;
      } catch (error) {
        throw new Error(error);
      }
    } else {
      alert('입력 정보를 다시 확인하세요!!');
    }
  };
  // 아이디 중복확인 버튼
  const onIdCheck = async () => {
    try {
      const data = await axios.get(
        `http://75.101.245.105/user/signup/usercheck/${userId}`
      );
      setGetIdCheck(data);
      if (data === '사용 가능한 휴대폰 번호입니다') {
        alert({ data });
        return;
      }
      alert('이미 사용중인 휴대폰 번호입니다.');
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    onIdCheck();
  }, []);

  // 닉네임 중복확인 버튼
  const onNickCheck = async () => {
    try {
      const data = await axios.get(
        `http://75.101.245.105/user/signup/nickcheck/${nickname}`
      );
      setGetNickCheck(data);
      if (data.data.data === '사용 가능한 닉네임입니다') {
        alert(data.data.data);
        return;
      }
      alert('이미 사용중인 닉네임입니다.');
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    onNickCheck();
  }, []);

  return (
    <StLayout>

      <StHeader>회원가입</StHeader>
      <StLine>
        <StHeader1>*</StHeader1>
        필수입력사항
      </StLine>
      <StListContainer>
        <StIdForm>
          <StIdBox>
            <StIdLabel>
              휴대폰 번호
              <StHeader1>*</StHeader1>
            </StIdLabel>
          </StIdBox>
        </StIdForm>
        <StInputForm>
          {/* 아이디 에러 */}

          {userIdError ? (
            <>
              <StIdNickInput
                id="userId_error"
                placeholder="휴대폰 번호를 입력해주세요"
                type="text"
                value={userId}
                onChange={onChangeUserId}
              />
              <ErrorMessage>
                휴대폰 번호는 010-0000-0000 양식으로 입력해주세요.
              </ErrorMessage>
            </>
          ) : (
            <StIdNickInput
              id="userId"
              placeholder="휴대폰 번호를 입력해주세요"
              type="number"
              value={userId}
              onChange={onChangeUserId}
            />
          )}
        </StInputForm>
        <StIdBtn type="button" onClick={onIdCheck}>
          중복확인
        </StIdBtn>
      </StListContainer>


      <StListContainer>
        <StIdForm>
          <StIdBox>
            <StIdLabel>
              닉네임
              <StHeader1>*</StHeader1>
            </StIdLabel>
          </StIdBox>
        </StIdForm>
        <StInputForm>
          {/* 닉네임 에러 */}
          {nicknameError ? (
            <>
              <StIdNickInput
                id="nickname"
                placeholder="닉네임을 입력해주세요"
                type="text"
                value={nickname}
                onChange={onChangeNickName}
              />
              <ErrorMessage>
                닉네임은 2자 이상, 8자 이하 모든 문자 사용이 가능합니다.
              </ErrorMessage>
            </>
          ) : (
            <StIdNickInput
              id="nickname"
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={onChangeNickName}
            />
          )}
  

            </StInputForm>
            <StIdBtn type="button" onClick={onNickCheck}>
               중복확인
            </StIdBtn>
            </StListContainer>


      <StListContainer>
        <StIdForm>
          <StIdBox>
            <StIdLabel>
              비밀번호
              <StHeader1>*</StHeader1>
            </StIdLabel>
          </StIdBox>
        </StIdForm>
        <StInputForm>
          {/* 비밀번호 에러 */}
          {passwordError ? (
            <>
              <StLoPwCfInput
                id="password_error"
                placeholder="비밀번호를 입력해주세요"
                type="password"
                value={password}
                onChange={onChangePassWord}
              />
              <LoPwCfErrorMessage>
                비밀번호는 4자 이상, 12자 이하 영문,숫자,특수문자를
                포함해주세요.
              </LoPwCfErrorMessage>
            </>
          ) : (
            <StLoPwCfInput
              id="password"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              onChange={onChangePassWord}
            />
          )}
        </StInputForm>
      </StListContainer>

      <StListContainer>
        <StIdForm>
          <StIdBox>
            <StIdLabel>
              비밀번호
              <div>
                확인
                <StHeader1>*</StHeader1>
              </div>
            </StIdLabel>
          </StIdBox>
        </StIdForm>
        <StInputForm>
          {/* 비밀번호 재확인 에러 */}
          {confirmpwdError ? (
            <>
              <StLoPwCfInput
                id="confirmpwd_error"
                placeholder="비밀번호를 한번 더 입력해주세요"
                value={confirmpwd}
                type="password"
                onChange={onChangeConFirmPwd}
              />
              <LoPwCfErrorMessage>
                비밀번호가 일치하지 않습니다.
              </LoPwCfErrorMessage>
            </>
          ) : (
            <StLoPwCfInput
              id="confirmpwd"
              placeholder="비밀번호를 한번 더 입력해주세요"
              value={confirmpwd}
              type="password"
              onChange={onChangeConFirmPwd}
            />
          )}
        </StInputForm>
      </StListContainer>

      <StSignUpContainer>
        <StSignUpbtn type="submit" onClick={onSubmitHandler}>
          회원가입하기
        </StSignUpbtn>
      </StSignUpContainer>
      <StLine></StLine>
    </StLayout>
  );
}

const StDanggeunimage = styled.image`
  img {
    width: 130px;
    height: 130px;
    background-position: center;
    background-size: cover;
    margin-top: 30px;
  }
  cursor: pointer;
`;

const StHeader = styled.div`
  margin-bottom: 30px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 800;
  text-align: center;
  letter-spacing: -1px;
  color: #ff7e36;
  margin-top: 50px;
`;

const StLine = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid #ff7e36;
  font-size: 12px;
  color: rgb(102, 102, 102);
  line-height: 17px;
  text-align: right;
`;

const StHeader1 = styled.label`
  color: rgb(238, 106, 123);
  // box-sizing: border-box;
  // margin: 0;
  // font-size: 12px;
  // color: rgb(102, 102, 102);
  // line-height: 17px;
  // text-align: right;
`;

const StLayout = styled.div`
  width: 640px;
  margin: 0px auto;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 20px;
`;

const StListContainer = styled.div`
  margin: 0px;
  // font-size: 14px;
  color: #333;
  user-select: none;
  // padding: 0;
  display: inline-flex;
  width: 100%;
  padding: 10px 20px;
`;

const StIdForm = styled.div`
  display: inline-flex;
  // width: 100%;
  // padding: 10px 20px;
`;

const StIdBox = styled.div`
  width: 100px;
  padding-top: 12px;
`;

const StIdLabel = styled.label`
  font-weight: 550;
  color: #ff7e36;
  line-height: 20px;
`;

const StInputForm = styled.div`
  // position: relative;
  //   height: 48px;
  width: 160%;
`;

const StIdNickInput = styled.input`
  // flex: 1 1 0%;
  // padding-bottom: 0px;
  // position: relative;
  height: 48px;
  width: 80%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  // outline: none;
  box-sizing: border-box;
  bottom: 20px;
`;

const StLoPwCfInput = styled.input`
  height: 48px;
  width: 60%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  box-sizing: border-box;
  bottom: 20px;
  margin-right: 125px;
`;

const StIdBtn = styled.button`
  width: 250px;
  margin-left: 8px;
  height: 44px;
  // border-radius: 3px;
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  // width: 100%;
  // height: 52px;
  border-radius: 6px;
  color: #fa6616;
  background-color: rgb(255, 255, 255);
  border: 1px solid #fa6616;
  font-weight: 550;
  font-size: 14px;
  cursor: pointer;
  display: block;
  line-height: 1.15;
`;

const StSignUpbtn = styled.button`
  padding: 0px 10px;
  width: 240px;
  height: 56px;
  border-radius: 3px;
  color: #ffe2d2;
  background-color: #fa6616;
  border: 0px none;
  display: inline-block;
  font-size: 16px;
  font-weight: 550;
  cursor: pointer;
  text-align: center;
  display: block;
`;

const StSignUpContainer = styled.div`
  justify-content: center;
  display: flex;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 530;
`;

const LoPwCfErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 530;
  margin-right: 25%;
`;