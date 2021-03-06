import styled from "styled-components";
import { rgba } from "polished";

const S = {};

S.ImageFrame = styled.div`
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
  --size: ${({size}) => size};
  width: var(--size);
  height: var(--size);
  border: .2rem solid white;

  border-radius: 100%;
  background-position: center;
  background-size: cover;

  position: relative;

  box-shadow: ${({theme}) => `0 0 10px ${rgba(theme.general_text, 1)}`};

  margin-bottom: 1em;
`;

S.Img = styled.img`
  object-fit: cover;
  border-radius: 100%;

  cursor: pointer;

  transition: filter 250ms ease-in-out;

  ${({hasHoverEffect}) => {
    if(hasHoverEffect === true) {
      return `&:hover {
        filter: blur(3px) brightness(0.5);
      }
      &:hover + .styled_editProfileSpan {
        opacity: 1;
        transform: translate(-50%, -20%);
      };`;
    }
  }}
`;

S.EditProfileText = styled.span`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 10%);
  font-size: 0.7em;
  font-weight: 300;
  opacity: 0;
  pointer-events: none;

  transition: opacity 250ms ease-in-out, transform 250ms;

  color: white;
`;

S.ExtraImgSpan = styled.span`
  color: ${(props) => props.theme.general_text};
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
`;

export default S;
