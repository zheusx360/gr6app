import { api } from "@services/api";
import { create } from 'zustand';
import { useStorage } from "@services/storage";
import { SnackBarMessage } from "@components/molecules/SnackBar";

export type SignInDataProps = {
   email: string;
   password: string;
   loading?: any;
   saveCredentials: boolean;
 };

 export type UserAuthData = {
   _id: string;
   name: string;
   email: string;
   password: string;
 };

 export type AuthStore = {
   user: UserAuthData;
   signIn: (data: SignInDataProps) => Promise<void>;
   signOut: () => void;
   loading?: boolean;
 };

export const useAuth = create<AuthStore>()((set) => {

  const {SaveData} = useStorage()

   function updateToken(token: string) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    async function signOut() {
      SaveData({storageName:'Credentials',data:{}})
      set(() => ({
        user: {} as UserAuthData,
      }));
    }

    async function signIn({email, password, loading, saveCredentials}: SignInDataProps) {
      try {
        loading(true)
         const response = await api.post('/login', {
            email: email.trim().toLowerCase(),
            password: password
         });
   
         const {token, user} = response.data;
   
         updateToken(token)

         if(saveCredentials){
          SaveData({storageName:'Credentials', data: {email, password}})
         }
   
         set(()=>({user: user}))
      } catch (error: any) {
          const {data} = error.response;
          SnackBarMessage({message: data.message instanceof Array ? data.message[0] : data.message, type:'error'})
      }finally{
        loading(false)
      }
      
    }
    return {
      user: {} as UserAuthData,
      signIn,
      signOut,
    };
})