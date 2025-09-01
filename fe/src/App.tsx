import { BrowserRouter } from 'react-router';
import { Router } from './Router';
import { PageTemplate } from './components/PageTemplate.tsx';

export function App() {
  return (
    <BrowserRouter>
      <PageTemplate>
        <Router />
      </PageTemplate>
    </BrowserRouter>
  );
}
