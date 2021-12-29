import { FormatDate } from './styles';
import dateFormat from 'dateformat';

interface Props {
  date?: string;
}

const DateFormat: React.FC<Props> = ({ date }) => {
  return <FormatDate>{dateFormat(Number(date), 'mmm, yyyy')}</FormatDate>
};

export default DateFormat;
