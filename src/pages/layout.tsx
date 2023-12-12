import NavBar from "./_navbar"
import Footer from "./_footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <NavBar />
        <main className={""}>{children}</main>
        <Footer />
    </>
  )
}
