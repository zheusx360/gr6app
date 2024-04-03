import { api } from "@services/api";
import { Alert } from "react-native";
import { useStorage } from "@services/storage";
import {useNavigation} from '@react-navigation/native';
import { useState } from "react";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { SnackBarMessage } from "@components/molecules/SnackBar";

export type RegisterProps = {
   name: string;
   email: string;
   password: string;
 };

 export const useRegister = () => {
  const {reset, navigate} = useNavigation<AppNavigatorRoutesProps>();
   const [loading, setLoading] = useState(false)
 
     async function Register({name, email, password }: RegisterProps) {
       try {
         setLoading(true)
          const response = await api.post('/users', {
             name: name,
             email: email.trim().toLowerCase(),
             password: password
          });
          navigate('AuthScreen')

         const {data} = response; 
         SnackBarMessage({message: data.message}) 

         } catch (error: any) {
         const {data} = error.response;
         SnackBarMessage({message: data.message instanceof Array ? data.message[0] : data.message, type:'error'})
         }finally{
         setLoading(false)
       }
     }
     return {
      Register,
       loading,
     };
 }