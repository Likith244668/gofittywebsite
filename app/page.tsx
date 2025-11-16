import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import CommunitySpace from "./components/CommunitySpace";
import TheGofyttPath from "./components/TheGofyttPath";
import MembersWall from "./components/MembersWall";
import SuccessStories from "./components/SuccessStories";
import TheKnowledgeHub from "./components/TheKnowledgeHub";
import GofyttAcademy from "./components/GofyttAcademy";
import TeamSpace from "./components/TeamSpace";
import EventsAndExperiences from "./components/EventsAndExperiences";
import JoinThe1PercentFitClub from "./components/JoinThe1PercentFitClub";

export default function Home() {
  return (
    <main className="bg-[#1c0533] text-white">
      <HeroSection />
      <OurServices />
      <CommunitySpace />
      <TheGofyttPath />
      <MembersWall />
      <SuccessStories />
      <TheKnowledgeHub />
      <GofyttAcademy />
      <TeamSpace />
      <EventsAndExperiences />
      <JoinThe1PercentFitClub />
    </main>
  );
}
