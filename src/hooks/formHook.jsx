import { useContext } from 'react';
import formNavigationContext from '../contexts/FormNavigationContext';

const useForm = () => useContext(formNavigationContext);

export default useForm;
