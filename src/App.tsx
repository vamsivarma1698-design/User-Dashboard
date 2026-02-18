import styled from "styled-components";
import { AddUser } from "./components/AddUser";
import { Filter } from "./components/Filter";
import { UserList } from "./components/UserList";
import "./App.css";

const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const Container = styled.div`
  width: 620px;
  padding: 36px;
  border-radius: 18px;
  background: #111827;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 28px;
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: 0.5px;
`;

function App() {
  return (
    <Page>
      <Container>
        <Title>👤 User Dashboard 🗃️</Title>
        <AddUser />
        <Filter />
        <UserList />
      </Container>
    </Page>
  );
}

export default App;
