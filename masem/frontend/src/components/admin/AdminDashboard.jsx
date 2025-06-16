import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import BlogEditor from "./BlogEditor";
import { useAppSettings } from "@/hooks/useAppSettings";






export default function AdminDashboard() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const { API_URL } = useAppSettings();

    useEffect(() => {
        const loadPosts = async () => {
            // load posts
            const res = await fetch(`${API_URL}/posts`);
            const data = await res.json();
            setPosts(data || []);
        };

        loadPosts();
    }, []);

    const handleSave = () => {
        setSelectedPost(null);

    };

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Blog Posts</h2>
                <Button className="text-sm underline" onClick={() => setSelectedPost(null)}>
                    New Post
                </Button>
            </div>

            {/* Post list */}
            <ul className="space-y-1">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Button
                            variant="link"
                            onClick={() => setSelectedPost(post)}
                        >
                            {post.title} ({post.slug})
                        </Button>
                    </li>
                ))}
            </ul>

            <BlogEditor existingPost={selectedPost} onSave={handleSave} />
        </div>
    );
}