import React, { JSX } from "react"
import Link from "next/link"
// import Router from "next/router"
import Image from "next/image"
import icon from "../app/favicon.png"

// const navbarSearchBox = "navbar-search-box"

// const delay = (ms: number) => new Promise(
//     resolve => setTimeout(resolve, ms)
//   );

export default function NavBar(): JSX.Element {

    // handle onsubmit search form
    // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    //     event.preventDefault()
    //     let inputBox: HTMLInputElement = event.currentTarget.childNodes[0] as HTMLInputElement
    //     console.log(inputBox.value)
    //     // let inputBox: HTMLInputElement = document.getElementById(navbarSearchBox) as HTMLInputElement
    //     // let formData = inputBox.value
    //     // console.log(formData)
    //     // console.log("finish")
    //
    //     let redirectUrl = "/webpage/"+ encodeURIComponent(inputBox.value)
    //     // console.log("redirecting to: "+ redirectUrl)
    //     Router.push(redirectUrl)
    // }

    // // handle onclick drop down 
    // const handleDropDown: ReactEventHandler = async (event) => {
    //     // event.preventDefault()
    //     let currentButton: HTMLButtonElement = event.currentTarget as HTMLButtonElement
    //     let collapsedElements: HTMLDivElement

    //     if (currentButton.className.match("navbar-toggler")) {
    //         collapsedElements = document.getElementById("navbarSupportedContent") as HTMLDivElement
    //     } else {
    //         collapsedElements = document.getElementById("navLinkSupportContent") as HTMLDivElement
    //     }

    //     // collapsing / showing
    //     collapsedElements.className = collapsedElements.className.replace(" collapse", " collapsing")
    //     await delay(500)
    //     collapsedElements.className = collapsedElements.className.replace(" collapsing", "")
        
    //     if (!currentButton.ariaExpanded?.match("false") && currentButton.className.match("navbar-toggler")) {
    //         currentButton.className += " collapsed"
    //         currentButton.ariaExpanded = "false"
    //         collapsedElements.className = collapsedElements.className.replace(" show", "")
    //     } else if (currentButton.ariaExpanded?.match("false") && currentButton.className.match("navbar-toggler")) {
    //         currentButton.className = currentButton.className.replace(" collapsed", "")
    //         collapsedElements.className += " show"
    //         currentButton.ariaExpanded = "true"
    //     } else if (!currentButton.ariaExpanded?.match("false") && currentButton.className.match("nav-link")) {
    //         currentButton.ariaExpanded = "false"
    //         collapsedElements.className = collapsedElements.className.replace(" show", "")
    //     } else if (currentButton.ariaExpanded?.match("false") && currentButton.className.match("nav-link")) {
    //         currentButton.ariaExpanded = "true"
    //         collapsedElements.className += " show"
    //     }
    // }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand" href="/">
                            <Image src={icon} alt={"home icon"} className={"justify-center"} width={30} height={30}/>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
                    // onClick={handleDropDown}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/pray-schedule">Pray Schedule</Link>
                            </li>
                            <li className="nav-item inline-block align-content-end">
                                <Link className="nav-link"
                                      href="https://www.linkedin.com/in/taufikakbarwibowo/" target={"_blank"}>
                                    <Image
                                        src={"https://static.licdn.com/aero-v1/sc/h/8s162nmbcnfkg7a0k8nq9wwqo"}
                                        alt={"linkedin icon"} width={30} height={30}/>
                                </Link>
                            </li>
                            <li className="nav-item inline-block align-content-end">
                                <Link className="nav-link" href="https://github.com/2ndsilencerz/" target={"_blank"}>
                                    <Image
                                        src={"https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg"}
                                        alt={"github icon"} width={30} height={30}/>
                                </Link>
                            </li>
                            {/*<li className="nav-item dropdown">*/}
                            {/*<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" */}
                            {/*// onClick={handleDropDown}*/}
                            {/*>*/}
                            {/*    Level*/}
                            {/*</a>*/}
                            {/*<ul className="dropdown-menu justify-content-center" id="navLinkSupportContent">*/}
                            {/*    <li><Link className="dropdown-item" href="/levelone">One</Link></li>*/}
                            {/*    <li><hr className="dropdown-divider"/></li>*/}
                            {/*    <li><Link className="dropdown-item" href="/leveltwo">Two</Link></li>*/}
                            {/*    <li><Link className="dropdown-item" href="/levelthree">Three</Link></li>*/}
                            {/*</ul>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link disabled" aria-disabled="true">Disabled</a>*/}
                            {/*</li>*/}
                        </ul>
                        {/*<form className="d-flex" role="search" onSubmit={handleSubmit}>*/}
                        {/*    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id={navbarSearchBox}/>*/}
                        {/*    <button className="btn btn-outline-success" type="submit">Search</button>*/}
                        {/*</form>*/}
                    </div>
                </div>
            </nav>
        </>
    )
}