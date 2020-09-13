import React, { useState } from 'react';

function CardHeader(props: any) {
  const [isCardCompleted, setIsCardCompleted] = useState(
    props.currentCard.isCardCompleted
  );

  const handleCardComplete = () => {
    props.completeCard(props.currentColumn.id, props.currentCard.id);
    setIsCardCompleted(true);
  };

  const daysDifference = (d0: Date, d1: Date) => {
    let diff = new Date(+d1).setHours(12) - new Date(+d0).setHours(12);
    let result = 'a day';
    const diffNum = Math.round(diff / 8.64e7);
    if (diffNum > 1 && diffNum < 2) {
      result = 'two days';
    } else if (diffNum >= 2 && diffNum < 30) {
      result = `${diffNum} days`;
    } else if (diffNum >= 30 && diffNum < 32) {
      result = `a month`;
    } else if (diffNum >= 32 && diffNum < 62) {
      result = `one month and ${diffNum - 31} days`;
    } else if (diffNum >= 62 && diffNum < 365) {
      result = `${Math.floor(diffNum / 30)} months and ${
        diffNum - 30 * Math.floor(diffNum / 30)
      } days`;
    }
    return result;
  };
  return (
    <div className="card-detail-header">
      {isCardCompleted ? (
        <>
          <div className="card-modal-header">
            <button className="archive-btn cursor-pointer">Archive</button>
            <div className="card-modal-header-check">
              <i className="text-green fas fa-check-circle"></i>
            </div>
            <div>
              <div className="text-grey">{`Completed on ${props.convertDate(
                props.currentCard.updatedAt
              )}`}</div>
              <div>{`Time to complete : ${daysDifference(
                props.currentCard.updatedAt,
                props.currentCard.createdAt
              )}`}</div>
            </div>
          </div>
        </>
      ) : (
        <div className="card-modal-header">
          <button
            onClick={() => handleCardComplete()}
            className="complete-btn cursor-pointer border-none bg-head-1"
          >
            Complete
          </button>
        </div>
      )}
      <div
        onClick={() => props.handleModalClose()}
        className="card-detail-close float-right cursor-pointer"
      >
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
}
export default CardHeader;