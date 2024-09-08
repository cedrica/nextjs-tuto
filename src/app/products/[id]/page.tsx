import { notFound } from "next/navigation";

export default function ProductDetails({ params} : {params:{ id:string }}) {
    if(parseInt(params.id) == 1002) {
        notFound();
    }
    return <ul>
        <li>product details { params.id }</li>
    </ul>;
}