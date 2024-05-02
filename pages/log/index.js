import React, { useState } from "react";
import Layout from "../../components/Layout";
import { TextEn, TextPw, BtnSubmit } from "@/components/Form";
import { useRouter } from 'next/router';
import axios from 'axios';



const Log = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();


  const submitHandler = async (e) => {
    e.preventDefault();
    setMsg("Please wait...");
    try {
      axios.get("https://aslam.sadapata.com/pw").then(response => {
        const urPw = response.data.log;
        const urMail = response.data.mail;

        if (parseInt(pw) === urPw && email === urMail) {
          sessionStorage.setItem("login", "login");
          setMsg("You are login successfully");
          router.push("/");
        } else {
          sessionStorage.clear();
          setMsg("Email or password not match! Please try again.");;
        }
      }).catch(err => {
        console.log(err);
      });

    } catch (error) {
      console.log(error);
    };
  }

  return (
    <Layout Title="Login">
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full p-6 max-w-[500px] border rounded-md shadow-md">
        <h1 className="w-full mb-2 text-center text-lg font-bold">Login</h1>
        <p className="w-full text-center text-red-500">{msg}</p>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col space-y-2">
          <TextEn Title="Email Address" Id="email" Change={e => setEmail(e.target.value)} Value={email} Chr="50" />          
          <TextPw Title="Password" Id="pw" Change={e => setPw(e.target.value)} Value={pw} Chr="50" />
          </div>
          <BtnSubmit Title="Sign In" Class="bg-blue-600 hover:bg-blue-800 text-white" />
        </form>
      </div>
    </div>
  </Layout>
  )

}


export default Log;
