'use client'

import React, { useEffect } from 'react'
import { Container, Content, Message } from 'rsuite';

export default function Error({
  error,
  reset,
}: {
  error: any
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [])

  switch (error?.status) {
    default:
      return (
        <Container className='h-full p-6'>
          <Content className='flex flex-col items-center justify-center'>
            <h2>Qualcosa è andato storto</h2>
            <p className='my-6 text-center'>
              Siamo spiacenti dell'inconveniente, la preghiamo di riprovare più tardi...<br />
              Se il prblema dovesse persistere la inviatiamo a comunicarcelo al più presto inviando una email a <a href={`mailto:${process.env.helpdesk}`} title="Invia una email all\'assistenza">{process.env.helpdesk}</a>
            </p>
            <Message type="warning" className='mb-6'>
              <strong>Informazioni sull'errore:</strong> {error?.message ?? error?.digest ?? ''}
            </Message>
          </Content>
        </Container>
      )
  }
}