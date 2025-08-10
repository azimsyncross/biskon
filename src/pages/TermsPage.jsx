import TermsAndConditions from "../components/legal/TermsPolicy";
import PageTitle from "../components/PageTitle";

function TermsPage() {
  return (
    <>
      <PageTitle
        title="Terms & Conditions"
        backgroundImage="/images/terms-bg.jpg"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Terms & Conditions", current: true },
        ]}
        highlightedText="Last updated: February 2025"
      />
      <TermsAndConditions />
    </>
  );
}

export default TermsPage;
