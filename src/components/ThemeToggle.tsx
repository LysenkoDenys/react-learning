import { useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <p>State now is {isDarkTheme ? 'dark' : 'light'} theme</p>
      <button
        type="button"
        className="button"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        {isDarkTheme ? 'Turn the light theme' : 'Turn the dark theme'}
      </button>
    </div>
  );
};

export default ThemeToggle;
