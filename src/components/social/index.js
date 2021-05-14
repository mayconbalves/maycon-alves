import React from 'react'
import * as S from './styled'

const Social = () => {
  return (
    <S.Social>
      <S.SocialItem
        title="youtube"
        href="https://www.youtube.com/channel/UCWoI0GRB6IkCyEt5ANkqobg"
      >
        <S.YoutubeIcon />
      </S.SocialItem>
      <S.SocialItem
        title="linkedin"
        href="https://www.linkedin.com/in/mayconbalves/"
      >
        <S.LinkedinIcon />
      </S.SocialItem>
      <S.SocialItem title="medium" href="https://mayconmustaine.medium.com/">
        <S.MediumIcon />
      </S.SocialItem>
      <S.SocialItem title="github" href="https://github.com/mayconbalves">
        <S.GithubIcon />
      </S.SocialItem>
    </S.Social>
  )
}

export default Social
