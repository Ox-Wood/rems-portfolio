import Footer from "@/components/Footer";
import HeroPage from "@/components/Main/HeroPage";
import RecentVideoProjects from "@/components/Main/RecentVideoProjects";
import RecentWorks from "@/components/Main/RecentWorks";
import ToolsUsed from "@/components/Main/ToolsUsed";
import MobileModernNavBar from "@/components/MobileModernNavBar";
import ModernNavBar from "@/components/ModernNavBar";

export default function Home() {
  return (
    <main>
      <div className="max-sm:invisible max-sm:absolute -z-50" ><ModernNavBar /></div>
      <div className="max-sm:opacity-100 absolute max-sm:top-5 max-sm:right-5 z-50 -top-96"><MobileModernNavBar /></div>
      <HeroPage />
      <ToolsUsed />
      <RecentWorks />
      <RecentVideoProjects />
      <Footer />
    </main>
  );
}
