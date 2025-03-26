import React from "react";
import Logo from "../../Assets/logo-dio.png";
import { Button } from "../Button";
import {
  BuscarInputContainer,
  Column,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt="Logo da DIO" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar ..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
            {autenticado ? (
                <UserPicture src="https://cdn-icons-png.flaticon.com/512/219/219983.png" />
            ) : (
                <>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
                </>
            )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
