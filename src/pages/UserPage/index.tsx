import { useNavigate } from "react-router-dom";

import { Button } from "components/Button";
import Input from "components/Input";

import { useUser } from "context/UserContext";
import { Container, Content } from "./styles";

function InitialPage() {
  const { user, setUser } = useUser();

  let navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Input
          label="Nome"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <Button disabled={user.length === 0} onClick={() => navigate("/cards")}>
          Ver cartas
        </Button>
      </Content>
    </Container>
  );
}

export default InitialPage;
