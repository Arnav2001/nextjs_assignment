import Image from 'next/image';

const DrawerImg = ({imgPath, width, height}) => {
  return (
    <div>
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
