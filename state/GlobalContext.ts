import { createContext } from "react";
import { FormResult } from "../pages/Profile";

export interface GlobalContextDTO {
    placeholder: string,
    setPlaceholder: any,
    formResults: FormResult[],
    setFormResults: any
}

export const GlobalContext = createContext<GlobalContextDTO>({
    placeholder: 'global context is fine',
    setPlaceholder: (placeholder: string) => {},
    formResults: [],
    setFormResults: undefined
})