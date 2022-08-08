import { useEffect, useState } from "react";

import ReactLoading from "react-loading";

import { useUser } from "context/UserContext";
import api from "services/api";

import { CardsItem } from "types/cardItem";

import Cards from "components/Cards";

import Buttons from "./Buttons";

import { Container } from "./styles";

function CardsPage() {
  const [cards, setCards] = useState<CardsItem[]>([]);
  const [shuffled, setShuffled] = useState<CardsItem[]>([]);

  const [loading, setLoading] = useState(false);

  const { user } = useUser();

  const remainingCards = cards.filter((val) => !shuffled.includes(val));

  const showMore = () => {
    setShuffled([
      ...shuffled,
      remainingCards[Math.floor(Math.random() * remainingCards.length)],
    ]);
  };

  const shuffleCards = () => {
    var newArr = [...shuffled];

    const shuffledCards = newArr.sort(() => Math.random() - 0.5);

    setShuffled(shuffledCards);
  };

  useEffect(() => {
    if (cards.length === 0) {
      setLoading(true);
      try {
        const getCard = async () => {
          const { data } = await api.get("/v1/public/characters", {
            params: {
              limit: "100",
            },
          });

          const results = data.data.results.filter(
            (item: CardsItem) =>
              !item.thumbnail.path.includes("image_not_available") &&
              item.description.length > 0
          );

          const newArr = results.map((item: CardsItem) => {
            return { ...item, points: Math.floor(Math.random() * 11) };
          });

          setShuffled(newArr.slice(0, 5));
          setCards(newArr);
          setLoading(false);
        };
        getCard();
      } catch (err) {
        setLoading(false);
        alert(err);
      }
    }
  }, [cards]);

  return (
    <Container>
      <h3 style={{ color: "#ffffff", textAlign: "right", width: "100%" }}>
        Bem vindo, {user}!
      </h3>
      {loading ? (
        <ReactLoading type="bubbles" height={"20%"} width={"50%"} />
      ) : (
        <>
          <Cards shuffled={shuffled} />
          <Buttons
            showButton={shuffled.length < 8}
            shuffleCards={shuffleCards}
            showMore={showMore}
          />
        </>
      )}
    </Container>
  );
}

export default CardsPage;
