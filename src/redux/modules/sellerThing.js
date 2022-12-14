//판매자 상품 조회
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// 판매글 목록 받아오는 내용
export const __getSellerThing = createAsyncThunk(
  "/api/view/sellerproduct/{id}",
  async (payload, thunkAPI) => {

      try {
          const data =  await axios.get(process.env.REACT_APP_DANG_GEUN+`/api/view/sellerproduct/${payload}`, {
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
export const sellerThing = createSlice({
  name:"sellerThing",
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
      [__getSellerThing.pending]: (state) => {
        state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      },
      [__getSellerThing.fulfilled]: (state, action) => {
        state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
        state.data = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      },
      [__getSellerThing.rejected]: (state, action) => {
        state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
        state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      },
    },
})

export default sellerThing;
