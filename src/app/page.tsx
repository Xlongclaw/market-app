"use client"
import HeroPunch from "@/components/hero-punch";
import HeroTag from "@/components/hero-tag";
import MiniDashBoard from "@/components/mini-dashboard";
import { Button } from "@/ext_components/Button";
import React from "react";

export default async function Page() {
  return (
    <section className="flex flex-col items-center mt-20 text-lg font-medium">
      <HeroTag />
      <HeroPunch/>
      <Button size="lg" rounded="full" variant="bordered">{`Start Trading ->`}</Button>
      <MiniDashBoard/>
    </section>
  );
}
