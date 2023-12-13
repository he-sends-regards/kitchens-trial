import { FC, ReactNode } from "react";
import styled from "styled-components";
import { DEVICE } from "../../style";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Drawer: FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <DrawerWrapper $isOpen={isOpen}>
      <DrawerContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </DrawerContent>
    </DrawerWrapper>
  );
};

const DrawerWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100;
  padding: 20px;
  display: none;

  @media ${DEVICE.lg} {
    display: block;
  }
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  color: white;
  font-size: 24px;
`;

export default Drawer;
