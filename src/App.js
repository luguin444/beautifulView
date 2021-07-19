import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import { media } from './styles/index.js'

import Header from './components/Header'
import MainPage from './pages/MainPage'

export default function App() {
  return (
    <MainContainer>
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </MainContainer>
  );
}

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Quicksand', sans-serif;
` ;