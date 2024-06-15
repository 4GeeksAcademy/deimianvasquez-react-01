import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout/Layout.jsx";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "../styles/index.css"





createRoot(document.querySelector("#app")).render(<Layout/>)