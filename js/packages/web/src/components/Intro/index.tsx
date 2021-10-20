import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/img/1_accent_a.png',
    originalHeight: '500px',
    thumbnail: '/img/1_accent_a.png',
    thumbnailHeight: '100px'
  },
  {
    original: '/img/1_bismuth_a.png',
    originalHeight: '500px',
    thumbnail: '/img/1_bismuth_a.png',
    thumbnailHeight: '100px'
  },
  {
    original: '/img/1_mono_a.png',
    originalHeight: '500px',
    thumbnail: '/img/1_mono_a.png',
    thumbnailHeight: '100px'
  },
];


export const IntroDiv = () => {

    return (
      <>
        <div style={{
            marginTop: '30px',
            overflow: 'hidden'
        }}>
            <img style={{ borderRadius: '10px', width: '100%' }} src="/img/banner2.png"></img>

        </div>      
        <div style={{
            marginTop: '30px',
            marginLeft: '25px'
        }}>
            <h1 style={{ fontSize: '60px' }}>Voyage Series</h1>
            <h3>Journey with us as we embark on our maiden voyage in generative art.</h3>
            <h3>4,050 unique and lovingly curated visual landscapes. This code generated collection features five color signatures in 15 different pattern variations. </h3>
            <h3>The first in a collection of series to come. Holders are paid 1% in royalties, and are eligible for future airdrops. Launching on Solana Q4 2021. This maiden voyage is just the beginning.</h3>


            <ImageGallery
              items={images}
              showNav={true}
            />            
        </div>
      </>
    );
  };