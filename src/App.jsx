import MainForm from './components/MainForm';
import FormProvider from './contexts/FormProvider';

const App = () => (
  <FormProvider>
    <MainForm />
  </FormProvider>
);

export default App;
