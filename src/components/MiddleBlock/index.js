import { lazy } from "react";
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const Button = lazy(() => import("../../common/Button"));

const MiddleBlock = ({ title, content, button, id }) => {
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle" id={id}>
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h2>{title}</h2>
              <S.Content>{content}</S.Content>
              {button ? (
                <Button
                  name="submit"
                  type="submit"
                  onClick={() => {window.open("https://apps.apple.com/us/app/yourmind-gym/id1422670577")}}
                >
                  {button}
                </Button>
              ) : (
                ""
              )}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default MiddleBlock;
