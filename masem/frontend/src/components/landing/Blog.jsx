import { useBlogPosts } from "@/hooks/useBlogPosts";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";




export default function Blog() {
    const { posts, loading } = useBlogPosts();

    if (loading) return <p className="text-center">Loading blog posts...</p>

    return (
        <section id="blog-posts" className="py-20 px-4 bg-muted text-foreground">
            <div className="max-w-3xl mx-auto p-6">
                <h2 className="text-3xl font-bold mb-4">Blog & Changelog</h2>
                {posts.map((post) => (
                    <article key={post.slug} className="mb-8">
                        <h3 className="text-2xl font-bold">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                        <div  className="prose prose-neutral dark:prose-invert max-w-none">
                            <ReactMarkdown 
                                remarkPlugins={[remarkGfm]} 
                                rehypePlugins={[rehypeRaw]}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}