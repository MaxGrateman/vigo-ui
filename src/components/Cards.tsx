

const Card: React.FC<any> = ({ title, children, ...rest }) => (
  <section {...rest} className="bg-white rounded-2xl shadow-sm border p-5">
    {title && <div className="mb-3 text-base font-semibold">{title}</div>}
    <div>{children}</div>
  </section>
);
export default Card;