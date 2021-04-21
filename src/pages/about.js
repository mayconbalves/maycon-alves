import Content from '../components/content'
import {
  Container,
  Title,
  MediaSocialSection,
  Card
} from '../styles/pages/about-styled'

const About = () => {
  return (
    <Content>
      <Container>
        <Title>Me econtre em qualquer um desses locais !!!</Title>

        <MediaSocialSection>
          <Card>Linkedin</Card>
          <Card>Medium</Card>
          <Card>Github</Card>
          <Card>DevTo</Card>
          <Card>Instagram</Card>
          <Card>Facebook</Card>
          <Card>Youtube</Card>
        </MediaSocialSection>
      </Container>
    </Content>
  )
}

export default About
