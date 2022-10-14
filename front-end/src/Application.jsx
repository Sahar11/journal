import Entry from "./entry/Entry";
import Header from "./header/Header";
import SideBar from "./left_sidebar/Left";
import './application.css';
import styled from "styled-components";
window.styled = window.styled.default;

const AppContainer = styled.div`
    width: 500px;
    height: 300px;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 25% 75%;
`;

const Title = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    background: #BD5027;
    color: #F0F0F0;
    padding: 5px;
`;

const Chat = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background: #276DBD;
`;

const Table = styled.div`
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    background: #2FC849;
`;

export default function Application() {

  return (
 <><Header />
    <div className="container">
    <SideBar />
    <Entry />
   
    </div>
    </>
  )
}