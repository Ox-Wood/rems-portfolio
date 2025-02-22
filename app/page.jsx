import Footer from "@/components/Footer";
import HeroPage from "@/components/Main/HeroPage";
import RecentVideoProjects from "@/components/Main/RecentVideoProjects";
import RecentWorks from "@/components/Main/RecentWorks";
import ToolsUsed from "@/components/Main/ToolsUsed";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroPage />
      <ToolsUsed />
      <RecentWorks />
      <RecentVideoProjects />
      <Footer />
    </main>
  );
}
