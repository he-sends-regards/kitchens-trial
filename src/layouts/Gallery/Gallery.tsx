import styled from "styled-components";
import { Button, Typography } from "../../components";
import { useCallback, useState } from "react";
import { DEVICE } from "../../style";

const GALLERY_IMAGES = Array.from(
  { length: 8 },
  (_, i) =>
    new URL(`../../assets/gallery${(i % 4) + 1}.png`, import.meta.url).href
);

const Gallery = () => {
  const [visibleImagesCount, setVisibleImagesCount] = useState(4);

  const onViewMoreClick = useCallback(() => {
    setVisibleImagesCount((prevCount) =>
      Math.min(prevCount + 4, GALLERY_IMAGES.length)
    );
  }, []);

  const isViewMoreBtnDisabled = visibleImagesCount === GALLERY_IMAGES.length;

  return (
    <Wrapper>
      <ContentWrapper>
        <Typography size="H3">Customer Gallery</Typography>

        <ImagesList>
          {GALLERY_IMAGES.slice(0, visibleImagesCount).map((src, index) => (
            <GalleryImg
              src={src}
              key={`gallery-item-${index}`}
              alt={`Gallery item ${index + 1}`}
            />
          ))}
        </ImagesList>

        {!isViewMoreBtnDisabled && (
          <Button onClick={onViewMoreClick} text="View more" color="ACTIVE" />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 75vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;

const GalleryImg = styled.img`
  width: 310px;

  @media ${DEVICE.md} {
    width: 40%;
  }
`;

const ImagesList = styled.div`
  margin: 38px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 15vw;

  @media ${DEVICE.lg} {
    padding: 0 14vw;
  }
  @media ${DEVICE.md} {
    padding: 0 12vw;
  }
  @media ${DEVICE.sm} {
    padding: 0 5vw;
  }
`;

export default Gallery;
