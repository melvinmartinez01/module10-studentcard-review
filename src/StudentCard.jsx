//This is what I added to edit, not only, the StudentCard component, but to correct the error that presented itself when I first pasted the code.
import { useState } from "react";

//The function StudentCard is a React component that display a student's information in a card format.
function StudentCard(props) {
    /* Props are inputs that are passed to a component from its parent component. Destructing is pretty much allowing you to use each
    prop by name instead of having to repeat props.name, props.major, etc. */
    const { name, major, year, bio, imageUrl } = props;     
    /* State is an internal data structure that allows a component to manage and update its own data. showBio is false, which means it
    stays hidden until the user clicks on the "Show Bio" button. */
    const [showBio, setShowBio] = useState(false);

    /* toggleBio flips the current value of showBio between true and false */
    const toggleBio = () => {
        console.log("bio on click:", bio);
        setShowBio(!showBio);
    };

    /* JSX is what gets returned from a React component. This outputs must output one parent element. */
    return (
        <div style={{
          maxWidth: "350px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "12px",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          margin: "20px auto",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          color: `#333`
        }}>
          <img
            src={imageUrl}
            alt={`${name}'s profile`}
            style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", marginBottom: "12px"}}
          />
          <h2 style={{ margin: "0", fontSize: "22px" }}>{name}</h2>
          <p style={{ margin: "4px 0", fontSize: "16px" }}>{major} – {year}</p>

          <button onClick={toggleBio} style={{
            marginTop: "12px",
            padding: "8px 16px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#007BFF",
            color: "white"
          }}>
            {showBio ? 'Hide Bio' : 'Show Bio'}
          </button>
          {showBio && <p style={{ marginTop: "16px", fontSize: "14px" }}>{bio}</p>}
        </div>
    );
}
export default StudentCard;
