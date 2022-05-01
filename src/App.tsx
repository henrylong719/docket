import * as React from 'react';
import './App.css';
import Header from './components/layout/Header';
import {
  Routes,
  Route,
  Outlet,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import TodoScreen from './pages/TodoScreen';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<TodoScreen />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
