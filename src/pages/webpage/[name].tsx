import { useRouter } from "next/router"
import { JSX } from "react"

export default function ReturnName(): JSX.Element {
    const router = useRouter()
    return (
        <div className="textCenter">
            <title>{router.query.name}</title>
            {router.query.name}
        </div>
    )
}