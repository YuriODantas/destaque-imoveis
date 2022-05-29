import React from 'react'
import * as C from './style'

export const Description: React.FC<{ color?: string }> = ({
  children,
  color
}) => {
  return <C.Container color={color}>{children}</C.Container>
}
