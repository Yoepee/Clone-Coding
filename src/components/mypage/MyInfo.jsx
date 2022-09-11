import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReceiptIcon from '@mui/icons-material/Receipt';
import bg from "../../img/당근페이.png"
const MyInfo = () => {
    const navigate = useNavigate();
    return (
        <Infodiv>
            <TradeContainer>
                <ChatImg
                    width={70}
                    src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"
                ></ChatImg>
                <div style={{marginLeft:"20px"}} onClick={()=>{navigate("/chatdetail/:id")}}>
                    <h3>당근이</h3>
                    <p>동네이름#코드</p>
                </div>
              <p style={{marginLeft:"auto"}}><ArrowForwardIosIcon/></p>
            </TradeContainer>
            <div style={{display:"flex", 
            margin:"20px", 
            border: "2px dashed #ff5722",
            borderRadius:"10px"
            }}>
                <LogoImg src={bg}/>
                <p style={{marginLeft:"auto", marginRight:"10px"}}>중고거래는 이제 당근페이로 해보세요!</p>
            </div>
            <BtnSet>
                <Btn>
                <label>
                    <IconBtn><ReceiptIcon/></IconBtn>
                    <p>판매내역</p>
                    </label>
                </Btn>
                <Btn>
                    <label>
                    <IconBtn><ShoppingBagRoundedIcon/></IconBtn>
                    <p>구매내역</p>
                    </label>
                </Btn>
                <Btn>
                <label>
                    <IconBtn><FavoriteIcon/></IconBtn>
                    <p>관심목록</p>
                    </label>
                </Btn>
            </BtnSet>
        </Infodiv>
    )
}

export default MyInfo;

const Infodiv = styled.div`
border-bottom: 5px solid #e0e0e0;
`
const TradeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 20px;
  max-width: 100%;
  height: 100px;
  cursor:pointer;
  &:hover{
    background-color:#eeeeee;
  }
`;

const ChatImg = styled.img`
width: 70px;
height: 70px;
border-radius:50%
`

const BtnSet = styled.div`
display: grid;
align-items: center;
width:100%;
grid-template-columns: repeat(3, 1fr);
place-content:center;
`
const Btn = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const IconBtn = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
background-color: #ffccbc;
width: 70px;
height: 70px;
color:#ff5722;
cursor:pointer;
`


const LogoImg = styled.img`
width : 110px;
height: 50px;
margin-left : 5px;
`