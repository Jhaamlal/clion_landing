import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import LandingPage from "./landingPage"

export default function Home() {
  return (
    <div>
      <Head>
        <title>clion Care</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="logo.png" />
      </Head>
      <LandingPage />
      <footer className="tw-bg-red-500 tw-text-white tw-text-xl tw-text-center ">
        <p className="tw-text-3xl">Contect Us</p>
        <span className="tw-text-lg tw-flex-1">
          Call Us: <span className="">+919327443271</span>{" "}
        </span>
      </footer>
    </div>
  )
}
