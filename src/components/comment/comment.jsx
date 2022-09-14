import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getComment, createComment } from "../../redux/modules/commnet";

// 댓글
const Comment = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const comment = useSelector((state) => state.comment);

    const [content,setContent] = useState("")
    
    useEffect(()=>{
        dispatch(__getComment());
    },[dispatch])

    const addComment = async() => {
        let a = await (await axios.post(`http://3.34.5.30:8080/api/towncomment/${id}`))
        .then((response)=>{
            console.log(response)
            dispatch(createComment(response.data));
        })
    }

    return  (<>
    <div>

    </div>
    </>)
}

export default Comment;