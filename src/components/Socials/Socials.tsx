import styled from "styled-components";
import { FC } from "react";
import { DEVICE } from "../../style";
import IMAGES from "../../utils/images";

const Socials: FC<{ className?: string }> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <SocialLogo src={IMAGES.instagramLogoSrc} />
      <SocialLogo src={IMAGES.facebookLogoSrc} />
      <SocialLogo src={IMAGES.twitterLogoSrc} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 8px;

  @media ${DEVICE.lg} {
    justify-content: center;
    align-items: center;
  }
`;

const SocialLogo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    filter: brightness(0) saturate(100%) invert(96%) sepia(40%) saturate(5654%)
      hue-rotate(318deg) brightness(94%) contrast(76%);
  }
`;

export default Socials;
