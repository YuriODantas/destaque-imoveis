import styled from 'styled-components'

export const Container = styled.p<{ color: string }>`
  color: ${({ theme, color }) => color || theme.colors.primary};
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  font-weight: 300;
  font-size: 25px;
  margin: 10px 0;
  padding: 0;
`
