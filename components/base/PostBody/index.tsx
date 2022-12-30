import * as Local from './styles';
import SocialMedia from '../SocialMedia';
import ShareBottom from './ShareBottom'

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
          <ShareBottom />
        </Local.PostBody>
      </Local.Container>
    );
  }

  return <div>Loading</div>;
};

export default PostBody;
