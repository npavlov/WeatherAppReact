import styled from "styled-components";

const ImgStyled = styled.img`
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.4));
`;

const BigText = styled.p`
  font-size: 3rem;
`;

const SmallText = styled.p`
  margin: 0;
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export { ImgStyled, BigText, SmallText, Break };
