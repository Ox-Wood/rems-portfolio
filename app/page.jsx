import Footer from "@/components/Footer";
import HeroPage from "@/components/Main/HeroPage";
import RecentVideoProjects from "@/components/Main/RecentVideoProjects";
import RecentWorks from "@/components/Main/RecentWorks";
import ToolsUsed from "@/components/Main/ToolsUsed";
import ModernNavBar from "@/components/ModernNavBar";

export default function Home() {
  return (
    <main>
      <ModernNavBar />
      <HeroPage />
      <ToolsUsed />
      <RecentWorks />
      <RecentVideoProjects />
      <Footer />
    </main>
  );
}
