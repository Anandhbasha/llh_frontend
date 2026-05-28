import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoggedIn: false,
  isAdmin: false
}

const newauthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload

      // 🔥 Admin check
      if (username === "admin" && password === "1234") {
        state.isLoggedIn = true
        state.isAdmin = true
      } else {
        alert("Invalid credentials ")
      }
    },

    logout: (state) => {
      state.isLoggedIn = false
      state.isAdmin = false
    }
  }
})

export const { login, logout } = authSlice.actions
export default newauthSlice