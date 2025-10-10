
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeSections from '../components/HomeSections';

export default function Home() {
  return (
    <div className="min-h-screen">
    <Header/>
      <HomeSections/>
      <Footer />
    </div>
  );
}