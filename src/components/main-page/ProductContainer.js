import React from 'react';
import styled from 'styled-components';
import { FaArrowCircleDown } from 'react-icons/fa';


export default function ProductContainer() {
  return(
    <Container>
        <img src="/images/wpp.png" className="wpp-image"/>
        <FaArrowCircleDown className="arrow-icon"/>
        <h1 className="title">SELECIONE O SEU MODELO</h1>
    </Container>
  );
}

const Container = styled.div`
    background: #CECECE;
    height: 566px;
    width: 100%;
    padding-top: 55px;
    position: relative;

    .wpp-image {
        width: 80px;
        position: absolute;
        top: 35px;
        right: 35px;
        cursor: pointer;
    }

    .arrow-icon {
        position: absolute;
        top: -2rem;
        left: 10%;
        font-size: 4.5rem;
        color: #444;
    }
    
    .title {
        color: #4E4E4E;
        font-family: 'Megrim', cursive;
        font-weight: 500;
        font-size: 48px;
        text-align: center;
    }
`