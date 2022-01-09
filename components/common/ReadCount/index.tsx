import * as Reusable from '../DateFormat/styles'

interface Props {
  wc: number;
}

const ReadCount: React.FC<Props> = ({ wc }) => {
  const formatReadTime = () => {
    const wordPerMinute = 200;

    return Math.ceil(wc / wordPerMinute);
  }

  return <Reusable.FormatDate fontSize="20px">{ formatReadTime() } min read </Reusable.FormatDate>
}

export default ReadCount;