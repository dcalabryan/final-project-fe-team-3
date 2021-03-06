import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./components/Protected";
import ProtectedLogin from "./components/ProtectedLogin";
import Missing from "./pages/404";
import Home from "./pages/Home";
import InfoProduct from "./pages/InfoProduct";
// import PageProduct from "../../ProductPage";
// import InfoProfile from "./pages/InfoProfile";

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <ProtectedLogin>
              <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
                <Login />
              </GoogleOAuthProvider>
            </ProtectedLogin>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedLogin>
              <Register />
            </ProtectedLogin>
          }
        />

        <Route path="*" element={<Missing />} />

        <Route path="/infoproduct" element={<InfoProduct />} />
        {/* <Route path="/productpage" element={<PageProduct />} /> */}
        {/* <Route
          path="/infoprofile"
          element={
            <Protected>
              <InfoProfile />
            </Protected>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
