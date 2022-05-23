import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={12} md={12} sm={12} xs={24} align="middle">
                <S.Language>Contact</S.Language>
                <S.Para>
                  Do you have any question regarding the app? Feel free to reach out.
                </S.Para>
                <a href="mailto:l.ymgsupport@gmail.com">
                  <S.Chat>Let's Chat</S.Chat>
                </a>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24} align="middle">
                <S.Language>Support</S.Language>
                <S.Large to="/privacy" left="true">
                  Privacy Policy
                </S.Large>
                <S.Large left="true" to="/terms">
                  {"Terms & Condition"}
                </S.Large>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.png"
                    aria-label="homepage"
                    width="80px"
                    height="80px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://twitter.com/"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.instagram.com/"
                  src="instagram.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default Footer;
