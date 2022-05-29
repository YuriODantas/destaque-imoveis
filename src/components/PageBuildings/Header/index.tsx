import React from 'react'
import * as S from './styles'

export const HeaderPageBuildings = () => {
  return (
    <S.Container>
      <S.LogoLeo src="/logo-leo-corretor.svg" alt="Logo Leo Corretor" />
      <S.Wrapper>
        <S.Title>Leonardo Steinert</S.Title>
        <S.SubTitle>Corretor de Imóveis</S.SubTitle>
      </S.Wrapper>
    </S.Container>
  )
}
