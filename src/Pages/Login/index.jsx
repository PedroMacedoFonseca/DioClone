import { useNavigate } from "react-router-dom";

import { MdEmail, MdLock} from 'react-icons/md'
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import {
  Column,
  Container,
  CreateText,
  ForgotText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const Login = () => {

  const navigate = useNavigate();

  const handleClickFeed = () => {
    navigate('/feed')
  }


  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça Seu Cadastro</TitleLogin>
            <SubtitleLogin>Faça seu Login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary" onClick={handleClickFeed} type="button" />
            </form>
            <Row>
              <ForgotText>Esqueci Minha Senha</ForgotText>
              <CreateText>Criar Conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
