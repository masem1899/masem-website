import { useParams } from "react-router-dom"





export default function BlogDetails() {
    const { slug } = useParams();

    return (
        <p>BlogDetails: {slug}</p>
    )
}