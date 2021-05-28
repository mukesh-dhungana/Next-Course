import "./App.css";
import Card from "./components/Card/Card";
import InputField from "./components/InputField/InputField";

function App() {
  return (
    <div className="App">
      <h3>Story Book</h3>
      <Card backgroundColor="red">Content</Card>
      <div style={{ width: "200px" }}>
        <InputField
          name="username"
          label="username"
          placeholder="enter username"
          error="fd"
        />
      </div>
    </div>
  );
}

export default App;
