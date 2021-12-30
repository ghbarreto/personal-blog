import Image from 'next/image';
import * as Styles from './styles';
import SocialMedia from '../SocialMedia'

const Info: React.FC = () => {
  return (
    <Styles.Container>
      <Image
        src="/header-image.png"
        width={'120px'}
        height={'120px'}
        alt={'pixel art'}
      />
      <Styles.InfoHeader>
        <Styles.Tags>{'</'}</Styles.Tags>Gabriel Barreto{' '}
        <Styles.Tags>{'//'}</Styles.Tags> Personal Blog
        <Styles.Tags>{'/>'}</Styles.Tags>
      </Styles.InfoHeader>

      <SocialMedia />
    </Styles.Container>
  );
};

export default Info;
