import { useSelector } from "react-redux";

const useAuth = () => {
  const { email, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    id,
  };
};

export default useAuth;
