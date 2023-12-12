import styled from "styled-components";

const LOGO_SRC = new URL("../../assets/logo.png", import.meta.url).href;

const Logo = () => {
  return <LogoStyled src={LOGO_SRC} />;
};

const LogoStyled = styled.img`
  width: 84px;
  height: 33px;
`;

export default Logo;
