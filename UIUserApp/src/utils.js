import { Platform, PixelRatio } from 'react-native';

const getPixelSize = (pixels) => {
  return Platform.select({
    android: PixelRatio.getPixelSizeForLayoutSize(pixels),
  })
}

export {
  getPixelSize
}