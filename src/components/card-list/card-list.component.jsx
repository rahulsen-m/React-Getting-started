import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monsterDetails={monster} />;
    })}
  </div>
);

// class CardList extends React.Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card key={monster.id} monsterDetails={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
