import { setUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "../config";

const useAuthState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return { isLoading };
};

export default useAuthState;
