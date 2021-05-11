export const renderCardImage = (image) => {
  if (image.length > 0) {
    return image[0];
  } else {
    return `/images/image_not_availble.png`;
  }
};
