import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return(
      <Container>
          <img src="/images/logo.png"/>
      </Container>
  );
}

const Container = styled.div`
    height: 60px;
    width: 100%;
    background-color: #fff;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;


    img {
        margin-top: 50px;
    }
` ;