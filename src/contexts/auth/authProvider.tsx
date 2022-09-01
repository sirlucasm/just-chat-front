import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "."
import { CreateUserParams, LoginParams } from "../../interfaces/user";
import UserService from "../../services/UserService";

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const userService = new UserService();

  const login = ({ username, password }: LoginParams) => {
    toast
      .promise(userService.login({ username, password }), {
        loading: 'Entrando...',
        success: '',
        error: (error: any) => error?.response?.data?.message
      })
        .then(() => router.replace('/app'));
  }

  const signUp = (params: CreateUserParams) => {
    toast
      .promise(userService.create(params), {
        loading: 'Criando conta',
        success: '',
        error: (error: any) => error?.response?.data?.message
      })
        .then(() => router.replace('/app'));
  }

  const logout = () => {
    toast
      .promise(userService.logout(), {
        loading: 'Saindo...',
        success: '',
        error: (error: any) => error?.response.data.message
      })
        .then(() => router.replace('/'));
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        signUp,
        logout
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}
