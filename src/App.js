import React from 'react';
import { SnackbarProvider } from 'notistack';
import SignUp from './login and signup/signup';
import Login from './login and signup/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
