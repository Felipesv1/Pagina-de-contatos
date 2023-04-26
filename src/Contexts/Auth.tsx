import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IProps {
  children: ReactNode;
}

type AuthContextData = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: IProps) {
  const [input, setInput] = useState<string>("");

  return (
    <AuthContext.Provider value={{ input, setInput }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
