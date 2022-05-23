import { lazy } from "react";

import PrivacyContent from "../../content/PrivacyContent.json";

const PrivacyBlock = lazy(() => import("../../components/PrivacyBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Privacy = () => {
  return (
    <Container>
      <ScrollToTop />
      <PrivacyBlock
        title={PrivacyContent.title}
        content={PrivacyContent.text}
        subtitle1={PrivacyContent.subtitle1}
        subcontent1={PrivacyContent.subtext1}
        subtitle2={PrivacyContent.subtitle2}
        subcontent2={PrivacyContent.subtext2}
        subtitle3={PrivacyContent.subtitle3}
        subcontent3={PrivacyContent.subtext3}
        subtitle4={PrivacyContent.subtitle4}
        subcontent4={PrivacyContent.subtext4}
        subcontent4_1={PrivacyContent.subtext4_1}
        subtitle5={PrivacyContent.subtitle5}
        subcontent5={PrivacyContent.subtext5}
        subtitle6={PrivacyContent.subtitle6}
        subcontent6={PrivacyContent.subtext6}
        subtitle7={PrivacyContent.subtitle7}
        subcontent7={PrivacyContent.subtext7}
        subtitle8={PrivacyContent.subtitle8}
        subcontent8={PrivacyContent.subtext8}
        subtitle9={PrivacyContent.subtitle9}
        subcontent9={PrivacyContent.subtext9}
        id="privacy"
      />
    </Container>
  );
};

export default Privacy;
