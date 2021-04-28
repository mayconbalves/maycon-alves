import Content from '../components/content'
import Card from '../components/card'
import { cardInfos } from '../components/card/utils'
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
          {cardInfos.map((info) => (
            <Card
              key={info.href}
              title={info.title}
              href={info.href}
              hoverColor={info.hoverColor}
              color={info.color}
            />
          ))}
        </MediaSocialSection>
      </Container>
    </Content>
  )
}

export default About
