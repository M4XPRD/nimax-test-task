import Form from './components/Form';
import FormProvider from './contexts/FormProvider';

const App = () => (
  <FormProvider>
    <Form />
  </FormProvider>
);

export default App;
