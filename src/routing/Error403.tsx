import React from 'react';
import { Container, Content } from 'rsuite';

export default function Error403() {
  return (
    <Container className='h-full p-6'>
      <Content className='flex items-center justify-center'>
        <h2 className='pr-4 border-r border-slate-300'>403</h2>
        <p className='ps-4'>Non disponi dei permessi sufficienti.</p>
      </Content>
    </Container>
  )
}