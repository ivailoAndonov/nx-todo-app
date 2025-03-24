import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import TodoList from '../components/TodoList';

describe('TodoList', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });
});
