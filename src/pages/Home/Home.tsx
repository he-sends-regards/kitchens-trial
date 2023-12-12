import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../../layout";
import { Button, Typography } from "../../components";
import { COLORS } from "../../style";
import IMAGES from "../../utils/images";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const bgImages = [IMAGES.homeBg1, IMAGES.homeBg2, IMAGES.homeBg3];

  const handleIndicatorClick = (index: number) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide(activeSlide === 2 ? 0 : activeSlide + 1);
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <Wrapper
      style={{
        background: `url(${bgImages[activeSlide]}) no-repeat center center / cover`,
      }}
    >
      <Header />

      <HomeTextWrapper>
        <Typography textTransform="uppercase" color={COLORS.TYPOGRAPHY.WHITE}>
          Design and order your new kitchen online today
        </Typography>
        <HomeTitle size="H1" color={COLORS.TYPOGRAPHY.WHITE}>
          Bespoke & made to measure
          <br /> handmade kitchen design
        </HomeTitle>

        <div>
          <Button text="Order now" color="ACTIVE" />
        </div>
      </HomeTextWrapper>

      <CarouselIndicators>
        {bgImages.map((_, index) => (
          <Indicator
            key={index}
            active={index === activeSlide}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </CarouselIndicators>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  transition: background 0.5s ease;
`;

const HomeTitle = styled(Typography)`
  margin: 12px 0 30px 0 !important;
`;

const HomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 30px;
`;

const Indicator = styled.div<{ active: boolean }>`
  width: 50px;
  height: 5px;
  background-color: ${({ active }) => (active ? COLORS.ACTIVE : COLORS.WHITE)};
  cursor: pointer;
  border-radius: 3px;
`;

export default Home;
