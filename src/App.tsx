import { useTheme } from "./hook/useTheme";

import { LayoutCards } from "./components/Card";
import { MyProfile } from "./components/Perfil";
import { Switch } from "./components/Switch";
import { Title } from "./components/Title";

const App = () => {
  const [theme, handleChange] = useTheme('dark');

  return (
    <div className="container-main">
      <Title />
      <Switch isDark={theme === 'dark'} onChange={handleChange} />
      <LayoutCards />
      <MyProfile/>
    </div>
  )
}
export default App
