// 게시글 목록 저장소
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// 판매글 목록 받아오는 내용
export const __getPost = createAsyncThunk(
  "/api/townpost_get",
  async (payload, thunkAPI) => {

      try {
          const data =  await axios.get("http://3.34.5.30:8080/api/townpost", {
            headers: {
                authorization: localStorage.getItem('Authorization'),
                refreshtoken: localStorage.getItem('RefreshToken'),
          }});

          return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
  }
);


export const __addtPost = createAsyncThunk(
  "/api/townpost_post",
  async (payload, thunkAPI) => {

      try {
          const data =  await axios.post("http://3.34.5.30:8080/api/townpost",payload, {
            headers: {
                authorization: localStorage.getItem('Authorization'),
                refreshtoken: localStorage.getItem('RefreshToken'),
          }});

          return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
  }
);





// 리덕스를 통한 댓글의 자연스러운 state변화 출력하도록 생성
// createSlice를 통한 redux 생성 - store에서 사용할 수 있는 내용들을 담고 있음
export const getPost = createSlice({
  name:"getPost",
  initialState: {
      data: [],
      success: false,
      error: null,
      isLoading: false
    },
  reducers:{
  },
  // 내부에서 동작하는 함수 외 외부에서 선언해준 함수 동작을 보조하는 기능
  extraReducers: {
      [__getPost.pending]: (state) => {
        state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      },
      [__getPost.fulfilled]: (state, action) => {
        state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
        state.data = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      },
      [__getPost.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      },

      [__addtPost.pending]: (state) => {
        state.isLoading = true; 
      },
      [__addtPost.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.data.data.push(action.payload);
      },
      [__addtPost.rejected]: (state, action) => {
        state.isLoading = false; 
        state.error = action.payload;
      },
    },
})

export default getPost;
