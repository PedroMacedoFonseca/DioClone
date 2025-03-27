import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";
import { Container, Column, Title, TitleHighlight } from "./styles";
import { UserInfo } from "../../Components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight>#Ranking Top da Semana</TitleHighlight>
          <UserInfo
            nome="Nome do Usuário"
            image="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            percentual={75}
          />
          <UserInfo
            percentual={60}
            nome="Nome do Usuário"
            image="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          />
          <UserInfo
            percentual={50}
            nome="Nome do Usuário"
            image="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          />
          <UserInfo
            percentual={30}
            nome="Nome do Usuário"
            image="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          />
          <UserInfo
            percentual={10}
            nome="Nome do Usuário"
            image="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
