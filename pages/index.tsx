import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MapboxMap from "@/components/MapboxMap";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Adventure Helper - Home</title>
      </Head>
      <Header />
      <main>
        <h1 className="three-d-text">Welcome to Adventure Helper</h1>
        <p className="three-d-text">
          Find the best equipment and activities for your next adventure!
        </p>
      </main>
      <MapboxMap />
      <Footer />
    </div>
  );
};

export default HomePage;
