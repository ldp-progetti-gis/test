import React, { Fragment } from 'react';
import { Container, Content } from 'rsuite';
import RouteChangeComplete from './RouteChangeComplete';

export default function NotFound() {
  
  return (
    <Fragment>
      <RouteChangeComplete />
      <Container className='h-full p-6'>
        <Content className='flex items-center justify-center'>
          <h2 className='pr-4 border-r border-slate-300'>404</h2>
          <p className='ps-4'>Non è stato possibile trovare la risorsa richiesta.</p>
        </Content>
      </Container>
    </Fragment>
  )
}