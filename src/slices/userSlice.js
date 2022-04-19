import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [],
    status: "idle",
    error: null
}

export const fetchUsers = createAsyncThunk('user/fetch', async () => {
    const response = await fetch('https://reqres.in/api/users/')
    const json = await response.json();
    return json.data
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.list = state.list.concat(action.payload)
            state.status = 'succeeded'
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
    }
})

export default userSlice.reducer