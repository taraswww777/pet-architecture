import { Route, Routes } from 'react-router';
import { Suspense } from 'react';
import { HomePage, NotFoundPage, Task1Page } from './pages';
import { ErrorBoundary } from 'react-error-boundary';
import { Loader } from './uiKit/Loader.tsx';
import { ErrorFallback } from './components/ErrorFallback.tsx';


export const Router = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Основные страницы */}
          <Route index element={<HomePage />} />
          <Route path={'/task1'} element={<Task1Page />} />

          {/* Запасной маршрут (404) */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
