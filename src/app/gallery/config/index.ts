// gallery configuration

import {GALLERY_CONF, GALLERY_IMAGE} from 'ngx-image-gallery';

export const DEMO_GALLERY_CONF_INLINE: GALLERY_CONF = {
  reactToRightClick: false,
  imageOffset: '0px',
  imagePointer: true,
  showDeleteControl: false,
  showCloseControl: false,
  showExtUrlControl: false,
  closeOnEsc: true,
  showImageTitle: false,
  inline: true,
  backdropColor: 'default'
};

export const DEMO_GALLERY_CONF: GALLERY_CONF = {
  imageBorderRadius: '3px', // css border radius of image (default 3px)
  imageOffset: '0px', // add gap between image and it's container (default 20px)
  imagePointer : false, // show a pointer on image, should be true when handling onImageClick event (default false)
  showDeleteControl: false, // show image delete icon (default false)
  showCloseControl: false, // show gallery close icon (default true)
  showExtUrlControl: false, // show image external url icon (default true)
  showImageTitle: false, // show image title text (default true)
  showThumbnails: false, // show thumbnails (default true)
  closeOnEsc: true, // close gallery on `Esc` button press (default true)
  reactToKeyboard: true, // change image on keyboard arrow press (default true)
  reactToMouseWheel: true, // change image on mouse wheel scroll (default true)
  reactToRightClick: false, // disable right click on gallery (default false)
  thumbnailSize: 30, // thumbnail size (default 30)
  backdropColor: 'default', // gallery backdrop (background) color (default rgba(13,13,14,0.85))
  inline: true, // make gallery inline (default false)
  showArrows: true, // show prev / next arrows (default true)

};


// gallery images
// export const DEMO_GALLERY_IMAGE: GALLERY_IMAGE[] = [
//   {
//     url: 'https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260',
//     altText: 'woman-in-black-blazer-holding-blue-cup',
//     title: 'woman-in-black-blazer-holding-blue-cup',
//     thumbnailUrl: 'https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60'
//   },
//   {
//     url: 'https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260',
//     altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
//     extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
//     thumbnailUrl: 'https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60'
//   },
//   {
//     url: 'http://spacenews.com/wp-content/uploads/2018/02/A72526E6-8604-4654-8DAF-CD1779E0EB84-879x485.jpeg',
//     altText : 'falcon-heavy-lift-off',
//     extUrl: 'http://spacenews.com/wp-content/uploads/2018/02/A72526E6-8604-4654-8DAF-CD1779E0EB84-879x485.jpeg',
//     thumbnailUrl: 'http://spacenews.com/wp-content/uploads/2018/02/A72526E6-8604-4654-8DAF-CD1779E0EB84-879x485.jpeg'
//   },
//   {
//     url: 'https://icdn2.digitaltrends.com/image/spacex-starman-falcon-heavy.jpg',
//     altText: 'spacex-tesla-starman',
//     extUrl: 'https://icdn2.digitaltrends.com/image/spacex-starman-falcon-heavy.jpg',
//     thumbnailUrl: 'https://icdn2.digitaltrends.com/image/spacex-starman-falcon-heavy.jpg'
//   },
// ];

export const DEMO_GALLERY_IMAGE: GALLERY_IMAGE[] = [
  {
    url: 'http://localhost:8000/media/imgs/recdemo/id@0.png',
    altText: 'first-img',
    title: 'First image',
    thumbnailUrl: 'http://localhost:8000/media/imgs/recdemo/id@0.png'
  },
  {
    url: 'http://localhost:8000/media/imgs/recdemo/id@1.png',
    altText: 'second-img',
    title: 'Second image',
    thumbnailUrl: 'http://localhost:8000/media/imgs/recdemo/id@1.png'
  },
  {
    url: 'http://localhost:8000/media/imgs/recdemo/id@2.png',
    altText: 'third-img',
    title: 'Third image',
    thumbnailUrl: 'http://localhost:8000/media/imgs/recdemo/id@2.png'
  },
  {
    url: 'http://localhost:8000/media/imgs/recdemo/id@3.png',
    altText: 'fourth-img',
    title: 'Fourth image',
    thumbnailUrl: 'http://localhost:8000/media/imgs/recdemo/id@3.png'
  },

];
