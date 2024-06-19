import Principal from './pages/principal';
import { Tabela } from './pages/tabela';
import AppRoutes from './routes/routes';

function App() {
  return (
    <div className="App">
      <AppRoutes>
        <Principal>
          <Tabela />
        </Principal>
      </AppRoutes>
    </div>
  );
}

export default App;
