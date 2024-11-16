const filled = '★';
const outlined = '✩'

function RatingBar({ rate }) {
  
    const stars = new Array(10);

    stars.fill(filled, 0, rate);
    stars.fill(outlined, rate, 10);

  return (
    <div>
      {stars.map((star, index) => <span key={index}>{star}</span>)}
    </div>
  );
}

export default RatingBar;
