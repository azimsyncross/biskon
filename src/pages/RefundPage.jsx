import InvestmentPolicy from "../components/legal/InvestmentPolicy";
import PageTitle from "../components/PageTitle";
function RefundPage() {
  return (
    <>
      <PageTitle
        title="Refund Policy"
        backgroundImage="/images/refund-bg.jpg"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Refund Policy", current: true },
        ]}
        highlightedText="Last updated: February 2025"
      />
      <InvestmentPolicy />
    </>
  );
}

export default RefundPage;
