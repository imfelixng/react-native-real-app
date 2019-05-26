import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

const Container = styled.View`
  background: #FFF;
  height: 300px;
  width: 100%;
  position: absolute;
  bottom: 0;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.1;
  shadow-radius: 10;
  elevation: 3;
  border: 1px solid #DDD;
  align-items: center;
  padding: 20px; 
`;

const TypeTitle = styled.Text`
  font-size: 20px;
  color: #222;
`;

const TypeDescription = styled.Text`
  font-size: 14px;
  color: #666;
`;

const TypeImage = styled.Image`
  height: 80px;
  margin: 10px 0;
`;

const RequestButton = styled.TouchableOpacity`
  background: #222;
  justify-content: center;
  align-items: center;
  height: 44px;
  align-self: stretch;
  margin-top: 10px;
`;

const RequestButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 18px;
`;

export {
  Container,
  TypeTitle, TypeDescription, TypeImage,
  RequestButton, RequestButtonText
}