"use client"
import HeroPunch from "@/components/hero-punch";
import HeroTag from "@/components/hero-tag";
import { Button } from "@/ext_components/Button";
import React from "react";

export default async function Page() {
  return (
    <section className="flex flex-col items-center mt-24 text-lg font-medium">
      <HeroTag />
      <HeroPunch/>
      <Button size="xl" rounded="full" variant="bordered">{`Start Trading ->`}</Button>
    </section>
  );
}
