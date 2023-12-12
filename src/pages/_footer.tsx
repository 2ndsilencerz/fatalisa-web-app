import { JSX } from "react"
import Link from "next/link"

export default function Footer(): JSX.Element {
    return (
        <>
            <nav className="navbar fixed-bottom bg-body-tertiary">
                <div className="container-fluid justify-content-center">
                    <Link className="navbar-brand" href="/">Fatalisa Web App</Link>
                </div>
            </nav>
        </>
    )
}