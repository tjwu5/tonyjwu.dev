import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a utility function for class names

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            if (storedTheme === 'dark') {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark');
            } else {
                setIsDarkMode(false);
                document.documentElement.classList.remove('dark');
            }
        } else {
            // Default to light mode if no preference is stored
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }
    
    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden bottom-5 left-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden","cursor-pointer")}> {isDarkMode ? <Sun className="h-10 w-10 text-yellow-300"/> : <Moon className="h-10 w-10 text-blue-900"/>} </button>
}