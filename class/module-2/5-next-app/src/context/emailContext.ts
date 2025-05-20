import { createContext, useContext } from "react";

type emailContext = {
  email: string;
};

const emailContextDefaultValues: emailContext = {
    email: ""
}

const EmailContext = createContext<emailContext>(emailContextDefaultValues)

export function useEmail() {
    return useContext(EmailContext)
}