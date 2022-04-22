import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: "",
    status: "idle",
    error: null
}

export const registerAccount = createAsyncThunk('login/enter', async (credentials) => {
    const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    return response.json()
})

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(registerAccount.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(registerAccount.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.status = 'succeeded'
        })
        builder.addCase(registerAccount.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
    }
})

export default registrationSlice.reducer