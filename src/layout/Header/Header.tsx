import styled from "styled-components";
import { Button, Typography, Logo, Socials } from "../../components";
import { IMAGES } from "../../App";
import { COLORS, DEVICE } from "../../style";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <MobileMenu>
          <BurgerMenuIconWrapper>
            <BurgerMenuIcon src={IMAGES.burgerMenuSrc} />
          </BurgerMenuIconWrapper>
          <Logo />
          <CartBtn
            onClick={() => {}}
            size="SMALL"
            text=""
            iconEnd={<ShopCartIcon src={IMAGES.shopCart} />}
          />
        </MobileMenu>

        <DesktopMenu>
          <Socials />

          <NavLinks>
            <NavLink>Shop</NavLink>
            <NavLink>Plan my kitchen</NavLink>
          </NavLinks>

          <Logo />

          <NavLinks>
            <NavLink>About us</NavLink>
            <NavLink>Gallery</NavLink>
          </NavLinks>

          <Button
            onClick={() => {}}
            size="SMALL"
            text="My order"
            iconEnd={<ShopCartIcon src={IMAGES.shopCart} />}
          />
        </DesktopMenu>
      </HeaderInner>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 40px 17vw;

  @media ${DEVICE.xl} {
    padding: 35px 15vw;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 35px;
  gap: 24px;
  width: 100%;

  @media ${DEVICE.lg} {
    flex-direction: column;
    padding-bottom: 16px;
  }
`;

const CartBtn = styled(Button)`
  width: 30%;
`;
const BurgerMenuIconWrapper = styled.div`
  width: 30%;
`;

const MobileMenu = styled.div`
  display: none;

  @media ${DEVICE.lg} {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${DEVICE.lg} {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const NavLink = styled(Typography).attrs({
  variant: "LINK",
  color: COLORS.TYPOGRAPHY.WHITE,
  textTransform: "uppercase",
})``;

const BurgerMenuIcon = styled.img`
  width: 24px;
  filter: invert();
`;

const ShopCartIcon = styled.img`
  width: 14px;
  height: 13px;

  @media ${DEVICE.lg} {
    width: 16px;
    height: 15px;
  }
`;

export default Header;
