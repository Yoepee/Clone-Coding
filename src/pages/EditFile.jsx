// 나의 당근 페이지

import ProEditHeader from "../components/header/ProEditHeader";
import  Edit from "../components/mypage/Edit";
import { useState } from "react";

const EditFile = () => {
    const [name, setName] = useState(localStorage.getItem("name"))
    return  (
        <div>
            <ProEditHeader name={name}/>
            <Edit name={name} setName={setName}/>

        </div>
    )
}

export default EditFile;