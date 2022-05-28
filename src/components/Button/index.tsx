import React from 'react'
import * as C from './style'

type Props = {
  icon: string
  name: string
  url: string
}

export const Button = ({ icon, name, url }: Props) => {
  return (
    <C.Container href={url}>
      <C.Icon src={icon} alt={name} />
      <C.Text>{name}</C.Text>
    </C.Container>
  )
}
