'use client'

import { useParams } from "next/navigation"


export default function ReviewPage() {
    const params = useParams()
    return (<div>Review {params.reviewId}</div>);
}