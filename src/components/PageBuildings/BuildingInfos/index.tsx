import React, { useEffect, useState } from 'react'
import * as S from './styles'

type Props = {
  image: string
  name: string
  bedroom: string
  moreInfo: string
  nameButton: string
}

export const BuildingInfos = ({
  image,
  name,
  bedroom,
  moreInfo,
  nameButton
}: Props) => {
  const [inputName, setInputName] = useState('')
  const [link, setLink] = useState(
    `https://api.whatsapp.com/send?phone=5513997088957&text=Ol%C3%A1%2C%20estou%20interessado(a)%20no%20edif%C3%ADcio%20${name}`
  )

  const handleChange = () => {
    setLink(
      `https://api.whatsapp.com/send?phone=5513997088957&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20${inputName}%20e%20estou%20interessado(a)%20no%20edif%C3%ADcio%20${name}`
    )
  }

  useEffect(() => {
    if (inputName.length > 0) {
      handleChange()
    }
  }, [inputName])

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
        <S.Link id="dispatchGoogle" href={link}>
          <img src="/building.svg" alt="Building icon" />
          <p>{nameButton}</p>
        </S.Link>
      </S.Wrapper>
    </S.Container>
  )
}
