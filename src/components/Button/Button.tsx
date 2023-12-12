import { FC } from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "../../style";

interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
  iconEnd?: JSX.Element;
  color?: "ACTIVE" | "DEFAULT";
  size?: "SMALL" | "DEFAULT";
}

const Button: FC<Props> = ({
  text,
  onClick,
  iconEnd,
  color = "DEFAULT",
  size = "DEFAULT",
  className,
}) => {
  return (
    <StyledButton
      className={className}
      $color={color}
      $size={size}
      onClick={onClick}
    >
      {text}
      {iconEnd && <IconContainer>{iconEnd}</IconContainer>}
    </StyledButton>
  );
};

interface StyledButtonProps {
  $color: "ACTIVE" | "DEFAULT";
  $size: "SMALL" | "DEFAULT";
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  color: ${COLORS.WHITE};
  background: ${(props) => COLORS.BUTTON.BG[props.$color]};
  padding: ${(props) => SIZES.BUTTON.PADDING[props.$size]};
  font-size: ${(props) => SIZES.BUTTON.FONT_SIZE[props.$size]};
  border: 1px solid ${(props) => COLORS.BUTTON.BORDER[props.$color]};
  border-radius: ${(props) => SIZES.BUTTON.BORDER_RADIUS[props.$size]};
  transition: color 0.3s ease, background-color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    color: ${(props) => COLORS.BUTTON.HOVER.COLOR[props.$color]};
    background: ${(props) => COLORS.BUTTON.HOVER.BG[props.$color]};
    border: 1px solid ${(props) => COLORS.BUTTON.HOVER.BORDER[props.$color]};
  }
`;

const IconContainer = styled.span`
  display: flex; // Adjust as needed for icon alignment
`;

export default Button;
