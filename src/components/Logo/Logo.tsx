import styled from "styled-components";
import IMAGES from "../../utils/images";

const Logo = () => {
  return <LogoStyled src={IMAGES.logo} />;
};

const LogoStyled = styled.img`
  width: 84px;
  height: 33px;
`;

export default Logo;
