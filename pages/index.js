import React from "react";
import AppLayout from "../components/AppLayout";
import CardList_0 from "../components/CardList_0";
import CardList_1 from "../components/CardList_1";
import CardList_2 from "../components/CardList_2";
import CardList_3 from "../components/CardList_3";
const Home = () => {
  return (
    <>
      <AppLayout>
        <div style={{ marginBottom: "45px" }}>
          <CardList_0 />
        </div>
        <div style={{ marginBottom: "45px" }}>
          <CardList_1 />
        </div>
        <div style={{ marginBottom: "45px" }}>
          <CardList_2 />
        </div>
        <div style={{ marginBottom: "45px" }}>
          <CardList_3 />
        </div>
      </AppLayout>
    </>
  );
};

export default Home;
