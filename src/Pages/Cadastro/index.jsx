import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../Services/api";

import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import {
  Column,
  Container,
  CreateText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Email não é válido")
      .required("E-mail é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("Senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
      .required("Confirmação de senha é obrigatória"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      await api.post("users", formData);
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Erro ao cadastrar, tente novamente.");
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
            <SubtitleLogin>
              Crie sua conta e comece agora a aprender! 💡
            </SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                errorMessage={errors.name?.message}
                control={control}
                placeholder="Nome"
                leftIcon={<MdPerson />}
              />
              <Input
                name="email"
                errorMessage={errors.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Input
                name="confirmPassword"
                errorMessage={errors.confirmPassword?.message}
                control={control}
                placeholder="Confirmar Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Cadastrar"
                variant="primary"
                type="submit"
                disabled={!isValid}
              />
            </form>
            <Row>
              <CreateText onClick={() => navigate("/login")}>
                Já tem uma conta? <span>Entrar.</span>
              </CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
