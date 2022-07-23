import React from 'react'
import { useTheme } from 'styled-components'
import { ContainerPageBuilding } from '../components/Container'
import { Description } from '../components/Description'
import { BuildingInfos } from '../components/PageBuildings/BuildingInfos'
import { HeaderPageBuildings } from '../components/PageBuildings/Header'

const cedros = () => {
  const theme = useTheme()
  return (
    <ContainerPageBuilding>
      <HeaderPageBuildings
        title="Fale com um consultor"
        subtitle="Antecipe o seu cadastro"
      />
      <Description color={theme.colors.text}>
        Comprar seu imóvel nunca foi tão fácil
      </Description>
      <BuildingInfos
        image="/buildingsImages/max10.jpg"
        name="Residencial Max 10"
        bedroom="1, 2 e 3 dormitórios"
        moreInfo="Alto padrão"
        nameButton="Pré-Cadastro"
      />
    </ContainerPageBuilding>
  )
}

export default cedros
