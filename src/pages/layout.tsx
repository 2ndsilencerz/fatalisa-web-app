import NavBar from "./_navbar"
import Footer from "./_footer"
import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <NavBar />
        <main className={"p-2"}>{children}</main>
        <Footer />
    </>
  )
}
