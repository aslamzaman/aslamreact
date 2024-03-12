import React from "react";
import Layout from "../components/Layout";



const Home = () => {
  return (
    <Layout Title="Home Page">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="w-full pb-6 text-center text-2xl font-bold">Welcome</h1>
        <div className="w-full md:w-7/12">
          <img src="images/landing/landing.png" alt="landing page" className="w-full" />
        </div>
      </div>
    </Layout>
  )
}


export default Home;