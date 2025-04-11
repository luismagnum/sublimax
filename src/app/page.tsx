"use client";
import { useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Subli from "@/components/subli/Subli";
import Subliremera from "@/components/subliremera/Subliremera";
import Slider from "@/components/slider/Slider";
import Footer from "@/components/footer/Footer";
import SubliTazas from "@/components/sublitaza/SubliTazas";
import Rompecabezas from "@/components/rompecabezas/Rompecabezas";
import Encargar from "@/components/encargar/Encargar";
import Testimonios from "@/components/testimonios/Testimonios";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset:100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
    }, []);
  return (
    <main className="overflow-x-hidden">
    <Navbar />
    <Hero />
    <Slider />
    <div id="subli">
    <Subli />
    </div>
    <Subliremera />
    <SubliTazas />
    <Rompecabezas />
    <Testimonios />
    <div id="encargar">
    <Encargar />
    </div>
    <Footer />
    </main>
  );
}
