function Card(props) {
  const { cardTitle, cardSubTitle, footerText } = props;
  return (
    <>
      <div className="card">
        <h3 className="heading">{cardTitle}</h3>
        <p className="desc">{cardSubTitle}</p>
        <p className="footerText strong">{footerText}</p>
      </div>
    </>
  );
}

export default Card;
