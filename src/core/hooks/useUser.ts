import { useCallback } from "react";
import { useState } from "react";
import { User } from "../../sdk/@Types";
import { UserService } from "../../sdk/services";

export default function useUser() {
  const [user, setUser] = useState<User.Detailed>();

  const fetchUser = useCallback(async function () {
    UserService.getDetailedUser(6).then(setUser);
  }, []);

  return { user, fetchUser };
}
