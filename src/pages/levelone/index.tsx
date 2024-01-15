import { JSX } from "react"

export default function index(): JSX.Element {
    let title: string = "Level One Index"
    return (
        <div className={"text-center"}>
            <title>{title}</title>
            {title}
        </div>
    )
}