import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Contacts from './routes/contacts';
import Home from './routes/home';
import Contact from './components/Contact/Contact';
import NewContact from './components/NewContact/NewContact';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="contatos" element={<Contacts />} >
          <Route path="new" element={<NewContact />} />
          <Route path=":contactId" element={<Contact />} />
        </Route>
        <Route
          path="*"
          element={
            <main >
              <p>404 Not Found</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
