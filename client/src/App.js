import Page from "./pages/Page";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Page
        onLogin={() => console.log("login")}
        onLogout={() => console.log("logout")}
        onCreateAccount={() => console.log("create account")}
      />
      <a href="/storybook">Go to Storybook</a>
    </div>
  );
}

export default App;
