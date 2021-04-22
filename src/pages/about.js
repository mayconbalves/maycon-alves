import Content from '../components/content'
import Card from '../components/card'
import {
  Container,
  Title,
  MediaSocialSection
} from '../styles/pages/about-styled'

const About = () => {
  return (
    <Content>
      <Container>
        <Title>Me econtre em qualquer um desses locais !!!</Title>

        <MediaSocialSection>
          <Card
            title="Linkedin"
            href="https://www.linkedin.com/in/mayconbalves/"
            hoverColor="#0c66c2"
          />

          <Card
            title="Github"
            href="https://www.github.com/mayconbalves/"
            hoverColor="#000"
          />

          <Card
            color="#000"
            title="Medium"
            href="https://mayconmustaine.medium.com/"
            hoverColor="#fff"
          />

          <Card
            title="Youtube"
            href="https://www.youtube.com/channel/UCWoI0GRB6IkCyEt5ANkqobg"
            hoverColor="#ff0102"
          />

          <Card
            title="Facebook"
            href="https://www.facebook.com/mayconmustaine/"
            hoverColor="#4460b1"
          />
        </MediaSocialSection>
      </Container>
    </Content>
  )
}

export default About
