import { Outlet } from 'react-router-dom';
import { Conteiner } from './Styles';
import { Header, Footer } from '../../components';

export default function AppLayout() {
  return (
    <Conteiner>
      <Header />
      <Outlet />
      <Footer />
    </Conteiner>
  );
}
