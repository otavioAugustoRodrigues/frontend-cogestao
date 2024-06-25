import { ConteinerHeader, Logo, DivButtons, TransparentButton } from './Styles';
import logoSvg from '../../assets/logoSvg.svg';

function Header() {
  return (
    <ConteinerHeader>
      <Logo src={logoSvg}></Logo>
      <DivButtons>
        <TransparentButton>Home</TransparentButton>
        <TransparentButton>Eventos</TransparentButton>
      </DivButtons>
    </ConteinerHeader>
  );
}

export default Header;
