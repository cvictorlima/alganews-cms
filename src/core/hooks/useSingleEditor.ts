import { useCallback, useState } from "react";
import { User } from "../../sdk/@Types";
import { UserService } from "../../sdk/services";

export default function useSingleEditor() {
  const [editor, setEditor] = useState<User.EditorDetailed>();

  const fetchEditor = useCallback(async function (editorId: number) {
    UserService.getExistingEditor(editorId).then(setEditor);
  }, []);

  return {
    fetchEditor,
    editor,
  };
}
