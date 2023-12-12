import styled from "styled-components";
import aboutUsImgSrc from "../../assets/aboutUs.png";
import { Button, Typography } from "../../components";
import { COLORS, DEVICE } from "../../style";

const AboutUs = () => {
  return (
    <Wrapper>
      <ImageStyled src={aboutUsImgSrc} alt="About Us" />
      <AboutUsContent>
        <Typography color={COLORS.TYPOGRAPHY.ACTIVE} textTransform="uppercase">
          Quality Craftmanship from build to delivery
        </Typography>
        <Title color={COLORS.TYPOGRAPHY.PRIMARY} size="H2">
          Discover the beauty of a handmade kitchen
        </Title>
        <Typography color={COLORS.TYPOGRAPHY.SECONDARY} size="BODY2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
          est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
          feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
          eu pharetra tincidunt, mauris purus ultrices.
        </Typography>
        <AboutUsButton onClick={() => {}} text="About us" color="ACTIVE" />
      </AboutUsContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 75vh;

  @media ${DEVICE.lg} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ImageStyled = styled.img`
  width: 50%;
  object-fit: cover;

  @media ${DEVICE.lg} {
    width: 100%;
  }
`;

const AboutUsContent = styled.section`
  display: flex;
  width: 33%;
  margin-left: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${DEVICE.lg} {
    width: 80%;
    margin-left: 0;
    padding: 20px;
    align-items: center;
  }

  @media ${DEVICE.md} {
    width: 90%;
  }
`;

const Title = styled(Typography)`
  margin: 15px 0 33px 0;
`;

const AboutUsButton = styled(Button)`
  margin-top: 27px;
`;

export default AboutUs;
