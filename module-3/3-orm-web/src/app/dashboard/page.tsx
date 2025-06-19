"use client"

import useAuthStore from "@/store/authStore"

export default function Dashboard() {
    const user = useAuthStore((state) => state.user)

    return (
        <div>
            <p>{user?.email}</p>
        </div>
    )
}