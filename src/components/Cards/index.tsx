import { useState } from "react";
import { CardsItem } from "types/cardItem";
import { Container, Content } from "./styles";

interface CardsProps {
  shuffled: CardsItem[];
}

function Cards({ shuffled }: CardsProps) {
  const [showDescription, setShowDescription] = useState<number | null>(null);

  return (
    <Container>
      {shuffled.map((item) => (
        <Content>
          <img
            width="100%"
            height="220px"
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          />
          <div className="info">
            <div className="title">
              <span className="name">{item.name}</span>
              <span className="points">({item.points} points)</span>
            </div>
            <a
              className="buttonDescription"
              onClick={() =>
                setShowDescription(showDescription === item.id ? null : item.id)
              }
              href="#"
            >
              {showDescription === item.id
                ? "Hide description"
                : "Show description"}
            </a>
            {showDescription === item.id && (
              <div className="descriptionBox">
                <span className="description">{item.description}</span>
              </div>
            )}
          </div>
        </Content>
      ))}
    </Container>
  );
}

export default Cards;
