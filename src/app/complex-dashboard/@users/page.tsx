import Card from "@/components/card";
import Link from "next/link";

export default function UsersPage() {
    return <Card>
        <h1>Users</h1>
        <Link href="/complex-dashboard/users">User 1</Link>
    </Card>
}