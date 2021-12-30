import * as Reusable from '../../../styles/Reusable';
import * as Local from './styles';

const Footer = () => {
  return (
    <Reusable.FlexCenter>
      <Local.Footer>
        <Reusable.Tags primary>{'<'}</Reusable.Tags>GABRIEL BARRETO @ 2021 | ALL
        RIGHTS RESERVED<Reusable.Tags primary>{'/>'}</Reusable.Tags>
      </Local.Footer>
    </Reusable.FlexCenter>
  );
};

export default Footer;
