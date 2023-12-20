import useLocalStorage from 'use-local-storage';

function useTheme() {
  const [theme, setTheme] = useLocalStorage('theme');

  if (theme === undefined) {
    setTheme('default');
  }

  const setCustomTheme = (themeName) => {
    setTheme(themeName);
  };

  return { theme, setCustomTheme };
}

export default useTheme;
