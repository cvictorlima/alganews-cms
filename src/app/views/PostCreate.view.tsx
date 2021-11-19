import DefaultLayout from "../layouts/Default/Default.layout";
import usePageTitle from "../../core/hooks/usePageTitle";
import PostForm from "../features/PostForm";

export default function PostCreateView () {
  usePageTitle('Novo Post')

  return<DefaultLayout>
    <PostForm />
  </DefaultLayout>
}