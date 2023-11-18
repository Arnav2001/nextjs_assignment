// components/MyImageComponent.js
import Image from 'next/image';

const DrawerImg = ({imgPath, width, height}) => {
  return (
    <div>
      {/* Replace 'my-image.jpg' with the actual name of your image file */}
      <Image
        src={imgPath}
        alt="drawer Image"
        width={width} // Set the width of the image
        height={height} // Set the height of the image
      />
    </div>
  );
};

export default DrawerImg;
