function AppleBasket(props) {
  const { count, basketNum } = props;
  return (
    <div className="apple-basket">
      <h1>
        <span>{count}</span> Apples
      </h1>
      <p>
        Basket {basketNum} {count === 10 && "(Full)"} {count === 0 && "(Empty)"}
      </p>
    </div>
  );
}

export default AppleBasket;
