

const HBox: React.FC<any> = ({ children, ...rest }) => (
  <div {...rest} className="flex items-center gap-3">{children}</div>
);
export default HBox;