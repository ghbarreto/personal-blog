import * as Local from './styles';

interface Props {
  title: string;
  color: string | undefined;
  date: React.ReactElement<any, any>;
}

const PostHeader: React.FC<Props> = ({ title, color, date }) => {
  console.log(title, color);
  return (
    <Local.Container bgColor={color}>
      <div>
        {' '}
        {'>'} {date}
      </div>
      <div>
        {'//'} {title}
      </div>
    </Local.Container>
  );
};

export default PostHeader;
