import { Button } from "components/Button";
import { Container } from "./styles";

interface ButtonsProps {
  shuffleCards: () => void;
  showMore: () => void;
  showButton: boolean;
}

function Buttons({ showMore, shuffleCards, showButton }: ButtonsProps) {
  return (
    <Container>
      <Button
        color="#3b3a3a"
        bg="#ffffff"
        disabled={!showButton}
        onClick={showMore}
      >
        Puxar carta
      </Button>
      <Button color="#3b3a3a" bg="#ffffff" onClick={shuffleCards}>
        Embaralhar
      </Button>
    </Container>
  );
}

export default Buttons;
