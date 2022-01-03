interface Props {
  title: string;
  color: string | undefined;
}

const PostHeader:React.FC<Props> = ({title, color}) => {
  return <div style={{backgroundColor: color}}>{title}</div>
}

export default PostHeader;