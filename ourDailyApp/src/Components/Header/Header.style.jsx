import styled, {css} from "styled-components";
import { ReactComponent as NavIcon } from "../../assets/nav.svg";

import { rgba } from "polished";
const S = {};

const iconStyles = css`
${({theme}) => {
  return `color: ${theme.general_text}; text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);`;
}}
opacity: 0.8;
margin-left: .8rem;
font-size: 1.4rem;
cursor: pointer;
transition: all 250ms ease;
&:hover {
  opacity: .5;
}
`;

/* ============================== Header ================================= */

S.HeaderContainer = styled.header`
  height: var(--nav-height);

  width: 100vw;
  background-color: ${(props) => props.theme.header};

  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

S.HeaderNavContainer = styled.nav`
  height: 100%;
  width: calc(100% - 4vw);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({theme}) => {
      return `border-bottom: 1px solid ${theme.general_text};`;
  }}
`;

/* ============================== Logo Wrapper ================================= */
S.LogoWrapper = styled.div`
  width: 3rem;
  cursor: pointer;
`;

/* ============================== Nav List ================================= */

S.NavListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

/* ====================== Cart Icon ====================== */

S.CartIconWrapper = styled.div`
  position: relative;
`;

S.CartIcon = styled.i`
  ${iconStyles}
`;

/* ====================== Cart Icon -- > 1 notification ====================== */

S.CartItemsQuantityContainer = styled.div`
  position: absolute;
  top: -5px;
  right: -12px;
  background: red;

  --size: 20px;
  height: var(--size);
  width: var(--size);
  border-radius: 100%;

  display: grid;
  place-items: center;
`;

S.CartItemsQuantityText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
`;

/* ====================== SVG btn -> Float Nav ====================== */

S.NavIconContainer = styled.div`
  all: unset;
  display: grid;
  place-items: center;

  border-radius: 100%;
  cursor: pointer;
  margin-left: .5rem;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: ${rgba("#b2becd", 0.2)};
  }

  &.active {
    background: ${rgba("#b2becd", 0.2)};
  }
`;

S.NavIcon = styled(NavIcon)`
${({theme}) => {
  return `fill: ${theme.general_text};`
}}

`;

S.LogoutBtnContainer = styled.div``;

S.LogoutIcon = styled.i`
${iconStyles}`;

// ============================= ToolTips =========================
// S.LanguageToolTip = styled(ReactToolTip)`
//   background: var(--gray4) !important;
// `;

export default S;
