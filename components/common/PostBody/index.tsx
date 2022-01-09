import * as Local from './styles';
import SocialMedia from '../SocialMedia';

interface Props {
  postBody?: string;
  subtitle?: string;
}

const PostBody: React.FC<Props> = ({ postBody, subtitle }) => {
  if (postBody) {
    return (
      <Local.Container>
        <Local.Socials>
          <SocialMedia bottomSpacing={'50px'}/>
        </Local.Socials>
        <Local.PostBody>
          <Local.Subtitle>{'//'} <span>{subtitle}</span></Local.Subtitle>
          <div dangerouslySetInnerHTML={{ __html: postBody }} />
        </Local.PostBody>
      </Local.Container>
    );
  }

  return <div>Loading</div>;
};

export default PostBody;
