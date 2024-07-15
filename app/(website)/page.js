import { client } from "../(sanity)/client";
import ButtonLink from "../components/ButtonLink";
import PostCard from "../components/PostCard";

async function fetchPosts (page = 1, pageSize = 2) {
  return await client.fetch(`*[_type == 'post'] | order(publishedAt desc) [${(page - 1) * pageSize}...${page * pageSize}]  {
    ...,
    mainImage {
        asset-> {
          url
        }
      }
    }`
  )
}

export default async function Home(route) {
  const page = +route?.searchParams?.page || 1
  const posts = await fetchPosts(page);

  return (
    <div className="container mx-auto p-8 max-w-screen-lg">
      <div className="grid grid-cols-2 gap-4">
        {posts.map((post) => <PostCard post={post} />)}
      </div>
      <div className="text-center mt-10 ">
        <ButtonLink href={`/?page=${page + 1}`}>Next</ButtonLink>
      </div>
    </div>
  )
}

export const revalidate = 0;