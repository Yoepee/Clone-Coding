//구매자 선택목록 조회
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// 판매글 목록 받아오는 내용
export const __getBuyers = createAsyncThunk(
  "/api/post/getchatlist/{id}",
  async (payload, thunkAPI) => {
    // console.log(payload)
      try {
          const data =  await axios.get(`http://3.34.5.30:8080/api/post/getchatlist/${payload}`, {
            headers: {
                authorization: localStorage.getItem('Authorization'),
                refreshtoken: localStorage.getItem('RefreshToken'),
          }});
          console.log(data)
          return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
  }
);

// 리덕스를 통한 댓글의 자연스러운 state변화 출력하도록 생성
// createSlice를 통한 redux 생성 - store에서 사용할 수 있는 내용들을 담고 있음
export const getBuyers = createSlice({
  name:"getBuyers",
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
      [__getBuyers.pending]: (state) => {
        state.isLoading = true; 
      },
      [__getBuyers.fulfilled]: (state, action) => {
        state.isLoading = false; 
        state.data = action.payload; 
      },
      [__getBuyers.rejected]: (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
      },
    },
})

export default getBuyers;