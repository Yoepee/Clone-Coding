import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Address from "./Address";

const SignUp = () => {
    const navigate = useNavigate();
    const [chkadd, setChkadd] = useState(false);
    const [addr,setAddr] = useState("");
    const initialState = {
        phoneNumber: "",
        nickname: "",
        password: "",
        address: addr
    }
    const [user, setUser] = useState(initialState)
    const [pw, setPw] = useState("")
    const [chkphone, setChkPhone] = useState(false);
    const [chkname, setChkName] = useState(false);
    const [chkpw, setChkPw] = useState(false);

    const onChangeHandler = (event) => {
        const { value, name } = event.target;
        setUser({ ...user, [name]: value });
    };

    useEffect(() => {
        if (user.password !== pw && pw !== "") {
            setChkPw(true);
        }
        else {
            setChkPw(false);
        }

    }, [pw])

    const checkPhone = async () => {
        let a = await axios.post(process.env.REACT_APP_DANG_GEUN+"/api/member/chkPhonenum", { value: user.phoneNumber });
        if (a?.data?.success === true) {
            alert(a?.data?.data);
        } else {
            alert(a?.data?.data)
        }
    }

    const checkName = async () => {
        let a = await axios.post(process.env.REACT_APP_DANG_GEUN+"/api/member/chkNickname", { value: user.nickname });
        if (a?.data?.success === true) {
            alert(a?.data?.data);
        } else {
            alert(a?.data?.data)
        }
    }

    const signUp = async () => {
        // if (chkphone && chkname && chkpw) {
            let a = await axios.post(process.env.REACT_APP_DANG_GEUN+"/api/member/signup", {...user, address:addr});
            if(a?.data?.success){
                alert(a?.data?.data)
                navigate("/login");
            }else{
                alert(a?.data?.data)
            }

        // }
    }
    return (
        <>
        {!chkadd? <Address setAddr={setAddr} setChkadd={setChkadd} />
        :<Container>
            <StHeader>????????????</StHeader>
            <DivInput>
                <Label>
                    <Input placeholder="???????????????"
                        id="phoneNumber"
                        type="text"
                        value={user.phoneNumber}
                        name="phoneNumber"
                        onChange={onChangeHandler}
                    />
                    <CkButton onClick={() => { checkPhone() }}>????????????</CkButton>
                </Label>
            </DivInput>
            <DivInput>
                <Label>
                    <Input placeholder="?????????"
                        id="nickname"
                        type="text"
                        value={user.nickname}
                        name="nickname"
                        onChange={onChangeHandler} />
                    <CkButton onClick={() => { checkName() }}>????????????</CkButton>
                </Label>
            </DivInput>
            <DivInput>
                <Label>
                    <Input placeholder="????????????"
                        id="password"
                        type="password"
                        value={user.password}
                        name="password"
                        onChange={onChangeHandler} />
                </Label>
            </DivInput>
            <DivInput>
                <Label>
                    <Input placeholder="???????????? ??????"
                        id="passwordConfirm"
                        type="password"
                        value={pw}
                        name="passwordConfirm"
                        onChange={(e) => { setPw(e.target.value) }} />
                </Label>
            </DivInput>
            {chkpw ?
                <p style={{ color: "red" }}>??????????????? ???????????? ????????????.</p>
                : null
            }
            <StSignBtn onClick={() => { signUp() }}>????????????</StSignBtn>
            <p style={{ cursor: "pointer" }} onClick={() => { navigate("/intro") }}>??????</p>
        </Container>
        }
        </>
    )
}

export default SignUp;

const Container = styled.div`
align-item:center;
justify-content: center;
text-align: center;
place-content:center;
margin-top: 20%;
display:grid
`

const Label = styled.label`
    overflow: hidden;
    display: block;
    width: 100%;
    margin: 0 0 8px 0;
    border: 1px solid #eee;
    color: #8F8F91;
`;

const CkButton = styled.button`
    consor:pointer;
    border: 1px;
    margin: 15px 0 0;
    display: inline-block;
    text-align: center;
    vertical-align: baseline;
    box-sizing: border-box;
    text-transform: uppercase;
    &:hover{
        consor:pointer;
    }
`

const Input = styled.input`
    width: 75%;
    height: 40px;
    line-height: 28px;
    padding: 0px 0px 2px 7px;
    border: 0 none;
    color: #8F8F91; 
`;

const DivInput = styled.div`
width:400px;
`

const StSignBtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
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

const StHeader = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #fa6616;
  margin-bottom: 20px;
`;