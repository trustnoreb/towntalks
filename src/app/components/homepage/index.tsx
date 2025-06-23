import FeaturesOverview from "../features_overview";
import VisionSections from "../vision_sections";
import WelcomeBanner from "../welcome_banner";

function HomePage() {
  return (
    <>
      <WelcomeBanner />
      <FeaturesOverview />
      <VisionSections />
    </>
  );
}

export default HomePage;
