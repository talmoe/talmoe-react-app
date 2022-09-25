import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";
import followingFeed from "../../Assets/images/appImages/FollowingFeed.png"
import newFeed from "../../Assets/images/appImages/NewFeed.png"
import profileView from "../../Assets/images/appImages/ProfileView.png"
import videoStream from "../../Assets/images/appImages/VideoStream.png"


const ImageSliderContainer = styled.div`
  width: 375px;
  height: 812px;
  left: 200px;
  border-radius: 22px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  margin: 1rem;
`;

const images = [
    videoStream,
    followingFeed,
    newFeed,
    profileView,
];


function ImageSlider() {
    return <ImageSliderContainer>
        <SimpleImageSlider
            width={375}
            height={812}
            style={{borderRadius: 22}}
            images={images}
            showBullets={false}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={2.0}
        />
    </ImageSliderContainer>
}

export default ImageSlider;