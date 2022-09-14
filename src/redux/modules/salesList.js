//판매내역 목록 저장소
import { createAsyncThunk, createSlice, current  } from "@reduxjs/toolkit";
import axios from 'axios'

// 판매내역 목록 받아오는 내용
export const __getSalesList = createAsyncThunk(
  "/api/user/salespost",
  async (payload, thunkAPI) => {
      try {
          const data =  await axios.get(`http://3.34.5.30:8080/api/user/salespost`, {
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


export const __putChangeIng = createAsyncThunk(
  "api/post/status/${id}",
  async (payload, thunkAPI) => {
      try {
          const data =  await axios.put(`http://3.34.5.30/api/post/status/${payload.id}`,{status: payload.status},{
            headers: {
              Authorization: localStorage.getItem("Authorization"),
              RefreshToken: localStorage.getItem("RefreshToken"),
            }} );
            console.log(data)
          return thunkAPI.fulfillWithValue(payload);
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
  }
);


export const __putChangeDone = createAsyncThunk(
  "api/post/status/${id}",
  async (payload, thunkAPI) => {
      try {

        // console.log(payload)
          const data =  await axios.put(`http://3.34.5.30/api/post/status/${payload.id}`,{status: payload.status},{

            headers: {
              Authorization: localStorage.getItem("Authorization"),
              RefreshToken: localStorage.getItem("RefreshToken"),
            }} );
            // console.log(data)

          return thunkAPI.fulfillWithValue(payload);

        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
  }
);

// 리덕스를 통한 댓글의 자연스러운 state변화 출력하도록 생성
// createSlice를 통한 redux 생성 - store에서 사용할 수 있는 내용들을 담고 있음
export const salesList = createSlice({
  name:"salesList",
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

    //판매내역 조회
      [__getSalesList.pending]: (state) => {
        state.isLoading = true; 
      },
      [__getSalesList.fulfilled]: (state, action) => {
        state.isLoading = false; 
        state.data = action.payload;
      },
      [__getSalesList.rejected]: (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
      },

    
      //상태변경

      [__putChangeIng.pending]: (state) => {
        state.isLoading = true; 
      },
      [__putChangeIng.fulfilled]: (state, action) => {
        state.isLoading = false; 
        // console.log(action.payload)
        let index = state.data.data.findIndex(sale => sale.id === action.payload.id);
        // console.log(index)
        state.data.data.splice(index, 1, {...state.data.data[index], status:action.payload.status})

      },
      [__putChangeIng.rejected]: (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
      },

      //  //판매완료로 변경
      //  [__putChangeDone.pending]: (state) => {
      //   state.isLoading = true; 
      // },
      // [__putChangeDone.fulfilled]: (state, action) => {
      //   state.isLoading = false; 
      //   console.log(state.data)
      //   console.log(action.payload)
      //   // console.log(state)
      //   // state.data = action.payload; 
      // },
      // [__putChangeDone.rejected]: (state, action) => {
      //   state.isLoading = false; 
      //   state.error = action.payload; 
      // },
    },
})

export default salesList;