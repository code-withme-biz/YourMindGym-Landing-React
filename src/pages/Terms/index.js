import { lazy } from "react";

import TermsContent from "../../content/TermsContent.json";

const PrivacyBlock = lazy(() => import("../../components/PrivacyBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Terms = () => {
  return (
    <Container>
      <ScrollToTop />
      <PrivacyBlock
        title={TermsContent.title}
        content={TermsContent.text}
        subtitle1={TermsContent.subtitle1}
        subcontent1={TermsContent.subtext1}
        subtitle2={TermsContent.subtitle2}
        subcontent2={TermsContent.subtext2}
        id="terms"
      />
    </Container>
  );
};

export default Terms;
