import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import ContactList from '../ContactList';
import {  setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('http://localhost:8080/contacts', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json([
      {
        name : "jorge",
        email:"jorge@gmail.com",
        phone: "12345678",
      }
    ]))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("renders contacts", async () => {
  
  render(
    <MemoryRouter><ContactList /></MemoryRouter>
  )
  const element = await screen.findByText('jorge');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent('jorge');
})

test('matches snapshot', () => {
  const tree = renderer.create(
    
    <MemoryRouter><ContactList /></MemoryRouter>
  
  ).toJSON();
  expect(tree).toMatchSnapshot();
  
});