import styled from "styled-components";
import eye from "../../images/icon-view.svg";

export const Flex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 18px;
  width: 325px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.neutral.VerydarkbluecardBG};
  box-shadow: -0px -0px 10px 15px rgba(12, 23, 41, 1);
  cursor: pointer;
`;

export const HoverEeffect = styled.div`
  :after {
    background: url(${eye}) no-repeat center;
    position: absolute;
    content: " ";
    top: 18px;
    left: 18px;
    width: 290px;
    height: 290px;
    border-radius: 8px;
    display: none;
  }
  :hover:after {
    display: block;
    background-color: hsla(178, 100%, 50%, 0.305);
    opacity: 1;
    z-index: 1;
  }
`;

export const Image = styled.img`
  width: 290px;
  border-radius: 8px;
`;

export const View = styled.img`
  position: absolute;
  top: 120px;
  left: 121px;
  z-index: 1;
  opacity: 1;
`;
export const Avatar = styled.img`
  width: 30px;
  border: 1px solid ${({ theme }) => theme.neutral.White};
  border-radius: 50%;
`;

export const Title = styled.div`
  margin-top: 5px;

  h1 {
    font-size: 18px;
    :hover {
      cursor: pointer;
      color: ${({ theme }) => theme.primary.Cyan};
    }
  }
  p {
    display: block;
    color: ${({ theme }) => theme.primary.Softblue};
    font-size: 18px;
  }
`;

export const Value = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  .clock {
    position: relative;
    left: 45px;
  }
  .blue {
    position: relative;
    right: 45px;
    color: ${({ theme }) => theme.primary.Cyan};
  }
  span {
    padding-left: 8px;
    font-size: 13px;
    color: ${({ theme }) => theme.primary.Softblue};
  }
`;
export const Line = styled.div`
  position: relative;
  top: 17px;
  border-bottom: 1px solid ${({ theme }) => theme.neutral.Verydarkblueline};
`;
export const Creator = styled.div`
  display: flex;
  padding-bottom: 20px;
  transform: translateY(28%);
  gap: 1.2em;
  justify-content: flex-start;
  align-items: center;

  p {
    cursor: pointer;
    font-size: 15px;
    :hover {
      color: ${({ theme }) => theme.primary.Cyan};
    }
  }
  span {
    color: ${({ theme }) => theme.primary.Softblue};
  }
`;
