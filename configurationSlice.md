// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const fetchConfiguration = createAsyncThunk(
//   'configuration/getConfiguaration',
//   async (id: number, thunkAPI) => {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users?_limit=${id}`
//     );
//     const data = await response.json();
//     return data;
//   }
// );

// const initialState = {
//   configuration: {},
// } as any;

// const configurationSlice = createSlice({
//   name: 'configuration',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchConfiguration.fulfilled, (state, action) => {
//       state.configuration = action.payload;
//     });
//   },
// });
// export default configurationSlice.reducer;
// // Later, dispatch the thunk as needed in the app
// // dispatch(fetchUserById(123))
