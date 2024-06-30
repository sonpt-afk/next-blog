import { client } from "./(sanity)/client"

export default async function Home() {
  const posts = await client.fetch(`*[_type == 'post']`)

  console.log({posts})
  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <a href={post?.slug.current}>{post?.title}</a>
        </li>
      ))}
    </ul>
  )
}