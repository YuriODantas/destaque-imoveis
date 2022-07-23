import React from 'react'
import * as S from './styles'

type IProps = {
  title: string
  subtitle: string
  logo?: string
}

export const HeaderPageBuildings: React.FC<IProps> = ({
  title,
  subtitle,
  logo
}) => {
  return (
    <S.Container>
      {logo && <S.LogoLeo src={logo} alt="Logo" />}
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.Wrapper>
    </S.Container>
  )
}
