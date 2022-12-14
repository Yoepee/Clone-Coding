import { configureStore} from "@reduxjs/toolkit";
import user from "./modules/user"
import  getPost from "./modules/post"
import detailPost from "./modules/detailPost"
import comment from "./modules/commnet"
import detailThing from "./modules/detailThing"
import thing from "./modules/thing"
import chat from "./modules/chat";
import chatContent from "./modules/chatContent"
import salesList from "./modules/salesList";
import sellerThing from "./modules/sellerThing";
import relationThing from "./modules/relationThing"
import like from "./modules/like";
import getBuyers from "./modules/saleDone";
import purchase from "./modules/purchase";
import wish from "./modules/wish"

export default configureStore({
    reducer: {
      detailThing:detailThing.reducer,
      salesList:salesList.reducer,
      chat: chat.reducer,
      chatContent: chatContent.reducer,
      sellerThing:sellerThing.reducer,
      like: like.reducer,
      relationThing:relationThing.reducer,
      getBuyers:getBuyers.reducer,
      user:user.reducer,
      thing:thing.reducer,
      getPost:getPost.reducer,
      comment:comment.reducer,
      purchase: purchase.reducer,
      wish:wish.reducer,
      detailPost:detailPost.reducer
    }
});