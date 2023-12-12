import { JSX } from "react"

export default function index(): JSX.Element {
    let title = "Landing Page"
    return (
        <div className={"text-center"}>
            <title>{title}</title>
            {title}
        </div>
    )
}