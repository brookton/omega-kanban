import React, { useState, KeyboardEvent } from 'react';

function CardDetailHead(props: any) {
  const [cardDetailTitle, setCardDetailTitle] = useState(
    props.currentCard.cardTitle
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      props.updateCardTitle(
        props.currentColumn._id,
        props.currentCard._id,
        cardDetailTitle
      );
    }
  };
  return (
    <div id="transition-modal-title">
      <input
        id={props.currentCard._id}
        disabled={props.currentCard.isArchived}
        className="card-deatil-title border-none"
        type="text"
        onChange={(e) => setCardDetailTitle(e.target.value)}
        value={cardDetailTitle}
        onKeyDown={(e: KeyboardEvent) => handleKeyDown(e)}
      />
    </div>
  );
}
export default CardDetailHead;
