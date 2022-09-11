// 로그인 페이지
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

const LoginPage = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let initialState = {
        phoneNumber: "",
        passWord: ""
    }
    let [member, setMember] = useState(initialState);
    const onChangeHandler = (event) => {
        // name과 value를 input의 event.target으로 지정 (파라미터 참조)
        const { name, value } = event.target;
        // 수정되는 내용과 member이 가진 값을 매칭하여 state변경
        setMember({ ...member, [name]: value });
      };
      const onClickHandler = (event) => {
        
      }
    return  (
        <div>
            <input placeholder="휴대폰 번호"
                    onChange={onChangeHandler}
                    name="phoneNumber"
                    value={member.phoneNumber}
                    type="text"/>
            <input placeholder="비밀번호"
                    onChange={onChangeHandler}
                    name="passWord"
                    value={member.passWord}
                    type="password"/>
            <button>로그인</button>
            <button onClick={()=>{navigate("/signup")}}>회원가입</button>
        </div>
    )
}

export default LoginPage;