import "./card.styles.css";
function Card(props) {
  const classes = props.className + " card";

  return <div className={classes}>{props.children}</div>;
}

export default Card;
