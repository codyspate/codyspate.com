import { Handlers, PageProps } from "$fresh/server.ts";
import { PostCard } from "../../components/PostCard.tsx";
import { getPosts, Post } from "../../utils/posts.ts";

export const handler: Handlers<Post[]> = {
    async GET(_req, ctx) {
        const posts = await getPosts();
        return ctx.render(posts);
    },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
    const posts = props.data;
    return (
        <main class="max-w-screen-md px-4 pt-16 mx-auto">
            <div className="flex">
                <h1 class="text-5xl font-bold grow">Blog</h1>
                <a href="/" className="grow-0">Home</a>
            </div>
            <div class="mt-8">
                {posts.map((post) => <PostCard post={post} />)}
            </div>
        </main>
    );
}