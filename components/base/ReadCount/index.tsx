import styled from 'styled-components';
import { bgColor } from '../../../styles/utilities';
import { FormatDate } from '../DateFormat';

interface Props {
    wc: number;
}

const ReadCount: React.FC<Props> = ({ wc }) => {
    const formatReadTime = () => {
        const wordPerMinute = 200;
        return Math.ceil(wc / wordPerMinute);
    };
    return <FormatDate fontSize="20px">{formatReadTime()} min read </FormatDate>;
};

export default ReadCount;
