import Entry from "./entry/Entry";
import Header from "./header/Header";
import SideBar from "./left_sidebar/Left";
import './application.css';
import styled from "styled-components";

// window.styled = window.styled.default;

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 25% 75%;
`;

const Head = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    background: #fff;
    color: #F37654;
    padding: 10px;
`;

const Options = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background: #fff;
`;

const Text = styled.div`
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    background: #fff;
`;

export default function Application() {

  return (
 <AppContainer>
  <Head><Header /></Head>
    
    <Options><SideBar /></Options>
    <Text><Entry /></Text>
   
    </AppContainer>
    
  )
}