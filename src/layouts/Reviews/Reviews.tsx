import styled from "styled-components";
import { COLORS, DEVICE } from "../../style";
import { Button, Typography } from "../../components";
import { useState } from "react";
import { MOCK_REVIEWS } from "../../mocks/reviews";
import leftIconSrc from "../../assets/leftIcon.svg";
import rightIconSrc from "../../assets/rightIcon.svg";

const Reviews = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const handleLeftClick = () => {
    setActiveReviewIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightClick = () => {
    setActiveReviewIndex((prevIndex) =>
      Math.min(prevIndex + 1, MOCK_REVIEWS.length - 1)
    );
  };

  return (
    <Wrapper>
      <ArrowButton
        $isActive={activeReviewIndex === 0}
        $url={leftIconSrc}
        onClick={handleLeftClick}
      />
      <ContentWrapper>
        <Typography color={COLORS.TYPOGRAPHY.ACTIVE} textTransform="uppercase">
          What Our Customers Say
        </Typography>

        <Title size="H3">{MOCK_REVIEWS[activeReviewIndex].title}</Title>
        <Typography color={COLORS.TYPOGRAPHY.SECONDARY} size="BODY2">
          {MOCK_REVIEWS[activeReviewIndex].body}
        </Typography>
        <Typography color={COLORS.TYPOGRAPHY.SECONDARY} size="BODY2">
          {MOCK_REVIEWS[activeReviewIndex].author}
        </Typography>

        <FaqButton text="Frequently Asked Questions" color="ACTIVE" />
      </ContentWrapper>
      <ArrowButton
        $isActive={activeReviewIndex === MOCK_REVIEWS.length - 1}
        $url={rightIconSrc}
        onClick={handleRightClick}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 65vh;
  background-color: ${COLORS.WHISPER};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  gap: 11px;
  text-align: center;
  margin: 0 8vw;

  @media ${DEVICE.md} {
    width: 60%;
    margin: 0;
  }
`;

const Title = styled(Typography)`
  margin: 6px 0 13px 0;
`;

const FaqButton = styled(Button)`
  margin-top: 25px;
`;

const ArrowButton = styled.button<{ $isActive: boolean; $url: string }>`
  cursor: pointer;
  background-image: url(${(props) => props.$url});
  background-repeat: no-repeat;
  background-size: contain;
  filter: ${(props) => (props.$isActive ? "contrast(0)" : "none")};
  border: none;
  background-color: transparent;
  width: 70px;
  height: 70px;

  &:disabled {
    cursor: default;
    filter: contrast(0);
  }
`;

export default Reviews;
