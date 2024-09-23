import React, { createContext, useContext, useState } from "react";

interface CardContextType {
  selectedCards: string[];
  selectCard: (cardName: string) => void;
}

export const CardContext = createContext<CardContextType | undefined>(
  undefined
);

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const selectCard = (cardName: string) => {
    setSelectedCards((prev) => {
      const updatedCards = [...prev, cardName];

      if (updatedCards.length === 2) {
        if (updatedCards[0] === updatedCards[1]) {
          alert("Match!");
        } else {
          alert("No match!");
        }
        return [];
      }

      return updatedCards;
    });
  };

  return (
    <CardContext.Provider value={{ selectedCards, selectCard }}>
      {children}
    </CardContext.Provider>
  );
};

// Custom hook to use the CardContext
export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};
