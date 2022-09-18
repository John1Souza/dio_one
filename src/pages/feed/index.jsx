import React from 'react';
import bannerImage from '../../assets/banner.png'
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighLight} from './styles'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';


const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
          <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Column>
          <Column flex={1}>
            <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
            <UserInfo percentual={80} nome="Johnatas Souza" image="https://avatars.githubusercontent.com/u/109979241?v=4" />  
            <UserInfo percentual={54} nome="Johnatas Souza" image="https://avatars.githubusercontent.com/u/109979241?v=4" />  
            <UserInfo percentual={43} nome="Johnatas Souza" image="https://avatars.githubusercontent.com/u/109979241?v=4" />  
            <UserInfo percentual={78} nome="Johnatas Souza" image="https://avatars.githubusercontent.com/u/109979241?v=4" />  
            <UserInfo percentual={90} nome="Johnatas Souza" image="https://avatars.githubusercontent.com/u/109979241?v=4" />  
            <UserInfo percentual={15} nome="Johnatas Souza" image="https://avatars.githubusercontent.com/u/109979241?v=4" />  
          </Column>
          
        </Container>
    </>
  )
}

export {Feed}