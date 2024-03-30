
function PageContent({ title, children}) {
  return (
    <div className="mt-10 text-center">
      <h1 className="mt-6">{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
