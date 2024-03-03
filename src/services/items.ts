import { menuItems } from '@data/menu';

// Mock service call
// We would use Axios, GraphQL or WebSockets to make a real API call
const getItems = async () => {
  const data = menuItems;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data;
};

export const items = {
  get: getItems,
};
