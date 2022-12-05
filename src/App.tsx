import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Content } from './pages/Content';

export function App() {
  return (
    <div className={styles.body}>
      <Header/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )
}
