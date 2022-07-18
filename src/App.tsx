import './styles.css'
// import img from "./logo512.png";
// import ImgLogo from "./logo.svg";
import ClickCounter from './ClickCounter'

export const App = () => {
  const name = "sandip"
  return (
    <div>
      <h1>
        React with edited - {process.env.NODE_ENV} - {process.env.name}
      </h1>
      {/* <img src={img} alt="logo" width="300" height="300" />
      <img src={ImgLogo} alt="logo" width="300" /> */}
      <ClickCounter />
    </div>
  )
}
