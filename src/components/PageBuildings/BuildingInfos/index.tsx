import React, { useState } from 'react'
import * as S from './styles'

type Props = {
  image: string
  name: string
  bedroom: string
  moreInfo: string
}

export const BuildingInfos = ({ image, name, bedroom, moreInfo }: Props) => {
  const [inputName, setInputName] = useState('')

  const SendMessage = () => {
    if (inputName.length > 2) {
      window.location.href = `https://api.whatsapp.com/send?phone=5513997088957&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20${inputName}%20e%20estou%20interessado(a)%20no%20edif%C3%ADcio%20${name}`
    }
  }
  return (
    <S.Container image={image}>
      <S.Wrapper>
        <S.BannerInfos>{name}</S.BannerInfos>
        <S.BannerInfos>{bedroom}</S.BannerInfos>
        <S.BannerInfos>{moreInfo}</S.BannerInfos>
      </S.Wrapper>
      <S.Wrapper>
        <S.Input
          type="text"
          placeholder="Digite seu nome aqui."
          onChange={e => setInputName(e.target.value)}
          value={inputName}
        />
        <S.Button onClick={SendMessage}>
          <img src="/building.svg" alt="Building icon" />
          <p>Quero saber mais</p>
        </S.Button>
      </S.Wrapper>
    </S.Container>
  )
}
