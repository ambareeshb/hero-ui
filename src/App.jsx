import React from "react";
import { HeroUIProvider } from "@heroui/react";
import Page from "./Dropdown";

export default function App() {
  return (
    <HeroUIProvider>
      <Page />
    </HeroUIProvider>
  );
}
