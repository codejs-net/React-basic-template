import React from "react";
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/default";

import * as ROUTES from "./routes/route";
import Layout from "./components/Layout/Layout";
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFoundPage from "./pages/Error";

function App() {
  return(
  <BrowserRouter>
   <ThemeProvider theme={theme}>
  <CssBaseline />
  <div className="App">
          <Layout>
            <Routes>
               
                <Route path={ROUTES.Login} element={<Login />} />
                <Route path={ROUTES.Register}  element={<Register />} />
                <Route path={ROUTES.Home}  element={<Home />} />
                <Route path={ROUTES.Error} element={<NotFoundPage />} />
                <Route path='*' element={<Navigate to={ROUTES.Error} />} />
                     
          </Routes>
         </Layout>
 </div>
 </ThemeProvider>
 </BrowserRouter>
  );
}

export default App;
