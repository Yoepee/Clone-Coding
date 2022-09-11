// 바닥 메뉴
import { useState, use } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core/';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({  // style 요소 선언
    container: {                          // container이름의 객체에 스타일링 해주기
        backgroundColor: 'white',
        position: "absolute",
        bottom: 0,
        width: "100%",
        justifyContent: "space-between",
        borderTop: "1.5px solid grey"
    },
    color: {
        color: "black",
        "&.Mui-selected": {
            color: "black",
            fontWeight: "bold"
        },
    }

}));
const InputFooter = ({ foot }) => {
    const classes = useStyles();
    const [value, setValue] = useState(foot)
    const [chat, setChat] = useState("");
    const navigate = useNavigate();
    return (
        <>

            <Box sx={{ flexGrow: 1, color: 'text.primary' }}>
                <BottomNavigation
                    value={value}
                    className={classes.container}
                    onChange={(event, newValue) => {
                        console.log(event.target.value)
                        setValue(newValue);
                    }}>

                    <BottomNavigationAction
                        className={classes.color}
                        icon={<AddIcon />} />
                    <input
                    type="text"
                    value={chat}
                    onChange={(e)=>{setChat(e.target.value)}}
                    />
                    <BottomNavigationAction
                        className={classes.color}
                        icon={<SendIcon />} />
                </BottomNavigation>
            </Box>
        </>
    )
}

export default InputFooter;