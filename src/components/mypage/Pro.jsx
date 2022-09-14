import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getUser } from "../../redux/modules/user";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user);

    useEffect(()=>{
        dispatch(__getUser());
    },[dispatch])

    console.log(user)
    return (
        <div>
            <div style={{height:"80px"}}/>

            <div style={{display:"flex", marginLeft:"30px"}}>

                <ChatImg width={200}src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"></ChatImg>

                <div style={{marginLeft:"30px"}}>
                    <h3>{user?.data?.data?.nickname}</h3>
                </div>


            </div>
            <div onClick={()=>{navigate("/edit")}}  
            style={{display:"flex", 
            margin:"20px", 
            border: "2px solid #665760",
            borderRadius:"10px",
            cursor:"pointer"
            }}>
                <p style={{marginLeft:"auto", marginRight:"auto"}}>프로필 수정</p>
            </div>
            <p style={{marginLeft:"20px"}}>매너온도 : {user?.data?.data?.temperature}</p>

            <div style={{display:"flex", 
            margin:"20px", 
            border: "2px #665760",
            borderRadius:"10px"
            }}>
                <div style={{width:"50%"}}>
                    <p style={{marginLeft:"auto", marginRight:"auto"}}>🤍재거래희망률 -%</p>
                    <p style={{marginLeft:"auto", marginRight:"auto", color:"#bdbdbd"}}> 표시될 만큼 충분히 대화하지 않았어요</p>
                </div>

                <div>
                    <p style={{marginLeft:"auto", marginRight:"auto"}}>💬응답률 -%</p>
                    <p style={{marginLeft:"auto", marginRight:"auto", color:"#bdbdbd"}}> 표시될 만큼 충분히 대화하지 않았어요</p>
                </div>
            </div>
            <div style={{display:"flex",  
            backgroundColor:"#e0e0e0"
            }}>
                <div>
                <p style={{marginLeft:"auto", marginRight:"auto"}}>-교1동 미인증, 포남1동 미인증</p>
                <p style={{marginLeft:"auto", marginRight:"auto"}}>-최근 3일 이내 활동 (2021년 1월 27일 가입)</p>


            </div>
            </div>
            <Infodiv onClick={()=>{navigate("/saleslist")}}>
                <p style={{marginLeft:"20px"}}>판매상품 {user?.data?.data?.numOfSale}개</p>
            </Infodiv>
        </div>
    )
}

export default Profile;



const Infodiv = styled.div`
border-bottom: 2px solid #e0e0e0;
cursor:pointer;
`

const ChatImg = styled.img`
width: 70px;
height: 70px;
border-radius:50%
`