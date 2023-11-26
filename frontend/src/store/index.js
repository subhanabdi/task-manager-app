import { createSlice, configureStore } from "@reduxjs/toolkit";

const signupDataSlice = createSlice({
  name: "signup data",
  initialState: {
    email: "",
    password: "",
    confirmPassword: "",
  },

  reducers: {
    addSignupData(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.confirmPassword = action.payload.confirmPassword;
    },
  },
});

const userNameSlice = createSlice({
  name: "userName data",
  initialState: {
    userName: "",
  },

  reducers: {
    setUserName(state, action) {
      state.userName = action.payload.userName;
    },
  },
});

const languageSlice = createSlice({
  name: "language preference",
  initialState: {
    langPreference: localStorage.getItem("language") || "en", // Default language or retrieve from local storage
  },

  reducers: {
    setLangPreference(state, action) {
      state.langPreference = action.payload.langPreference;
    },
  },
});

const store = configureStore({
  reducer: {
    signup: signupDataSlice.reducer,
    userName: userNameSlice.reducer,
    langPreference: languageSlice.reducer,
  },
});
// configureStore created store and as createStore it needs to know the reducer which will be responsible for changing it, so we pass this reducer with a special property of reducer

export const signupActions = signupDataSlice.actions;
// signupActions contains all reducers that are in signupDataSlice slice
export const userNameActions = userNameSlice.actions;

export const languageActions = languageSlice.actions;

export default store;
