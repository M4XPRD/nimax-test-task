import MainForm from './components/MainForm';
import FormNavigationProvider from './contexts/FormNavigationProvider';
import NetworkProvider from './contexts/NetworkProvider';

const App = () => (
  <FormNavigationProvider>
    <NetworkProvider>
      <MainForm />
    </NetworkProvider>
  </FormNavigationProvider>
);

export default App;
