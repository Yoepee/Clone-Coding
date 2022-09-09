import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

// 회원가입 페이지
const SignUpPage = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let initialState = {
        phoneNumber: "",
        passWord: "",
        nickname:""
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
            <label>
            <input placeholder="휴대폰 번호"
                    onChange={onChangeHandler}
                    name="phoneNumber"
                    value={member.phoneNumber}
                    type="text"/>
                    <button>휴대폰 중복검사</button>
            </label>
            <input placeholder="비밀번호"
                    onChange={onChangeHandler}
                    name="passWord"
                    value={member.passWord}
                    type="password"/>
            <label>
            <input placeholder="닉네임"
                    onChange={onChangeHandler}
                    name="nickname"
                    value={member.nickname}
                    type="text"/>
                    <button>닉네임 중복검사</button>
            </label>
            <button>회원가입</button>
            <button onClick={()=>{navigate("/login")}}>취소</button>
        </div>
    )
}

export default SignUpPage;