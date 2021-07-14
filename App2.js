import React from "react";
import { useState } from "react";
import Tours from "./ToursComponents/Tours";
function App() {
  const arr = [
    {
      id: 1,
      name: "Best Of Paris In 7 Days Tour",
      price: "$1,995",
      src: "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
      desc: `Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas
     On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!`,
    },
    {
      id: 2,
      name: "Best Of Ireland In 14 Days Tour",
      price: "$3,895",
      src: "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
      desc: `'Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Di
    ngle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!`,
    },
    {
      id: 3,
      name: "Best Of Salzburg & Vienna In 8 Days Tour",
      price: "$2,695",
      src: "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
      desc: `Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient
    Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!`,
    },
    {
      id: 4,
      name: "Best Of Rome In 7 Days Tour",
      price: "$2,095",
      src: "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
      desc: `'Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Di
     ngle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!`,
    },
    {
      id: 5,
      name: "Best Of Poland In 10 Days Tour",
      price: "$2,595",
      src: "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
      desc: `Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y.
     ngle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!
     `,
    },
  ];
  const [tourArray, settourArray] = useState(arr);
  const interest = (id) => {
    settourArray(
      tourArray.filter((elem) => {
        return elem.id !== id;
      })
    );
  };
  return (
    <>
      {tourArray.length === 0 ? (
        <>
          <h1>No more Items to display</h1>
        </>
      ) : (
        tourArray.map((elem) => {
          return <Tours menu={elem} key={elem.id} interestHandler={interest} />;
        })
      )}
    </>
  );
}

export default App;
