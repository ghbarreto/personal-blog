import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const InputField = styled(TextField)({
  label: {
    color: '#00c2cb',
    borderColor: 'red',
    borderBottomColor: '#00c2cb',
    fontFamily: 'Fira Code Medium',
  },
  '& .MuiInputBase-input': {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Fira Code Medium',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    fontFamily: 'Fira Code Medium',
    color: '#00c2cb',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      color: 'red',
      borderColor: '#222222',
      borderBottomColor: '#00c2cb',
    },
    '&:hover fieldset': {
      borderColor: '#222222',
      borderBottomColor: '#00c2cb',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#222222',
      borderBottomColor: '#00c2cb',
    },
  },
});
