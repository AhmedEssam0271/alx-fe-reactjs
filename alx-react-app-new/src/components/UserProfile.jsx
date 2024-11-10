import PropTypes from "prop-types";

function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        backgroundColor: "blueviolet",
      }}
    >
      <h2 style={{ color: "blue" }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>Bio: {props.bio}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};

UserProfile.defaultProps = {
  name: "Gest",
  age: 0,
  bio: "bio",
};

export default UserProfile;
