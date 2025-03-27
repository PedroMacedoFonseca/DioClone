import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from "../../Services/api";

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

const schema = yup.object({
  email: yup.string().email('Email não é válido.').required('E-mail é obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Senha é obrigatória'),
}).required();

const Login = () => {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      
      if (data && data.length === 1) {
        navigate('/feed');
      } else {
        alert('E-mail ou senha inválidos.');
      }
    } catch (error) {
      alert('Houve um erro, tente novamente.');
    }
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
              <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary" type="submit" disabled={!isValid} />
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
