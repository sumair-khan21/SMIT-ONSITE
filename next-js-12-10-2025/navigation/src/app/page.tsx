import Navbar from "../components/navbar";
import Home from "../components/home";
import Footer from "../components/footer";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
