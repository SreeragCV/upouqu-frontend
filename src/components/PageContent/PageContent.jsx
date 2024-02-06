
function PageContent({ title, children}) {
  return (
    <div className=" mt-32 text-center">
      <h1 className="mt-6">{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
