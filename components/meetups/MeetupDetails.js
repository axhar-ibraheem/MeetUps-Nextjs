const MeetupDetails = (props) => {
  return (
    <>
      <img src={props.image} alt="" style={{ width: "100%" }} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </>
  );
};

export default MeetupDetails;
