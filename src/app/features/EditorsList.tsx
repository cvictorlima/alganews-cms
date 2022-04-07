import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import useEditors from "../../core/hooks/useEditors";
import getEditorDescription from "../../core/utils/getEditorDescription";
import Profile from "../components/Profile";

export default function EditorsList() {
  const { editorsList, loading, fetchAllEditors } = useEditors()
  // const [editors, setEditors] = useState<User.EditorSummary[]>([])

  useEffect(() => {
    fetchAllEditors()
  }, [fetchAllEditors])

  // const editors = UserService.getAllEditors()
  if (!editorsList.length)
    return (
      <EditorsListWrapper>
        <Skeleton height={82} />
        <Skeleton height={82} />
        <Skeleton height={82} />
      </EditorsListWrapper>
    );
  return <EditorsListWrapper>
    {
      editorsList.map((editor) => {
        return (
          <Profile
            id={editor.id}
            name={editor.name}
            description={getEditorDescription(new Date(editor.createdAt))}
            key={editor.id}
            avatarUrl={editor.avatarUrls.small}
          />
        )
      })}
    {loading ? "buscando mais informações" : null}
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px
`