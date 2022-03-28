import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { format, parseISO } from "date-fns"
import { useEffect, useMemo, useState } from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from "react-router-dom"
import { Column, useTable } from "react-table"
import withBoundary from "../../core/hoc/withBoundary"
import modal from "../../core/utils/modal"
import { Post } from "../../sdk/@Types"
import { PostService } from "../../sdk/services"
import Loading from "../components/Loading"
import PostTitleAnchor from "../components/PostTitleAnchor"
import Table from "../components/Table/Table"
import PostPreview from "./PostPreview"


function PostsList() {
  const [posts, setPosts] = useState<Post.Paginated>()
  const [error, setError] = useState<Error>()
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    PostService
      .getAllPosts({
        page,
        size: 7,
        showAll: true,
        sort: ['createdAt', 'desc']
      })
      .then(setPosts)
      .catch(error => {
        setError(new Error(error.message)
        )
      })
      .finally(() => { setLoading(false) })
  }, [])

  if (error)
    throw error

  const columns = useMemo<Column<Post.Summary>[]>(
    () => [
      {
        Header: '',
        accessor: 'id',
        Cell: () => <Icon
          path={mdiOpenInNew}
          size={'14px'}
          color={'#09f'}
        />
      },
      {
        Header: () => <div style={{ textAlign: 'left', }}>Artigo</div>,
        accessor: 'title',
        Cell: (props) => (
          <div
            style={{
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              maxWidth: 270
            }}
          >
            <img
              width="24px"
              height={24}
              src={props.row.original.editor.avatarUrls.small}
              alt={props.row.original.editor.name}
              title={props.row.original.editor.name}
            />
            <PostTitleAnchor
              title={props.value}
              href={`/posts/${props.row.original.id}`}
              onClick={(e) => {
                e.preventDefault();
                modal({ children: <PostPreview postId={props.row.original.id} /> })
              }}
            >
              {props.value}
            </PostTitleAnchor>
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: 'right', }}>Criação</div>,
        accessor: 'createdAt',
        width: 320,
        Cell: (props) => (
          <div
            style={{
              textAlign: 'right',
              fontFamily: '"Roboto mono", monospace'
            }}
          >
            {format(parseISO(props.value), 'dd/MM/yyyy')}
          </div>
        )
      },
      {
        Header: () => <div style={{ textAlign: 'left', }}>Conversões</div>,
        accessor: 'updatedAt',
        Cell: (props) => (
          <div
            style={{
              textAlign: 'right',
              fontFamily: '"Roboto mono", monospace'
            }}
          >
            {format(parseISO(props.value), 'dd/MM/yyyy')}
          </div>
        )
      },
      {
        id: Math.random().toString(),
        accessor: 'published',
        Header: () => <div style={{ textAlign: 'right', }}>Ações</div>,
        Cell: (props) => (
          <div style={{ textAlign: 'right' }}>
            {props.value ? 'Publicado' : 'Privado'}
          </div>
        ),
      },
    ],
    []
  );

  const instance = useTable<Post.Summary>({
    data: posts?.content || [],
    columns,
    manualPagination: true,
    initialState: { pageIndex: 0 },
    pageCount: posts?.totalPages
  });

  if (!posts)
    return (
      <div>
        <Skeleton height={32} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </div>);

  return <>
    <Loading show={loading} />
    <Table
      instance={instance}
      onPaginate={setPage}
    />
  </>
}

export default withBoundary(PostsList, 'lista de posts')