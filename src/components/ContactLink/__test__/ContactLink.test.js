import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ContactLink from '../ContactLink';
import {MemoryRouter} from 'react-router-dom';

test('should render contact links', () => {
  const contact = { id: 1, name: 'jorge', email: "jorge@teste", phone: "123123123" };
  render(
    <MemoryRouter><ContactLink contact={contact}/></MemoryRouter>
  )
  const element = screen.getByTestId('link-1');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent('jorge');

})

test('matches snapshot', () => {
  const contact = { id: 1, name: 'jorge', email: "jorge@teste", phone: "123123123" };
  const tree = renderer.create(
    
    <MemoryRouter><ContactLink contact={contact}/></MemoryRouter>
  
  ).toJSON();
  expect(tree).toMatchSnapshot();
  
});