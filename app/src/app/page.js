"use client"
import Image from "next/image";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
    <Hero />
    <Feature />
    <CTA />
    <Footer />
    </div>
  );
}
