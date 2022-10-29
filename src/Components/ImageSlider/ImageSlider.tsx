import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";
import followingFeed from "../../Assets/images/appImages/FollowingFeed.png";
import newFeed from "../../Assets/images/appImages/NewFeed.png";
import profileView from "../../Assets/images/appImages/ProfileView.png";
import videoStream from "../../Assets/images/appImages/VideoStream.png";
import useWindowDimensions from "../getWindowDimensions";


const ImageSliderContainer = styled.div`
  left: 200px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  margin: 1rem;
`;

const images = [
    videoStream,
    followingFeed,
    newFeed,
    profileView,
];

const Component = () => {
    const {height} = useWindowDimensions();
    if (height <= 722) {
        return (
            <SimpleImageSlider
                width={253}
                height={548}
                style={{borderRadius: 22}}
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
                width={352}
                height={762}
                style={{borderRadius: 22}}
                images={images}
                showBullets={false}
                showNavs={false}
                autoPlay={true}
                autoPlayDelay={2.0}
            />
        );
    }
}

function ImageSlider() {
    return <ImageSliderContainer>
        <Component/>
    </ImageSliderContainer>
}

export default ImageSlider;