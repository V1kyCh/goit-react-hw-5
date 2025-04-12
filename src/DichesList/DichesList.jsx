import { Dish } from "../Dich/Dish";

import { List } from "./DishesList";

export const DichesList = () => {
  return (
    <List>
      <Dish
        img="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg"
        title="Smoked salmon burger"
        time={20}
        servings={6}
        calories={210}
        difficulty="Easy"
        key={1}
      />
      <Dish
        img="https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2560%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg"
        title="Tomatoes With Creamy Feta"
        time={15}
        servings={3}
        calories={600}
        difficulty="Easy"
      />
      <Dish
        img="https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_2560%2Cc_limit/0701-tj-recipe-potato-v2.jpg"
        title="Spicy potato salad"
        time={30}
        servings={2}
        calories={320}
        difficulty="Medium"
      />
      <Dish
        img="https://www.cookwithnabeela.com/wp-content/uploads/2025/01/ChickenBiryani-500x500.webp"
        title="Chicken Biryanir"
        time={40}
        servings={4}
        calories={700}
        difficulty="Hard"
      />
    </List>
  );
};
