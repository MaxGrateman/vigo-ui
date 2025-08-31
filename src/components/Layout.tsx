

const Layout: React.FC<any> = ({ kind = "grid", columns = 1, children, ...rest }) => {
  const map: Record<number, string> = {1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",6:"grid-cols-6",12:"grid-cols-12"};
  return (
    <div {...rest} className={`grid gap-4 ${map[Number(columns)] || "grid-cols-1"}`}>{children}</div>
  );
};
export default Layout;