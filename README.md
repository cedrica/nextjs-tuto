## create tha app
npx create-next-app@latest

## to make app running

# build
npx run build

# start
npx run start


# routing
- in nextjs a folder under src/app correspond to its route. that mean if i reate a folder called patient under /app then patient ui will be accessed via localhost:3000/patient. of course you need a page.tsx insides the patient folder

# (nested) dynamic route
/products/{id} => id is dynamic
so you have to create an folder called [id] under the products folder or directly create a products/[id] folder instead of 2 nested folders 

## access the route params
export default function ProductDetails({ params,} : {params:{ id:string }}) {
    return <ul>
        <li>product details { params.id }</li>
    </ul>;
}

# catch-all segments
Feature 1
 |_concept1
 |_concept2
Feature 2
 |_concept1
 |_concept2
 if for each feature we have a deep of 20 per concept => a very long url and if you want to retreive path part from this URI you can split the URI in segment and put it insides an array => catch-all segment is the solution
create a folder docs/[...slug] =>..slug is conventional name

export default function Docs({ params,} : {params:{ slug:string[] }}) {
    if(params.slug?.length == 2){
        return <h1>Viewing slug for feature { params.slug[0] } and concept {params.slug[1]}</h1>;
    } else if(params.slug?.length == 1) {
        return <h1>Viewing slug for feature { params.slug[0] }</h1>;
    }
    return <h1>Docs home page</h1>;
}

# not found page
create a not-found.tsx under /app and that is it!
but you can also use the notfound() function of next

export default function ProductDetails({ params,} : {params:{ id:string }}) {
    if(parseInt(params.id) == 1002) {
        notFound();
    }
    return <ul>
        <li>product details { params.id }</li>
    </ul>;
}

# private folders
prefix them with underscore _
/_lid
- used for separting ui fom routing logic
- organise files
- sorting and grouping files in code editord
- avoiding naming conflict
- use %5F while using URL-Segment

# route groups
create /auth that conatin all autenticate related routes for example

# exclude a folder from URL path
just put it in paranthesis (auth)
i.e. 
(auth)
    |_login 

=> callling localhost:3000/auth/login became localhost:3000/login 

# layouts
UI schared between pages
## create a layout 
create a layout.tsx in the desired route folder with the following content

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

# metadata
- to share data between layouts and pages
- located at the top of layaout or page

export const metadata = {
    title: "test"
}
- code Evolution mean the child layout override the parent layout in cas where metadata are the same or complet the template define in parent

export const metadata: Metadata = {
    title: {
        absolute: "", // title ignore template,
        default: "next.js",
        template: "%s | Evolution" // %s will be replace by child title
    }
}

# component navigation
use 
import Link from "next/link"

export default function Home() {
  return 
  <>
  <h1>Welcome home</h1>
  <Link href="/blog">blog</Link>
  </>

# style active Link
"use client" 
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

# navigate programitcaly

"use client" // useRouter only work in client componenet
import { useRouter } from "next/router";
export default function Order() {

    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.forward();
        //router.push("/"); // navigate to the root
        //router.push("/blog"); // navigate to the root
        //  router.back() = navigate to previous page
        //  router.forward() = navigate to next page
    };

    return (
        <>
            <button onClick={handleClick}>Order</button>
        </>
    );
}

# templates
are the same as layouts but only difference is template are recreate when navigating throught URL whereas layouts keep they state 
## create template
just create a file template.tsx 
content is the same as layout

# loading ui
- is use like a spinner to show a loading spinner during datafietch / content load. 
- And while loading you can paralelly work on another poart aof the app