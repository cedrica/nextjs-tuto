

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <> 
      {children}
      <h2>Features products</h2>
    </>
  );
}
