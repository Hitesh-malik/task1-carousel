import ImageSlider from "./ImageSlider";
import img from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.webp'
import img7 from './assets/7.jpg'
const App = () => {
  const slides = [
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
  ]
  const width = screen.width;
  const containerStyles = {
    width: "100%",
    height: "40em",
    margin: "0 auto",
  };
  return (
    <div style={{overflow :'hidden' }}>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={width} />
      </div>
    </div>
  );
};

export default App;
