import { ConteinerFooter, Logo, Contact, Text } from './Styles';
import LogoSvg from '../../assets/LogoFooter.svg';

function Footer() {
  return (
    <ConteinerFooter>
      <Logo src={LogoSvg}></Logo>
      <Contact>
        <Text>casatuetimbua@gmail.com</Text>
        <Text>(37) 9 9634 9759</Text>
      </Contact>
    </ConteinerFooter>
  );
}

export default Footer;
