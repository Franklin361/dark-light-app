
import { LayoutCards } from "./components/Card";
import { Switch } from "./components/Switch";
import { Title } from "./components/Title";
import { useTheme } from "./hook/useTheme";

const App = () => {
  const [theme, handleChange] = useTheme('dark');

  return (
    <div className="container-main">
      <Title />
      <Switch isDark={theme === 'dark'} onChange={handleChange} />
      <LayoutCards />
    </div>
  )
}
export default App
