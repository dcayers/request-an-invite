import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers, API_URL, fixtures } from './handlers';

const server = setupServer(...handlers);

export { rest, server, API_URL, fixtures };
