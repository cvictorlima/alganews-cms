import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { useMemo } from "react"
import { Column, useTable } from "react-table"
import * as T from './Table.styles'

type Data = {
  preview: React.ReactNode
  col1: string
  col2: string
  actions: string
}

export default function Table () {
  const data = useMemo<Data[]>(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        actions: 'ações',
        preview: <Icon 
          size="14px"
          color="#09f"
          path={mdiOpenInNew}
        />,
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        actions: 'ações',
        preview: <Icon 
          size="14px"
          color="#09f"
          path={mdiOpenInNew}
        />,
      },
      {
        col1: 'whatever',
        col2: 'you want',
        actions: 'ações',
        preview: <Icon 
          size="14px"
          color="#09f"
          path={mdiOpenInNew}
        />,
      }
    ],
    []
  )

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        Header: '',
        accessor: 'preview',
      },
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
        Cell: (row) => <div style={{ textAlign: 'right' }}>{row.value}</div>
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
        width: 320,
        Cell: (row) => <div style={{ textAlign: 'center' }}>{row.value}</div>
        
      },
      {
        Header: 'Ações',
        accessor: 'actions',
      },
    ],
    []
  )

  const tableInstance = useTable<Data>({data, columns})

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <T.Wrapper cellPadding= {0} cellSpacing= {0} {...getTableProps}>
      <T.Heading>
        {
          headerGroups.map(headerGroup =>(
            <T.HeadingRow {...headerGroup.getHeaderGroupProps}>
              {
                headerGroup.headers.map(columns =>(
                  <T.HeadingCell {...columns.getHeaderProps()}>
                    {columns.render('Header')}
                  </T.HeadingCell>
                ))
              }
            </T.HeadingRow>
          ))
        }
        
      </T.Heading>
      <T.Body {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return <T.BodyRow {...row.getRowProps()}>
              {
                row.cells.map(cell => {
                  return <T.BodyCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </T.BodyCell>
                })
              }
            </T.BodyRow>
          })
        }
      </T.Body>
    </T.Wrapper>
  )
}
