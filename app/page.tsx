import HeroSection from "./components/HeroSection";
import VisionSection from "./components/VisionSection";
import OurServices from "./components/OurServices";
import CommunitySpace from "./components/CommunitySpace";
import TheGofyttPath from "./components/TheGofyttPath";
import MembersWall from "./components/MembersWall";
import SuccessStories from "./components/SuccessStories";

import GofyttAcademy from "./components/GofyttAcademy";
import TeamSpace from "./components/TeamSpace";
import JoinThe1PercentFitClub from "./components/JoinThe1PercentFitClub";
import MediaGallery from "./components/MediaGallery";
import PressMedia from "./components/PressMedia";
import AmbassadorProgram from "./components/AmbassadorProgram";
import TheAppComingSoon from "./components/TheAppComingSoon";
import WorkWithGofytt from "./components/WorkWithGofytt";
import ContactSupportFooter from "./components/ContactSupportFooter";

export default function Home() {
  return (
    <main className="bg-[#1c0533] text-white">
      <HeroSection />
      <VisionSection />
      <CommunitySpace />
      <TheGofyttPath />
      <JoinThe1PercentFitClub />
      <MembersWall />
      <SuccessStories />
      <AmbassadorProgram />
      <GofyttAcademy />
      <TeamSpace />
      <MediaGallery />
      <PressMedia />
      <TheAppComingSoon />
      {/* <OurServices /> */}
      {/* <WorkWithGofytt /> */}
      <ContactSupportFooter />
    </main>
  );
}
