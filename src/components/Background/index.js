import styled from "styled-components"
import Col from "../data/colors.json"

const Background = styled.div`
  background-color:  ${Col.main.dark};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66' stroke-opacity='0.05' %3E%3Ccircle fill='%234ad2ff' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2344c7f6' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%233ebcee' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2338b2e5' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2334a7dc' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%232f9dd3' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%232c92c9' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%232988c0' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23267eb6' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%232474ac' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23226aa2' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23206198' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%231e578e' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%231d4e84' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%231b457a' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23193b70' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23173366' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23152a5c' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1000;
`

export default Background
