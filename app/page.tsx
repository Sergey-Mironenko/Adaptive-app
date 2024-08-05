import Header from "./components/Header";
import Compliting from "./components/Compliting";
import CardContainer from "./components/CardContainer";
import Announcements from "./components/Announcements";

export default function Home() {
  return (
    <div>
      <Header />
      
      <Compliting />

      <CardContainer />

      <Announcements />
    </div>
  );
}
