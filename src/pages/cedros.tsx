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
      <HeaderPageBuildings />
      <Description color={theme.colors.text}>
        Comprar seu imóvel nunca foi tão fácil
      </Description>
      <BuildingInfos
        image="/buildingsImages/jardim-dos-cedros.jpg"
        name="Res. Jardim dos Cedros"
        bedroom="1 e 2 dormitórios"
        moreInfo="Frente ao mar"
      />
    </ContainerPageBuilding>
  )
}

export default cedros
