import { configureStore} from "@reduxjs/toolkit";
import user from "./modules/user"

import post from "./modules/post"
import detailPost from "./modules/detailPost"

import comment from "./modules/commnet"

import detailThing from "./modules/detailThing"
import thing from "./modules/thing"
import chat from "./modules/chat";

import salesList from "./modules/salesList";
import sellerThing from "./modules/sellerThing";

export default configureStore({
    reducer: {
      thing:thing.reducer,
      detailThing:detailThing.reducer,
      salesList:salesList.reducer,
      chat: chat.reducer,
      sellerThing:sellerThing.reducer
      
    }
});