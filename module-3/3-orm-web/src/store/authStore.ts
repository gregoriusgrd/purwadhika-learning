// zustand example

import { create } from "zustand";
import { IUser } from "@/features/user/type";

type AuthState = {
    user: IUser | null
}

type AuthActions = {
    onSuccess: (user?: IUser | null) => void
}

type AuthStore = AuthState & AuthActions

const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    onSuccess: (payload) => set(() => ({ user: payload})),
}))

export default useAuthStore