import React, { useContext, useEffect, useMemo, useRef } from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/img/banner2.png',
    thumbnail: '/img/banner2.png',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}