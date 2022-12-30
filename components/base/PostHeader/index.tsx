import * as Local from './styles';
import _ from 'lodash';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';

interface Props {
    title: string;
    color: string | undefined;
    date: React.ReactElement<any, any>;
    categories: string[];
}

const PostHeader: React.FC<Props> = ({ title, color, date, categories }) => {
    const router = useRouter();

    const displayCategories = () => {
        return _.map(categories, category => (
            <Local.FormatCategories key={category}>{category}</Local.FormatCategories>
        ));
    };

    if (!title || !categories || !date || !color) return <div></div>;

    return (
        <Local.Container bgColor={color}>
            <Local.InlineContainer>
                <Local.DisplayInline>
                    <Local.FormatDate> {'>'} </Local.FormatDate>
                    {date}
                    <div style={{ display: 'inline-flex' }}>{categories.length > 0 && displayCategories()}</div>
                </Local.DisplayInline>
                <AiOutlineClose size={25} onClick={() => router.push('/')} />
            </Local.InlineContainer>

            <Local.ContainerTitle>
                <span>{'//'}</span>
                {title}
            </Local.ContainerTitle>
        </Local.Container>
    );
};

export default PostHeader;
