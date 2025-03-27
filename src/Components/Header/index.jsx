import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/logo-dio.png";
import { Button } from "../Button";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = ({ autenticado }) => {
  const navigate = useNavigate();

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
              <MenuRight onClick={() => navigate("/")}>Home</MenuRight>
              <Button title="Entrar" onClick={() => navigate("/login")} />
              <Button title="Cadastrar" onClick={() => navigate("/cadastro")} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
