import format from 'date-format';
import styled from 'styled-components';

import { bgColor } from '../../../styles/utilities';

interface Props {
    date?: string;
    fontSize?: string;
}

interface Props {
    fontSize?: string;
}

export const FormatDate = styled.div<Props>`
    font-family: Fira Code;
    color: ${bgColor};
    margin-bottom: 5px;
    font-size: ${props => props.fontSize || null};
`;

export const months = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
};

const DateFormat: React.FC<Props> = ({ date, fontSize }) => {
    const postDate = format('MM, yyyy', new Date(Number(date)));
    const addMonthValue = postDate.split(',')[0];
    const formattedDate = `${months[addMonthValue]}, ${postDate.split(',')[1]}`;

    return <FormatDate fontSize={fontSize}>{formattedDate}</FormatDate>;
};

export default DateFormat;
