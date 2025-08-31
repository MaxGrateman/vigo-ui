

const Label: React.FC<any> = ({ text, ...rest }) => (
  <span {...rest} className="text-sm text-gray-700">{text}</span>
);
export default Label;