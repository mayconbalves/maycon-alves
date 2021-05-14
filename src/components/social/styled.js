import styled, { css } from 'styled-components'
import {
  YoutubeWithCircle,
  LinkedinWithCircle,
  MediumWithCircle,
  GithubWithCircle
} from '@styled-icons/entypo-social'

const Icon = css`
  & {
    display: block;
    height: 3rem;
    width: 3rem;
  }
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`
export const SocialItem = styled.a.attrs((props) => ({
  href: props.href,
  title: props.title,
  target: '_blank',
  rel: 'noopener noreferrer'
}))`
  color: #fff;
`

export const YoutubeIcon = styled(YoutubeWithCircle)`
  ${Icon};
`
export const LinkedinIcon = styled(LinkedinWithCircle)`
  ${Icon};
`
export const MediumIcon = styled(MediumWithCircle)`
  ${Icon};
`
export const GithubIcon = styled(GithubWithCircle)`
  ${Icon};
`
