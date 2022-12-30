import SocialMedia from '../../SocialMedia';
import * as Reusable from '../../../../styles/Reusable';
import * as Local from './styles';
import { BsShareFill } from 'react-icons/bs';
import {highlight} from '../../../../styles/utilities'

const ShareBottom: React.FC = () => {
  return (
    <Local.Container style={{ textAlign: 'right' }}>
      <div>
        <BsShareFill size={35} color={highlight} />
      </div>
      <div>
        <Reusable.Tags primary fontSize={'30px'}>
          {'//'}
        </Reusable.Tags>{' '}
        <span className="post_title-name">Gabriel Barreto</span>
        <div className="post_email-post">ghbarreto.dev</div>
        <div className="post_email-post">
          henriqve.dev
          <Reusable.Tags primary fontSize={'20px'}>
            @
          </Reusable.Tags>
          gmail.com
        </div>
        <SocialMedia />
      </div>
    </Local.Container>
  );
};

export default ShareBottom;
