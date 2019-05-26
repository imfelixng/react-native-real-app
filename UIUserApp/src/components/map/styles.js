import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

const LocationBox = styled.View`
  background: #FFF;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.1;
  elevation: 1;
  border: 1px solid #DDD;
  flex-direction: row;
  ${
    Platform.select({
      ios: css`
        margin-top: 20px;
      `,
      android: css`
        margin-top: 10px;
        margin-left: 10px;
      `
    })
  }
`;

const LocationText = styled.Text`
  margin: 8px 10px;
  font-size: 14px;
  color: #333;
  max-width: 200px;
`;

const LocationTimeBox = styled.View`
  background: #222;
  padding: 3px 8px;
`;

const LocationTimeText = styled.Text`
color: #FFF;
  font-size: 12px;
  text-align: center;
`;

const LocationTimeTextSmall = styled.Text`
  color: #FFF;
  font-size: 10px;
  text-align: center;
`;

const Back = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: ${
    Platform.select({
      ios: 60,
      android: 50,
    })
  }
`;

export {
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall,
  Back
}