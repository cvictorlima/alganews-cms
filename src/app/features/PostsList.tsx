import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { useEffect } from "@storybook/addons"
import { format, parseISO } from "date-fns"
import { useMemo, useState } from "react"
import { Column, useTable } from "react-table"
import { Post } from "../../sdk/@Types/Post"
import PostService from "../../sdk/services/Post.service"
import Table from "../components/Table/Table"


export default function PostsList () {
  const [posts, setPosts] = useState<Post.Paginated> ()

  useEffect(()=> {
    PostService
      .getAllPosts({
        page: 0,
        size: 7,
        showAll: true,
        sort: ['createdAt', 'desc']
      })
      .then (setPosts)
  },[])

  const columns = useMemo<Column<Post.Summary>[]>(
    () => [
      {
        Header: '',
        accessor: 'id',
        Cell: () => <Icon 
          path = {mdiOpenInNew} 
          size = {'14px'} 
          color = {'#09f'} 
        />
      },
      {
        Header: () => <div style= {{textAlign: 'left', }}>Artigo</div>,
        accessor: 'title',
        Cell: (props) => (
          <div 
            style={{ 
              textAlign: 'left', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px' 
            }}
          >
            <img 
              width= "24px" 
              height= {24} 
              src={props.row.original.editor.avatarUrls.small} 
              alt={props.row.original.editor.name} 
              title={props.row.original.editor.name} 
            />
            {props.value}
        </div>
        ),
      },
      {
        Header: () => <div style= {{textAlign: 'right', }}>Criação</div>,
        accessor: 'createdAt',
        width: 320,
        Cell: (props) => (
          <div 
            style={{
              textAlign: 'right', 
              fontFamily: '"Roboto mono", monospace'
            }}
          >
            {format(parseISO(props.value),'dd/MM/yyyy')}
          </div>
        )
      },
      {
        Header: () => <div style= {{textAlign: 'left', }}>Conversões</div>,
        accessor: 'updatedAt',
        Cell: (props) => (
          <div 
            style= {{
              textAlign: 'right', 
              fontFamily: '"Roboto mono", monospace'
            }}
          >
            {format(parseISO(props.value),'dd/MM/yyyy')}
          </div>
        )
      },
      {
        id: Math.random().toString(),
        accessor: 'published',
        Header: () => <div style= {{textAlign: 'right', }}>Ações</div>,
        Cell: (props) => (
          <div style= {{ textAlign: 'right'}}>
            {props.value ? 'Publicado' : 'Privado'}
          </div>
        ),
      },
    ],
    []
  );

  const instance = useTable<Post.Summary>({
    data: posts?.content || [], 
    columns
  });

  return <Table instance = {instance} />
}