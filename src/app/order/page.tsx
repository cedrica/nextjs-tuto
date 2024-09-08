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