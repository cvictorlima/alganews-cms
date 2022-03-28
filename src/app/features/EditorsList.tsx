import { useEffect, useState } from "react";
import styled from "styled-components";
import getEditorDescription from "../../core/utils/getEditorDescription";
import { User } from "../../sdk/@Types/User";
import UserService from "../../sdk/services/User.service";
import Profile from "../components/Profile";

export default function EditorsList() {

  const [editors, setEditors] = useState<User.EditorSummary[]>([])

  useEffect(() => {
    UserService
      .getAllEditors()
      .then(setEditors)
  }, [])

  // const editors = UserService.getAllEditors()

  return <EditorsListWrapper>
    {
      editors.map((editor) => {
        return <Profile
          id={editor.id}
          name={editor.name}
          description={getEditorDescription(new Date(editor.createdAt))}
          key={editor.id}
          avatarUrl={editor.avatarUrls.small}
        />
      })
    }
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px
`