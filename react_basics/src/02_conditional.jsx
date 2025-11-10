import React from "react";

const Conditional = () => {
  const isOnline = true;
  const isLoggedIn = false;
  const isLoading = false;
  const hasError = false;
  const user = { name: "Abhi", isAdmin: false };

  // 🧩 1. Using if statement
  const renderStatus = () => {
    if (isOnline) {
      return <p>🟢 Online (if statement)</p>;
    } else {
      return <p>🔴 Offline (if statement)</p>;
    }
  };

  // ⚡ 2. Using ternary operator
  const renderLoginStatus = () => (
    <p>Status: {isLoggedIn ? "✅ Logged In" : "🚪 Logged Out"} (ternary)</p>
  );

  // 🔍 3. Using logical AND (&&)
  const renderWelcomeMessage = () => (
    <div>{isLoggedIn && <p>🎉 Welcome back! (AND condition)</p>}</div>
  );

  // 🧠 4. Multiple conditions (loading, error, success)
  const renderDashboard = () => {
    if (isLoading) return <p>⏳ Loading...</p>;
    if (hasError) return <p>❌ Error loading dashboard</p>;
    return <h2>👋 Hello, {user.name} (multi-condition)</h2>;
  };

  // 💡 5. Conditional styling + content
  const renderStyledStatus = () => (
    <p className={isOnline ? "text-green-500" : "text-red-500"}>
      {isOnline ? "Online" : "Offline"} (styled)
    </p>
  );

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>🧠 React Conditional Rendering Demo</h1>
      {renderStatus()}
      {renderLoginStatus()}
      {renderWelcomeMessage()}
      {renderDashboard()}
      {renderStyledStatus()}

      {/* Inline condition directly in JSX */}
      <div>
        {user.isAdmin ? (
          <button>⚙️ Admin Panel</button>
        ) : (
          <button>👤 User Settings</button>
        )}
      </div>
    </div>
  );
};

export default Conditional;
