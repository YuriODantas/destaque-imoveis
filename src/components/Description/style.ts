import styled from 'styled-components'

export const Container = styled.p<{ color: string }>`
  color: ${({ theme, color }) => color || theme.colors.primary};
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  margin: 10px 0 20px 0;
  padding: 0;
`
