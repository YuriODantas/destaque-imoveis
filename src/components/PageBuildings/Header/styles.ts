import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const LogoLeo = styled.img`
  height: 40px;
  margin: 0 21px 0 0;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  margin: 0;
  padding: 0;
`
export const SubTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  padding: 0;
`
