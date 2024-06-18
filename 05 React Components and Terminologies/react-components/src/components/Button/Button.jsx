function Button(props) {
  const { imageURL, title, event } = props;
  return (
    <button onClick={event} title={title}>
      <img src={imageURL} alt={title} />
    </button>
  );
}

export default Button;

/*
// Child prop implentation
function Button(props) {
  const { imageURL, title, event, children } = props;
  return (
    <button onClick={event} title={title}>
      <img src={imageURL} alt={title} />
      {children}
    </button>
  );
}

export default Button;
*/
