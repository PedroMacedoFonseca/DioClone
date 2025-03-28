import { useNavigate } from "react-router-dom";
import BannerImage from "../../Assets/banner.png";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";

const Home = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente 
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
        </div>
        <div>
          <img src={BannerImage} alt="Imagem Principal da DIO" />
        </div>
      </Container>
    </>
  );
};

export { Home };
