import { useState } from "react";
import { useParams } from "react-router-dom"





export default function BlogDetails() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);

    if (loading) return <p className="text-center mt-10">Loading post...</p>
    if (!post) return <p className="text-center mt-10">Post not found.</p>

    return (
        <p>BlogDetails: {slug}</p>
    )
}