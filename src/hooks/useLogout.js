import { useAuthContext } from "./useAuthContext";
import { useBooksContext } from "./useBooksContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchBooks } = useBooksContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    dispatchBooks({ type: "SET_BOOKS", payload: null });
  };

  return { logout };
};
