import { LayoutCards } from "./components/Card";
import { MyProfile } from "./components/Perfil";
import { Switch } from "./components/Switch";
import { Title } from "./components/Title";

const App = () => {
  return (
    <div className="container-main">
      <Title />
      <Switch/>
      <LayoutCards />
      <MyProfile/>
    </div>
  )
}
export default App
