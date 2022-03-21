import DefaultLayout from "../layouts/Default/Default.layout";
import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm";
import { useParams } from "react-router-dom";

export default function PostEditView () {
  const {id} = useParams<{id: string}>()
  usePageTitle('Novo Post')

  return<DefaultLayout>
    <PostForm postId={Number(id)} />
  </DefaultLayout>
}