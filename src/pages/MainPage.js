import React from 'react';
import styled from 'styled-components';
import TopContainer from '../components/main-page/TopContainer';
import ProductContainer from '../components/main-page/ProductContainer';

export default function MainPage() {
  return(
      <MainContainer>
        <TopContainer />
        <ProductContainer />
      </MainContainer>
  );
}

const MainContainer = styled.div`
    width: 100%;
    background-color: red;
    height: 500px;
    margin-top: 60px;
` ;