
import { useState } from "react"
import { LayoutCards } from "./components/Card";
import { Switch } from "./components/Switch";
import { Title } from "./components/Title";

const App = () => {
  const [dark, setDark] = useState(true)

  const habdleChange = (e:React.ChangeEvent<HTMLInputElement>) => setDark(e.target.checked);
  console.log({dark})

  return (
    <div className="container-main">
      <Title/>
      <Switch isDark={dark} onChange={habdleChange} />
      <LayoutCards/>
    </div>
  )
}
export default App
