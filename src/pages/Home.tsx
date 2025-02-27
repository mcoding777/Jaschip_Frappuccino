import { Link } from "react-router-dom"
import { routePaths } from "../routes"

export const Home = () => {
    return <>
    <header><h1>직접 만드는 자바스크립트 문제들</h1></header>
    <main css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      gap: 8,
      width: '100%'
    }}>
      <Link to={routePaths.deepDive1}>Deep Dive 1~5장</Link>
      <Link to={routePaths.deepDive2}>Deep Dive 6~7장</Link>
      <Link to={routePaths.deepDive1}>Deep Dive 8~9장</Link>
      <Link to={routePaths.deepDive1}>Deep Dive 10~11장</Link>
      <Link to={routePaths.deepDive1}>Deep Dive 12장</Link>
      <Link to={routePaths.deepDive1}>Deep Dive 13장</Link>
    </main>
  </>
}