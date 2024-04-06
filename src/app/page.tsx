"use client";
import HeroPunch from "@/components/hero-punch";
import HeroTag from "@/components/hero-tag";
import MiniDashBoard from "@/components/mini-dashboard";
import NavigationBar from "@/components/navigation-bar";
import ServicesSection from "@/containers/services-section";
import { Button } from "@/ext_components/Button";
import React from "react";

export default async function Page() {
  return (
    <section className="flex flex-col items-center text-lg font-medium">
      <NavigationBar />
      <HeroTag />
      <HeroPunch />
      <Button
        size="lg"
        rounded="full"
        variant="bordered"
      >{`Start Trading ->`}</Button>
      <MiniDashBoard />
      <ServicesSection />
    </section>
  );
}
