import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }

        // If no theme in localStorage, check user preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }
    }

    // Default to dark mode
    return true;
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: getInitialTheme(),
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
            // Save to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;