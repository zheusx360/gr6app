import { useNavigation } from "@react-navigation/native";
import { api } from "@services/api";
import { useState } from "react";
import {AppNavigatorRoutesProps} from '@routes/app.routes';
import { SnackBarMessage } from "@components/molecules/SnackBar";

export type ForgotProps = {
   name:string;
   email:string;
   password: string;
   loading: boolean;
 };

 export function  useEmail(){
    
   const [userId, setUserId] = useState('');
   const [numberPage, setNumberPage] = useState(2)
   const [loading, setLoading]= useState(false)
   const {reset, navigate} = useNavigation<AppNavigatorRoutesProps>();
    
   async function sendEmail(email: string) {
      try {
         setLoading(true)
         const response = await api.post('/users/forgot-password',{
            email: email.trim().toLocaleLowerCase(),
         });            
         SnackBarMessage({ message:response.data.message });
         setUserId(response.data.user_id)
         setNumberPage(1)
      } catch (error:any) {
         const {data} = error.response;
         SnackBarMessage({message: data.message, type:'error'});
      }finally{
         setLoading(false)
      }
   }

   async function verifyToken(code: string) {
      try {
         setLoading(true)
         await api.post('users/verifycode',{
            userId,
            code,
         })
         setNumberPage(2)
      } catch (error:any) {
         const {data} = error.response;
         SnackBarMessage({message: data.message, type:'error'});
      } finally{
         setLoading(false)
      }
   }

   async function resetPassword(password: string) {
      try {
         setLoading(true)
         const response = await api.patch(`users/name_pass/${userId}`, {
         password
         });
         navigate('AuthScreen')
         SnackBarMessage({ message:response.data.message });
      } catch (error:any) {
         const {data} = error.response;
         SnackBarMessage({message: data.message instanceof Array ? data.message[0] : data.message, type:'error'})
      } finally{
         setLoading(false)
      }
   }

    return {
      sendEmail,
      verifyToken,
      resetPassword,
      numberPage,
      loading,
    };
}