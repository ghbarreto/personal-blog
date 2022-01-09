import * as Local from './styles';
import _ from 'lodash';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  title: string;
  color: string | undefined;
  date: React.ReactElement<any, any>;
  categories: string[];
}

const PostHeader: React.FC<Props> = ({ title, color, date, categories }) => {
  const displayCategories = () => {
    return _.map(categories, category => (
      <Local.FormatCategories>{category}</Local.FormatCategories>
    ));
  };
  return (
    <Local.Container bgColor={color}>
      <Local.InlineContainer>
        <Local.DisplayInline>
          <Local.FormatDate> {'>'} </Local.FormatDate>
          {date}
          <div style={{ display: 'inline-flex' }}>
            {categories.length > 0 && displayCategories()}
          </div>
        </Local.DisplayInline>
        <AiOutlineClose size={25} />
      </Local.InlineContainer>

      <Local.ContainerTitle>
        <span>{'//'}</span>
        {title}
      </Local.ContainerTitle>
    </Local.Container>
  );
};

export default PostHeader;
