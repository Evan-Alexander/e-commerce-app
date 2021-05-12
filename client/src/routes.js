import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./hoc/MainLayout";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </MainLayout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
