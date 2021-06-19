export function getSmallerImage(images) {
  const smallerImage = images.reduce((prevImage, currentImage) =>
    prevImage.width > currentImage.width ? currentImage : prevImage
  );

  return smallerImage;
}
