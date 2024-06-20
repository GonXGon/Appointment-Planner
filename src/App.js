import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate} from 'react-router-dom';
import Root, {Routes} from './components/root/Root';
import { ContactsPage } from './containers/contactsPage/ContactsPage';
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element= { <Navigate to={Routes.CONTACTS} replace />}/>
      <Route path={Routes.CONTACTS} element={ <ContactsPage/> }/>
      <Route path={Routes.APPOINTMENTS} element={ <AppointmentsPage /> }/>
    </Route>
  ));
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
