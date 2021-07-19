import React from 'react';
import styled from 'styled-components';
import media from '../../styles/index.js';

export default function TopConatiner() {

  return(
      <Container>
          <img src="/images/soccer.png" />
          <ContentContainer>
            <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus purus neque volutpat laoreet quis eget. 
            </h1>
            <button>
              Tirar dúvidas
            </button>
          </ContentContainer>

      </Container>
  );
}

const Container = styled.div`
    background: #EDEDED;
    height: 510px;
    width: 100%;
    position: relative;

    img {
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
    }

    @media (max-width: 1060px) {

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }
    }
` ;

const ContentContainer = styled.div`
    position: absolute;
    left: 10%;
    top: 130px;
    max-width: 750px;

    h1 {
      font-weight: normal;
      font-size: 36px;
      line-height: 45px;
      color: #000000;
      font-family: inherit;
    }

    button {
      background: #F9002E;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      width: 309px;
      height: 73px;
      outline: 0;
      border: 0;
      margin-top: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      font-weight: bold;
      font-size: 24px;
      font-family: inherit;
    }

    @media (max-width: 1060px) {

      position: static;
      margin: 0 auto;
      z-index: 2;
      padding: 0 5%;

      h1 {
        font-size: 28px;
        font-weight: bold;
        text-align: center;
      }

      button {
        margin: 30px auto 0 auto;
      }
    }
`;