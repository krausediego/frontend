import { useContext, createContext, ReactNode, useState, useMemo } from 'react';
import { useToast } from '@chakra-ui/react';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { AxiosRequest } from '@/infra/request/axios-request';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  email: string;
  exp: number;
  iat: number;
  id: string;
  username: string;
}

const AuthContext = createContext({} as any);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [cookie] = useCookies(['token']);
  const { token } = cookie;

  const api = new AxiosRequest();

  const [user, setUser] = useState({});

  const toast = useToast();
  const router = useRouter();

  const value = useMemo(() => {
    return { ...user };
  }, [user]);

  const unauthorizedUser = () => {
    toast({
      title: 'Faça o login para continuar.',
      status: 'warning',
      position: 'top',
      duration: 3000,
      isClosable: true,
    });
    router.push('/signIn');
  };

  useEffect(() => {
    if (!token) unauthorizedUser();
    const decoded = jwtDecode(token) as AuthContextProps;
    setUser({ decoded, token });
  }, [token]);

  useEffect(() => {
    api.instance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 401) {
          unauthorizedUser();
        }
      },
    );
  }, [api.instance.interceptors.response, router, toast]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };
