// pages/posts/[slug].js

import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }) => {
  return (
    <div className="bg-zinc-900 h-screen">
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article className="pt-20 prose prose-headings:text-neutral-300 px-6">
        <div className="mb-10 ">
          <h1 className="text-neutral-300 font-bold text-4xl">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        {/* body started */}
          <div
            className="cl-post-body text-neutral-300"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
      </article>
    </div>
  );
};

export default PostLayout;
