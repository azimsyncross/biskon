import PrivacyPolicy from "../components/legal/PrivacyPolicy";
import PageTitle from "../components/PageTitle";

function PrivacyPage() {
  return (
    <>
      <PageTitle
        title="Privacy & Policy"
        backgroundImage="/images/privacy-bg.jpg"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Privacy & Policy", current: true },
        ]}
        highlightedText="Last updated: February 2025"
      />
      <PrivacyPolicy />
    </>
  );
}

export default PrivacyPage;
