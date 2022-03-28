
import { useEffect } from "react";
import usePageTitle from "../../core/hooks/usePageTitle"
import usePosts from "../../core/hooks/usePosts";
import PostsList from "../features/PostsList";
import UserEarnings from "../features/UserEarnings";
import UserPerformance from "../features/UserPerformance";
import UserTogTags from "../features/UserToptags";
import DefaultLayout from "../layouts/Default/Default.layout"

export default function Home() {
  usePageTitle('Home')
  const { paginatedPosts, loading, fetchPosts } = usePosts()


  useEffect(() => {
    fetchPosts({ page: 1 })
  }, [fetchPosts])


  return <DefaultLayout>
    {paginatedPosts?.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
    {loading ? 'carregando' : 'finalizado'}
    <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '32px' }}>
      <UserTogTags />
      <UserEarnings />
    </div>
    <UserPerformance />
    <PostsList />
  </DefaultLayout>
}
