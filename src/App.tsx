//@ts-nocheck
import React from "react";
import "./App.scss";
import cardsData from "./data";
import Card from "./components/card";

function App() {
  const [cards, setCrds] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const [filteredOptions, setFilteredOptions] = React.useState([]);
  function filterOptions(filter: string) {
    setFilteredOptions(cards.filter((card) => card[filter]));
  }
  React.useEffect(() => {
    cardsData.real.then((data) => setCrds(data));
  }, []);
  let cardsToRender = filteredOptions.length > 0 ? filteredOptions : cards;
  return (
    <main>
      <h1>تمام خانه ها</h1>
      <div>
        <button onClick={() => filterOptions("has_picture")}>
          فقط عکس دار
        </button>
      </div>
      <div className="card-container">
        {console.log(filteredOptions)}
        {cardsToRender.map((s) => (
          <Card
            date={s.create_timestamp}
            isVeryfied={s.badge}
            priceBase={s.mortgage_amount}
            numberOfRooms={s.room_qty}
            key={s.catalog_uuid}
            priceMonthly={s.monthly_rent}
            approxLocation={s.district_name}
            metrage={s.unit_area_extent}
            imgUrl={s.thumbnail_img}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
