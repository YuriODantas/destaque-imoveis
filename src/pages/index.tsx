import React from 'react'
import Head from 'next/head'
import { Container, Content } from '../components/Container'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { Description } from '../components/Description'
import { Button } from '../components/Button'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Destaque Imóveis</title>
        <meta name="description" content="Links oficiais da Destaque Imóveis" />
        <link rel="icon" href="/logo-destaque.svg" />
      </Head>

      <Container>
        <Content>
          <Header>
            <img src="/logo-destaque.svg" alt="Logo Destaque Imoveis" />
            <Title>Destaque Imóveis</Title>
          </Header>
          <Description>Aonde estiver plantado, destaque-se!</Description>
          <Button
            icon="/logo-whatsapp.svg"
            name="Whatsapp"
            url="https://api.whatsapp.com/send?phone=5513997088957"
          />
          <Button
            icon="/logo-facebook.svg"
            name="Facebook"
            url="https://pt-br.facebook.com/DestaqueimoveisPG/"
          />
          <Button
            icon="/logo-googlemaps.svg"
            name="Como Chegar"
            url="https://g.page/DestaquePG?share"
          />
          <Button
            icon="/logo-building.svg"
            name="Residencial Cedros"
            url="/Cedros"
          />
        </Content>
      </Container>
    </div>
  )
}

export default Home
