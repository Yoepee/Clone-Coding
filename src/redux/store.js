import { configureStore} from "@reduxjs/toolkit";
import user from "./modules/user"

import post from "./modules/post"
import detailPost from "./modules/detailPost"

import comment from "./modules/commnet"

import detailThing from "./modules/detailThing"
import thing from "./modules/thing"


export default configureStore({
    reducer: {
      thing:thing.reducer,
    }
});