import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import ContactList from '../ContactList';
import axios from 'axios';
import nock from 'nock';



afterEach(function() {
  nock.cleanAll();
});

// const MockMyComponent = () => {
//   React.useEffect(() => {
//     console.log('using an effect');
//   });
//   return (<div>Hello World</div>);
// };
// jest.mock('./MyComponent', () => MockMyComponent);

// test("renders contacts", () => {
  
//   render(
//     <MemoryRouter><ContactList /></MemoryRouter>
//   )
//   const element = screen.getByText('jorge');
//   expect(element).toBeInTheDocument();
//   expect(element).toHaveTextContent('jorge');
// })

test('matches snapshot', () => {
  const tree = renderer.create(
    
    <MemoryRouter><ContactList /></MemoryRouter>
  
  ).toJSON();
  expect(tree).toMatchSnapshot();
  
});