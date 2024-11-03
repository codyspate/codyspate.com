import { Post } from "../utils/posts.ts";

export function PostCard(props: { post: Post }) {
    const { post } = props;
    return (
        <div class="py-8 border(t gray-200)">
            <a class="sm:col-span-2" href={`/blog/${post.slug}`}>
                <h2 class="text(3xl gray-900) font-bold">
                    {post.title}
                </h2>
                <time class="text-gray-500 dark:text-gray-400">
                    {new Date(post.publishedAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
                <div class="mt-4 text-[#3D405B] dark:text-[#F4F1DE]">
                    {post.snippet}
                </div>
            </a>
        </div>
    );
}
