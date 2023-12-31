import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "./home/Home";
import WhatWeDo from "./home/WhatWeDo";
import OurSevices from "./home/OurServices";
import OurCommitment from "./home/OurCommitment";
import WhatMotivatesUs from "./home/WhatMotivatesUs";
import Clients from "./home/Clients"
import ClientsItems from "./home/ClientsItem";
import Footer from "./home/Footer"

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <WhatWeDo />
      <OurSevices />
      <OurCommitment />
      <WhatMotivatesUs />
      <Clients images={ClientsItems} />
      <Footer />
    </div>
  );
};

export default LandingPage;
