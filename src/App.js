import Btn from "./Btn";
import BtnBox from "./BtnBox";
import Screen from "./Screen";
import { btnVal } from "./data";

function App() {
  return (
    <>
      <div className="wrapper">
        <Screen />
        <BtnBox>
          {btnVal.flat().map((btn, i) => {
            // console.log(btn);
            return <Btn value={btn} key={i} />;
          })}
        </BtnBox>
        {/* <h1>App</h1> */}
      </div>
    </>
  );
}

export default App;
