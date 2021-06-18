export function getSmallerImage(track) {
  const smallerImage = track.album.images.reduce((prevImage, currentImage) =>
    prevImage.width > currentImage.width ? currentImage : prevImage
  );

  return smallerImage;
}
