import { useContext } from 'react';
import formContext from '../contexts/FormContext';

const useForm = () => useContext(formContext);

export default useForm;
