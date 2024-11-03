import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getPost, Post } from "../../utils/posts.ts";
import { CSS, render } from "https://deno.land/x/gfm@0.1.26/mod.ts";

export const handler: Handlers<Post> = {
    async GET(_req, ctx) {
        try {
            const post = await getPost(ctx.params.slug);
            return ctx.render(post as Post);
        } catch {
            return ctx.renderNotFound();
        }
    },
};

export default function PostPage(props: PageProps<Post>) {
    const post = props.data;
    return (
        <>
            <Head>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            `${CSS} .markdown-body { font-family: Lora, serif; background: transparent; } .markdown-body p { font-size: 1.15rem;}`,
                    }}
                />
            </Head>
            <main class="max-w-screen-md pt-6 pb-16 mx-auto">
                <h1 class="text-5xl font-bold">{post.title}</h1>
                <time class="text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
                <div
                    data-color-mode="auto"
                    data-dark-theme="dark"
                    data-light-theme="light"
                    class="mt-8 markdown-body"
                    dangerouslySetInnerHTML={{ __html: render(post.content) }}
                />
            </main>
        </>
    );
}
