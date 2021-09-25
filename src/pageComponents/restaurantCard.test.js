import RestaurantCard from './restaurantCard';
import { BrowserRouter } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react';

test('RestaurantCardComponent rendered correctly', async () => {
  const item = {
    name: 'name',
    phone_number: 'phone_number',
    address: 'address'
  }

  render (
    <BrowserRouter>
      <RestaurantCard
        item={item}
      />
    </BrowserRouter>
  )

  const name = await screen.findByText(item.name);
  const phone_number = await screen.findByText(item.phone_number);
  const address = await screen.findByText(item.address);

  expect(name).toBeInTheDocument();
  expect(phone_number).toBeInTheDocument();
  expect(address).toBeInTheDocument();
});

test('Restaurant Card Component redirects correctly', async () => {
  const item = {
    uid: 'uid',
    name: 'name',
    phone_number: 'phone_number',
    address: 'address'
  }

  render (
    <BrowserRouter>
      <RestaurantCard
        item={item}
      />
    </BrowserRouter>
  )

  const link = await screen.findByTestId('detail-link');

  expect(link).toBeInTheDocument();

  fireEvent.click(link);

  expect(window.location.href).toBe(`http://localhost/list/${item.uid}`);
});