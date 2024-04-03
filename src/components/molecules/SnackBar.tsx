import Snackbar from 'react-native-snackbar';

type SnackProps = {
  message: string;
  type?: 'error' | 'alert' | 'success';
  time?: number;
};

export const SnackBarMessage = ({message, type, time}: SnackProps) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT || time,
    fontFamily: 'Roboto-Bold',
    textColor: '#fff',
    backgroundColor:
      type === 'alert' ? '#9753db' : type === 'error' ? '#cf3434' : '#00A925',
  });
};
