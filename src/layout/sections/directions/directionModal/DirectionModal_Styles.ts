import styled, {keyframes} from "styled-components";

const ModalOverlay = styled.div<{ isClosing: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
    animation: ${props => props.isClosing ? fadeOut : fadeIn} 0.3s ease-out forwards;
    backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background-color: white;
  padding: clamp(24px, 3.5vh, 40px);
  border-radius: clamp(16px, 3vh, 24px);
  width: min(90vw, 850px);
  height: min(85vh, 800px); /* Увеличена высота для десктопа */
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(20px, 2.5vh, 30px);
  margin-bottom: clamp(24px, 3vh, 32px);
  flex-grow: 1;
  overflow: hidden;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    overflow-y: auto;
  }
`;

const ApplyButton = styled.button`
  background: rgba(44, 62, 80, 0.76);
  color: white;
  border-radius: clamp(12px, 1.7vh, 20px);
  font-size: clamp(14px, 2vh, 18px);
  cursor: pointer;
  transition: all 0.2s;
  width: min(90%, 400px); /* Увеличена ширина кнопки */
  padding: clamp(12px, 1.5vh, 18px) 0;
  margin: 0 auto;
  border: none;
  font-weight: 500;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #1a252f;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  /* Адаптация для планшетов */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: min(95%, 500px);
    padding: 16px 0;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;



const ModalHeader = styled.h2`
  font-size: clamp(20px, 2.5vh, 24px);
  margin-bottom: clamp(16px, 2vh, 24px);
  color: #2c3e50;
  font-weight: 600;
  padding-right: 40px;
  line-height: 1.3;
`;



const InfoBlock = styled.div`
  h3 {
    font-size: clamp(16px, 2vh, 18px);
    margin-bottom: clamp(8px, 1vh, 12px);
    color: #2c3e50;
    font-weight: 500;
  }
`;

const ScrollBox = styled.div`
    background: #f8f9fa;
    padding: clamp(16px, 2vh, 20px);
    border-radius: 8px;
    min-height: min(30vh, 250px);
    max-height: min(50vh, 450px);
    overflow-y: auto; 
    line-height: 1.5;
    color: #495057;
    scrollbar-width: none;
    -ms-overflow-style: none; 

    &::-webkit-scrollbar {
        display: none; 
        width: 0;
        height: 0;
        background: transparent;
    }
`;

const RequirementsBox = styled(ScrollBox)`
  ul {
    padding-left: 0;
    margin: 0;
  }

  li {
    margin-bottom: clamp(8px, 1vh, 12px);
    display: flex;
    align-items: flex-start;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: clamp(12px, 1.5vh, 20px);
  right: clamp(12px, 1.5vh, 20px);
  background: none;
  border: none;
  font-size: clamp(24px, 4vh, 32px);
  cursor: pointer;
  color: #6c757d;
  line-height: 1;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    color: #2c3e50;
  }
`;

const Marker = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #07CEB8;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
  margin-top: 0.5em;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

const StyledList = styled.ul`
    list-style: none;
    padding-left: 0;
`;


export const S = {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Marker,
    CloseButton,
    RequirementsBox,
    ContentGrid,
    ApplyButton,
    InfoBlock,
    StyledList,
    ScrollBox
}
