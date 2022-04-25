// React
import React from "react";

// React Native
import { StatusBar } from "react-native";

// Pages
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <>
      <Home />
      <StatusBar barStyle="light-content" />
    </>
  );
}