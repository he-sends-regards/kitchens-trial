import { FC, ReactNode } from "react";
import styled from "styled-components";
import { COLORS, SIZES } from "../../style";

interface Props {
  children: ReactNode | string;
  className?: string;
  color?: string;
  textTransform?: "uppercase" | "initial";
  size?: "BODY" | "BODY2" | "H1" | "H2" | "H3" | "H4";
  variant?: "TEXT" | "LINK";
}

const Typography: FC<Props> = ({
  children,
  className,
  color = COLORS.TYPOGRAPHY.PRIMARY,
  textTransform = "initial",
  size = "BODY",
  variant = "TEXT",
}) => {
  return (
    <TypographyStyled
      className={className}
      $size={size}
      $textTransform={textTransform}
      $color={color}
      $variant={variant}
    >
      {children}
    </TypographyStyled>
  );
};

interface TypographyStyledProps {
  $color: string;
  $size: "BODY" | "BODY2" | "H1" | "H2" | "H3" | "H4";
  $textTransform?: string;
  $variant?: "TEXT" | "LINK";
  $fontWeight?: string | number;
}
const TypographyStyled = styled.span<TypographyStyledProps>`
  letter-spacing: ${(props) => (props.$size === "BODY" ? "3px" : "0")};
  color: ${(props) => props.$color};
  text-transform: ${(props) => props.$textTransform};
  font-size: ${(props) => SIZES.TYPOGRAPHY.FONT_SIZE[props.$size]};
  line-height: ${(props) => SIZES.TYPOGRAPHY.LINE_HEIGHT[props.$size]};
  cursor: ${(props) => (props.$variant === "LINK" ? "pointer" : "text")};
  font-weight: ${(props) =>
    props.$fontWeight || props.$size === "BODY" || props.$size === "BODY2"
      ? 400
      : 700};
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  font-family: ${(props) =>
    props.$size === "BODY" ? "inherit" : "Helvetica, sans-serif"};

  &:hover {
    text-decoration: ${(props) =>
      props.$variant === "LINK" ? "underline" : "none"};
  }
`;

export default Typography;
