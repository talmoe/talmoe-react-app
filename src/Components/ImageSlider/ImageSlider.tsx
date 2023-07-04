import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";

import stream from "../../Assets/images/appImages/Stream.png";
import follow from "../../Assets/images/appImages/Follow.png";
import discover from "../../Assets/images/appImages/Discover.png";
import feed from "../../Assets/images/appImages/Feed.png";

import useWindowDimensions from "../getWindowDimensions";

const ImageSliderContainer = styled.div`
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 1rem;
  align-items: center;
  z-index: 99;
  overflow-x: hidden;
`;

const images = [stream, follow, discover, feed];

const Component = () => {
  const { width } = useWindowDimensions();
  if (width > 722) {
    return (
      <SimpleImageSlider
        width={300}
        height={648}
        style={{ borderRadius: 20 }}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={2.0}
      />
    );
  } else {
    return (
      <SimpleImageSlider
        width={240}
        height={518}
        style={{ borderRadius: 20 }}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={2.0}
      />
    );
  }
};

function ImageSlider() {
  return (
    <ImageSliderContainer>
      <Component />
    </ImageSliderContainer>
  );
}

export default ImageSlider;
