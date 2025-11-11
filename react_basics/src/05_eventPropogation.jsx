import React from "react";

function EventPropagation() {
  // 🔹 Bubbling phase handlers
  const handleParent = () => console.log("🟦 Parent DIV clicked");
  const handleChild = () => console.log("🟩 Child DIV clicked");
  const handleGrandChild = () => console.log("🟨 Grandchild DIV clicked");

 
  const handleButton = (e) => {
    console.log("🟥 Button clicked");
    e.stopPropagation(); // uncomment to stop bubbling here
  };

  return (
    <div
      onClick={handleParent}
    //   onClickCapture={() => console.log("⬇️ Parent Capture")}
      style={{
        fontWeight: "bold",
        padding: 30,
        background: "#2196F3",
        color: "white",
      }}
    >
      🟦 Parent DIV
      <div
        onClick={handleChild}
        // onClickCapture={() => console.log("⬇️ Child Capture")}
        style={{
          padding: 30,
          background: "#4CAF50",
          marginTop: 10,
        }}
      >
        🟩 Child DIV
        <div
          onClick={handleGrandChild}
        //   onClickCapture={() => console.log("⬇️ Grandchild Capture")}
          style={{
            padding: 30,
            background: "#FFEB3B",
            color: "black",
            marginTop: 10,
          }}
        >
          🟨 Grandchild DIV

          

          <button
            onClick={handleButton}
            // onClickCapture={() => console.log("⬇️ Button Capture")}
            style={{
              marginTop: 10,
              padding: "5px 10px",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Click Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventPropagation;
