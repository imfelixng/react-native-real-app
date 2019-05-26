import React from 'react'
import {
  Container,
  TypeTitle, TypeDescription, TypeImage,
  RequestButton, RequestButtonText
} from './styles';
const Details = () => {
  return (
    <Container>
      <TypeTitle>Popular</TypeTitle>
      <TypeDescription>
        This is description
      </TypeDescription>
      <TypeImage
        source = {require('../../assets/uberx.png')}
      />
      <TypeDescription>
        $6.00
      </TypeDescription>
      <RequestButton
        onPress = { () => {} }
      >
        <RequestButtonText>Go</RequestButtonText>
      </RequestButton>
    </Container>
  )
}

export default Details
