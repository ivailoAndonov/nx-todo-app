import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import AddTodo from '../components/AddTodo';

describe('AddTodo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
