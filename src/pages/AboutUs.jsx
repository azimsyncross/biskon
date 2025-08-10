import AboutUsa from "../components/AboutUsa";
import CallToActionSection from "../components/CallToActionSection";
import LeadershipSection from "../components/LeaderShipSection";
import OurJourney from "../components/OurJourney";
import PageTitle from "../components/PageTitle";
import pageInfo from "../components/utils/pageInfo";
import ValuesSection from "../components/ValuesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import WhyUs from "../components/WhyUs";

export default function AboutUs() {
  const aboutinfo = pageInfo.aboutUs;
  return (
    <>
      <PageTitle
        title={aboutinfo.title}
        breadcrumbs={aboutinfo.breadcrumbs}
        backgroundImage={aboutinfo.bgImage}
      />
      {/* <AboutSection /> */}
      <AboutUsa />
      <WhyChooseUs />
      <OurJourney />
      <ValuesSection />
      <LeadershipSection />
      <WhyUs />
      <CallToActionSection />
    </>
  );
}
