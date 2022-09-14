import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReceiptIcon from '@mui/icons-material/Receipt';


const Edit = () => {
    return (
        <Infodiv >
            <div style={{height:"60px"}}/>
            <TradeContainer >
                <ChatImg
                    width={70}
                    src="https://t1.daumcdn.net/cfile/tistory/202FA7334ED73EDD10"
                ></ChatImg>
            </TradeContainer>


            <div style={{display:"flex", 
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
  text-align: center;
  justify-content:center;
`;

const ChatImg = styled.img`
width: 70px;
height: 70px;
border-radius:50%;
`
