import { Switch } from "./components/Switch/Switch";
import { TextField } from "./components/TextField/TextField";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Radio } from "./components/Radio/Radio";

function App() {
  return (
    <div className="h-screen bg-magnolia grid place-content-center">
      <div className="w-[min(1000px,100vw)]  bg-white">
        <Switch id="plan" labelLeft="Monthly" labelRight="Yearly"></Switch>
        <TextField id="tex" label="Name" />
        <Checkbox
          id="che1"
          labelContent={
            <label htmlFor="che1">
              <div>
                <div>Online service</div>
                <div>Access to multiplayer games</div>
              </div>
            </label>
          }
        />
        <Radio
          direction="flex-row"
          items={[
            { value: "arcade", labelContent: <div>Arcade</div> },
            { value: "advanced", labelContent: <div>Advanced</div> },
            { value: "pro", labelContent: <div>Pro</div> },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
