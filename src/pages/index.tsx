import Head from "next/head";
import Dashboard from "@/pages/dashboard/index";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import scss from "./Home.module.scss";


export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Items Dashboard</title>
        <meta name="description" content="Items dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.main}>
        {/* <Header /> */}
        {
          session && (
            <>
              <SideMenu />
              <Dashboard />
            </>
          )
        }
        <Login/>
      </main>
    </>
  );
}
