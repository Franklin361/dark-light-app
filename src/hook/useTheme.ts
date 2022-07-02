import { useEffect, useState } from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>

export const useTheme = (initialTheme: 'dark' | 'light'): [string, (e: ChangeEvent) => void] => {

    const [theme, setTheme] = useState(initialTheme)

    const handleChange = (e: ChangeEvent) => {
        setTheme(e.target.checked ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return [theme, handleChange]
}