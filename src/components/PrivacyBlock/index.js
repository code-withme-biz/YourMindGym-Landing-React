import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const PrivacyBlock = ({ 
    title, 
    content,
    subtitle1,
    subcontent1,
    subtitle2,
    subcontent2, 
    subtitle3,
    subcontent3,
    subtitle4,
    subcontent4,
    subcontent4_1,
    subtitle5,
    subcontent5,
    subtitle6,
    subcontent6, 
    subtitle7,
    subcontent7, 
    subtitle8,
    subcontent8, 
    subtitle9,
    subcontent9,
    id
}) => {
  return (
    <S.MiddleBlock>
      <Row type="flex" id={id}>
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h2>{title}</h2>
              <S.Content>{content}</S.Content>
              <h6>{subtitle1}</h6>
              <S.Content>{subcontent1}</S.Content>
              {id === 'privacy' ?
                <a href="/">
                    <S.ServiceLink>Google Play Services</S.ServiceLink>
                </a>
                : null
              }
              <h6>{subtitle2}</h6>
              <S.Content>{subcontent2}</S.Content>
              {id === 'privacy' ?
                <>
                    <h6>{subtitle3}</h6>
                    <S.Content>{subcontent3}</S.Content>
                    <h6>{subtitle4}</h6>
                    <S.Content>{subcontent4}</S.Content>
                    <ul>
                        <li>To faciliate our Service;</li>
                        <li>To provide the Service on our behalf;</li>
                        <li>To perform Service-related services; or</li>
                        <li>To assist us in analyzing how our Service is used.</li>
                    </ul>
                    <S.Content>{subcontent4_1}</S.Content>
                    <h6>{subtitle5}</h6>
                    <S.Content>{subcontent5}</S.Content>
                    <h6>{subtitle6}</h6>
                    <S.Content>{subcontent6}</S.Content>
                    <h6>{subtitle7}</h6>
                    <S.Content>{subcontent7}</S.Content>
                    <h6>{subtitle8}</h6>
                    <S.Content>{subcontent8}</S.Content>
                    <h6>{subtitle9}</h6>
                    <S.Content>{subcontent9}</S.Content>
                </>
                : null}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default PrivacyBlock;
