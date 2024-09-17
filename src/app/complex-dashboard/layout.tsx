export default function DashboardLayout(children: React.ReactNode, users: React.ReactNode, notifications: React.ReactNode, revenue: React.ReactNode) {
    return (<>
        <div>Dashboard Layout</div>
        {children}
        <div>
            {users}
            {notifications}
            {revenue}
        </div>
    </>)
}