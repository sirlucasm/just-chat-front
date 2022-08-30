import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "."
import { CreateUserParams, LoginParams } from "../../interfaces/user";
import UserService from "../../services/UserService";

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const login = ({ username, password }: LoginParams) => {
    toast
      .promise(UserService.login({ username, password }), {
        loading: 'Entrando...',
        success: '',
        error: (error: any) => error?.response?.data?.message
      })
        .then(() => router.replace('/app'));
  }

  const signUp = (params: CreateUserParams) => {
    toast
      .promise(UserService.create(params), {
        loading: 'Criando conta',
        success: '',
        error: (error: any) => error?.response?.data?.message
      })
        .then(() => router.replace('/app'));
  }

  const logout = () => {
    toast
      .promise(UserService.logout(), {
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
