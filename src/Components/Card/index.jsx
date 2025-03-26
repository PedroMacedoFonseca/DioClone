import { FiThumbsUp } from 'react-icons/fi'
import React from "react";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
  <CardContainer>
    <ImageBackground src= 'https://i0.wp.com/blog.portaleducacao.com.br/wp-content/uploads/2022/02/365-O-que-e%CC%81-tecnologia_.jpg' />
    <Content>
        <UserInfo>
            <UserPicture src='https://cdn-icons-png.flaticon.com/512/219/219983.png'/>
            <div>
                <h4>Nome de Usuário</h4>
                <p>Tempo ocorrido</p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4>Projeto X</h4>
            <p>Projeto feito no curso Y do bootcamp. <br />
            <strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
            <h4>#HTML #CSS #Javascript #React</h4>
            <p>
                <FiThumbsUp /> 15 
            </p>
        </HasInfo>
    </Content>
  </CardContainer>
)};

export { Card };
