import SvgIcon from "../../common/SvgIcon";
import { useHistory, useLocation } from "react-router-dom";

import * as S from "./styles";
import Privacy from "../../pages/Privacy";

const Input = () => {
  const location = useLocation();

  const scrollUp = () => {
    let sectionId;

    if (location.pathname === '/privacy')
      sectionId = 'privacy';
    else if (location.pathname === '/terms')
      sectionId = 'terms';
    else 
      sectionId = 'intro';

    const element = document.getElementById(sectionId);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <S.Up onClick={scrollUp}>
      <SvgIcon src="scroll-top.svg" width="26px" height="26px" />
    </S.Up>
  );
};

export default Input;
