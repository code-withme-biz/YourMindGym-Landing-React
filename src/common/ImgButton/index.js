import * as S from "./styles";

const ImgButton = ({width, children, backgroundImg, onClick }) => (
  <S.Button width={width} backgroundImg={`/img/svg/${backgroundImg}`} onClick={onClick}>
  </S.Button>
);

export default ImgButton;
