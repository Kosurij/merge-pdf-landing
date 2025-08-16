export function useSystemTheme() {
    const applySystemTheme = () => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }

    const listenToSystemChanges = () => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', (e) => {
            const newTheme = e.matches ? 'dark' : 'light'
            document.documentElement.setAttribute('data-theme', newTheme)
        })
    }

    applySystemTheme()
    listenToSystemChanges()
}
