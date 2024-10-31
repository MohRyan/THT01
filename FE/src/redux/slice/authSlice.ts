import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IUser } from "../types/state";
import { authCheckAsync, loginAsync } from "../async/authAsync";

const initialState: IAuthState = {
    user: {} as IUser,
    token: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        LOGIN: (state, action: PayloadAction<{ token: string; user: IUser }>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        CHECK_LOGIN: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        UPDATE_PROFILE: (state, action: PayloadAction<IUser>) => {
            state.user.profile = action.payload.profile
        },
        LOGOUT: (state,) => {
            state.user = {} as IUser
            state.token = ""
            localStorage.removeItem("token")
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                loginAsync.fulfilled,
                (state, action: PayloadAction<{ token: string; user: IUser }>) => {
                    state.token = action.payload.token;
                    state.user = action.payload.user;
                }
            )
            .addCase(loginAsync.rejected, (state) => {
                state.token = "";
                state.user = {} as IUser;
            })

        builder
            .addCase(
                authCheckAsync.fulfilled,
                (state, action: PayloadAction<{ token: string; user: IUser }>) => {
                    state.token = action.payload.token;
                    state.user = action.payload.user;
                }
            )
            .addCase(authCheckAsync.rejected, (state) => {
                state.token = "";
                state.user = {} as IUser;
            })

    },
},
)

export const { LOGIN, CHECK_LOGIN, LOGOUT, UPDATE_PROFILE } = authSlice.actions;
export default authSlice.reducer;