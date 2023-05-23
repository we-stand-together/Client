import { createContext } from "react";

export interface GlobalContextDTO {
    placeholder: string,
    setPlaceholder: any
}

export const GlobalContext = createContext<GlobalContextDTO>({
    placeholder: 'global context is fine',
    setPlaceholder: (placeholder: string) => {}
})