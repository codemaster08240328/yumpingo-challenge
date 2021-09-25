import AsyncComponentWrapper from './asyncComponentWrapper';
import { render, screen } from '@testing-library/react';

test('asyncComponent works fine with isFetching', async () => {
  render(<AsyncComponentWrapper isFetching={true} />);

  const loadingTxt = await screen.findByText('Fetching...');
  expect(loadingTxt).toBeInTheDocument();
});

test('asyncComponent works fine with Error', async () => {
  const error = 'Something was wrong...';
  render(<AsyncComponentWrapper error={error} />);

  const errText = await screen.findByText(error);
  expect(errText).toBeInTheDocument();
});