import { createAsyncThunk } from "@reduxjs/toolkit"
import { API, setAuthToken } from "../../lib/api"


interface ILoginForm {
    email?: string,
    password?: string
}

export const loginAsync = createAsyncThunk(
    "/login",
    async (body: ILoginForm, { rejectWithValue }) => {
        try {
            const res = await API.post("login", body)
            const token = res.data.token
            const user = res.data.user

            setAuthToken(token)
            localStorage.setItem("token", token)

            return { token, user }
        } catch (error) {
            return rejectWithValue("error")
        }
    }
)

export const authCheckAsync = createAsyncThunk(
    "/auth/check",
    async (token: string, { rejectWithValue }) => {
        try {
            const res = await API.get("auth/check", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const user = res.data.user

            return { token, user }
        } catch (error) {
            setAuthToken()
            localStorage.removeItem("token")
            return rejectWithValue("error")
        }
    }
)