import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import ProviderHook from './services/Provider';
import store from './redux/store';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <ProviderHook>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProviderHook>
    </Provider>
  );
}
