import Link from "next/link";

const NOTION_BLOG_ID = 'd0f805342b8f40369cfad72708b1319b'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts
    },
  };
}

function BlogPage({ posts }) {
	console.log("json from notion postlist",posts)
  return (
    <div>
      {posts.map((post) => (
        <Link href="/[slug]" as={`/${post.slug}`}>
          <div key={post}>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default BlogPage