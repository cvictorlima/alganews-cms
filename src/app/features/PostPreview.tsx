import { useEffect, useState } from "react"
import styled from "styled-components"
import withBoundary from "../../core/hoc/withBoundary"
import confirm from "../../core/utils/confirm"
import info from "../../core/utils/infor"
import modal from "../../core/utils/modal"
import { Post } from "../../sdk/@Types"
import { PostService } from "../../sdk/services"
import Button from "../components/Button/Button"
import Loading from "../components/Loading"
import MarkdownEditor from "../components/MarkdownEditor"

interface PostPreviewProps {
  postId: number
}

function PostPreview(props: PostPreviewProps) {
  const [post, setPost] = useState<Post.Detailed>()
  const [loading, setLoading] = useState(false)

  async function publishPost() {
    await PostService.publishExistingPost(props.postId)
    info({
      title: 'Post publicado',
      description: 'Você publicou o post com sucesso'
    })
  }

  function reopenModal() {
    modal({
      children: <PostPreview postId={props.postId} />
    })
  }

  useEffect(() => {
    setLoading(true)
    PostService
      .getExistingPost(props.postId)
      .then(setPost)
      .finally(() => { setLoading(false) })
  }, [props.postId])

  if (loading)
    return <Loading show />

  if (!post)
    return null

  return <Wrapper>
    <Heading>
      <Title>
        {post?.title}
      </Title>
      <Actions>
        <Button
          label='Publicar'
          variant="danger"
          disabled={post.published}
          onClick={() =>
            confirm({
              title: 'Publicar o post?',
              onConfirm: publishPost,
              onCancel: reopenModal
            })
          }
        />
        <Button
          label='Editar'
          variant="primary"
          disabled={post.published}
          onClick={() => window.location.pathname = `/posts/editar/${props.postId}`}
        />
      </Actions>
    </Heading>

    <PreviewImage src={post?.imageUrls.large} alt={post?.title} />

    <Content>
      <MarkdownEditor
        readOnly={true}
        value={post?.body}
      />
    </Content>
  </Wrapper>
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 655px;
  background-color: #f3f8fa;
  border: 1px solid #ccc;
  padding: 24px;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 6px 6px rgba(0,0,0,.05);
  gap: 24px;
`

const Heading = styled.div`
display: flex;
justify-content: space-between;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`

const PreviewImage = styled.img`
  height: 240px;
  width: 100%;
  object-fit: cover;
`

const Content = styled.div`
`

const Actions = styled.div`
  display: flex;
  gap: 8px;
`

export default withBoundary(PostPreview)