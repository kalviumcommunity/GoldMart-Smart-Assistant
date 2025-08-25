export const getGoldPrice = (weightInGrams) => {
  // Example: assume gold price per gram is 6000 INR
  const pricePerGram = 6000;
  return weightInGrams * pricePerGram;
};

export const suggestSellingMethod = () => {
  return [
    "Sell via GoldMart marketplace for verified buyers",
    "Visit certified gold buyers locally",
    "Check online buyback offers from jewelers"
  ];
};
