import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ERoutes } from '@type/enums/ERoutes';
import { MainPage } from '@pages/MainPage';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@store/store.ts';
import { UseLocalizationContext } from '@context/LocalizationContext';
import { NotFoundPage } from '@pages/NotFoundPage';
import { describe, expect, it, vi } from 'vitest';
import { NotFound } from '@components/NotFound';

function prepare() {
  const router = createMemoryRouter(
    [
      {
        path: ERoutes.home,
        element: <MainPage />,
      },
      {
        path: ERoutes.all,
        element: <NotFoundPage />,
      },
    ],
    { initialEntries: ['/', '/login'], initialIndex: 1 }
  );

  return render(
    <Provider store={store}>
      <UseLocalizationContext>
        <RouterProvider router={router} />
      </UseLocalizationContext>
    </Provider>
  );
}

vi.mock('@components/NotFound', () => ({
  NotFound: vi.fn(() => <div data-testid="notFoundComponent" />),
}));

describe('NotFoundPage Component', () => {
  it('renders NotFoundPage with NotFound component', async () => {
    const { getByTestId } = prepare();

    await waitFor(() => getByTestId('notFoundComponent'));

    expect(NotFound).toHaveBeenCalled();
  });
});
