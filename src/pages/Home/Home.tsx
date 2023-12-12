import styled from "styled-components";
import { Header } from "../../layout";
import { Button, Typography } from "../../components";
import homBgSrc from "../../assets/homeBg.png";
import { COLORS } from "../../style";

const Home = () => {
  return (
    <Wrapper>
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
          <Button text="Order now" color="ACTIVE" onClick={() => {}} />
        </div>
      </HomeTextWrapper>

      <div>1 2 3</div>
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
  background: transparent url(${homBgSrc}) no-repeat center center / cover;
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

export default Home;
