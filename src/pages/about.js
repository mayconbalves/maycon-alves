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
        </MediaSocialSection>
      </Container>
    </Content>
  )
}

export default About
