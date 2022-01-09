import { FormatDate } from './styles';
import dateFormat from 'dateformat';

interface Props {
  date?: string;
  fontSize?: string;
}

const DateFormat: React.FC<Props> = ({ date, fontSize }) => {
  return <FormatDate fontSize={fontSize}>{dateFormat(Number(date), 'mmm, yyyy')}</FormatDate>
};

export default DateFormat;
