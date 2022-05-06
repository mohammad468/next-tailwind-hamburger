import Header from "../components/Header";
import LeftNav from "../components/LeftNav";

export default function Home() {
  return (
    <div className="flex items-start justify-between">
      <LeftNav />
      <Header />
    </div>
  );
}
