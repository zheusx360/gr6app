import {MMKV} from 'react-native-mmkv' 

const storage = new MMKV({id: 'pmustorage'});

export const StorageType = {
   Credentials: undefined,
   Other: undefined
 };

type Props ={
   storageName: keyof typeof StorageType;
   data?: object;
}

export function useStorage(){
   function SaveData ({storageName, data}: Props){
      storage.set(storageName, JSON.stringify(data))
   }
   
   function GetData (storageName: keyof typeof StorageType ){
      const data = storage.getString(storageName);
      return data ? JSON.parse(data) : {}
   }

   return {
      SaveData,
      GetData
   }
}
