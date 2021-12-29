import * as Reusable from '../DateFormat/styles'

interface Props {
  wc: number;
}

const ReadCount: React.FC<Props> = ({ wc }) => {
  const formatReadTime = () => {
    const wordPerMinute = 200;
    console.log(typeof wc)
    return Math.ceil(wc / wordPerMinute);
  }
  console.log(formatReadTime(), wc)

  return <Reusable.FormatDate>{ formatReadTime() } min read.</Reusable.FormatDate>
}

export default ReadCount;