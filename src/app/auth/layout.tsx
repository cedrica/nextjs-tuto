import "./globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {name:"Register", href: "/register"},
  {name:"Login", href: "/login"},
  {name:"Password", href: "/password"},
];
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map(link => {
        const isActive = pathname.startsWith(link.href)
        return (
          <>
            <Link 
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4":"text-blue-500 mr-4"}>
                {link.name}
            </Link>
          </>
        );
      })}
    </div>
  );
}
