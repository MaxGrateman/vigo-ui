

const Page: React.FC<any> = ({ title, children, ...rest }) => (
  <div {...rest} className="min-h-screen bg-gray-50">
    <header className="px-6 py-4 border-b bg-white">
      <h1 className="text-xl font-semibold">{title}</h1>
    </header>
    <main className="p-6"><div className="max-w-6xl mx-auto">{children}</div></main>
  </div>
);
export default Page;