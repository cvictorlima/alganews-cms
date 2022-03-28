import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tag } from "react-tag-input"
import styled from "styled-components"
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown"
import info from "../../core/utils/infor"
import { PostService } from "../../sdk/services"
import Button from "../components/Button/Button"
import ImageUpload from "../components/ImageUpload"
import Input from "../components/Input/Input"
import Loading from "../components/Loading"
import MarkdownEditor from "../components/MarkdownEditor"
import TagInput from "../components/TagInput/TagInput"
import WordPriceCounter from "../components/WordPriceCounter"

interface PostFormProps {
  postId?: number
}

export default function PostForm(props: PostFormProps) {
  const navigate = useNavigate()
  const [tags, setTags] = useState<Tag[]>([])
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [publishing, setPublishing] = useState(false)

  useEffect(() => {
    console.log('imageUrl:', imageUrl)
  }, [imageUrl])

  async function insertNewPost() {
    const newPost = {
      body, title, imageUrl, tags: tags.map(tag => tag.text),
    }

    await PostService.insertNewPost(newPost)

    info({
      title: 'Post salvo com sucesso',
      description: 'Você acabou de criar o post'
    })
  }

  async function updateExistingPost(postId: number) {
    const newPost = {
      body, title, imageUrl, tags: tags.map(tag => tag.text),
    }

    await PostService.updateExistingPost(postId, newPost)

    info({
      title: 'Post atualizado',
      description: 'O post foi atualizado com sucesso'
    })
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setPublishing(true)

      props.postId
        ? await updateExistingPost(props.postId)
        : await insertNewPost()

      navigate('/')
    } finally {
      setPublishing(false)
    }
  }
  useEffect(() => {
    if (props.postId) {
      fetchPost(props.postId)
    }
  }, [props.postId])

  function fetchPost(postId: number) {
    PostService
      .getExistingPost(postId)
      .then(post => {
        setTitle(post.title)
        setImageUrl(post.imageUrls.default)
        setBody(post.body)
        setTags(post.tags.map(tag => ({ id: tag, text: tag })))
      })
  }

  return <PostFormWrapper onSubmit={handleFormSubmit}>
    <Loading show={publishing} />
    <Input
      label='título'
      value={title}
      onChange={e => setTitle(e.currentTarget.value)}
      placeholder='e.g.: Como fiquei rico aprendendo React'
    />
    <ImageUpload
      label='Thumbnail do post'
      preview={imageUrl}
      // onImageUpload= {(imageUrl) => setImageUrl(imageUrl)} />
      onImageUpload={setImageUrl} />
    <MarkdownEditor onChange={setBody} value={body} />
    <TagInput
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((_, i) => i !== index))}
      placeholder="Insira as tags deste post"
    />
    <PostFormSubmitWrapper>
      <WordPriceCounter pricePerWord={0.25} wordsCount={countWordsInMarkdown(body)} />
      <Button
        variant='primary'
        label="Salvar Post"
        type='submit'
        disabled={!title || !imageUrl || !body || !tags.length}
      />
    </PostFormSubmitWrapper>
  </PostFormWrapper>
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

`

const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;
`