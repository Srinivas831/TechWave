import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/utils.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
// import dotenv from 'dotenv/config'

const root = ReactDOM.createRoot(document.getElementById("root"));
// dotenv.config();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <ChakraProvider> */}
        <App />
      {/* </ChakraProvider> */}
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
