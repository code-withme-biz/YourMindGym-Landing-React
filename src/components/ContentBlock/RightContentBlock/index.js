import { Row, Col } from "antd";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";
import ImgButton from "../../../common/ImgButton";

import * as S from "./styles";

const RightBlock = ({ title, content, button, icon, id, isBigTitle, isImgButton }) => {
  return (
    <S.RightBlockContainer>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              {isBigTitle ? <h1>{title}</h1> : <h2>{title}</h2>}
              <S.Content>{content}</S.Content>
              <S.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  !isImgButton &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        width="true"
                        onClick={() => {}}
                      >
                        {item.title}
                      </Button>
                    );
                  })}
                {button &&
                  typeof button === "object" &&
                  isImgButton &&
                  button.map((item, id) => {
                    return (
                      <ImgButton
                        key={id}
                        width="true"
                        backgroundImg={item.title}
                        onClick={() => window.open(item.link)}
                      />
                    );
                  })}
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={10} md={11} sm={12} xs={24}>
          <Slide right>
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            />
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default RightBlock;
