import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReceiptIcon from '@mui/icons-material/Receipt';


const Edit = () => {
    const navigate = useNavigate();
    return (
        <Infodiv>
            <div style={{height:"60px"}}/>
            <TradeContainer onClick={()=>{navigate("/")}}>
                <ChatImg
                    width={70}
                    src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"
                ></ChatImg>
                <div style={{marginLeft:"20px"}}>
                    <h3>{localStorage.getItem('name')}</h3>
                 
                </div>
              <p style={{marginLeft:"auto"}}><ArrowForwardIosIcon/></p>
            </TradeContainer>
            <div style={{display:"flex", 
            margin:"20px", 
          
            borderRadius:"10px"
            }}>
          
              
            </div>


            <div style={{display:"flex", 
            margin:"20px", 
          
            borderRadius:"10px"
            }}>
                <h3 style={{marginLeft:"30px"}}>닉네임</h3>
            </div>


            <div style={{display:"flex",
                    marginLeft:"20px",
                    margin:"20px", 
                    border: "2px solid #665760",
                    borderRadius:"10px"
        
        }}>
                    <p style={{marginLeft:"50px"}}>{localStorage.getItem('name')}</p>
                   
                </div>




        </Infodiv>
    )
}

export default Edit;


const Infodiv = styled.div`

border-bottom: 0px solid #e0e0e0;
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