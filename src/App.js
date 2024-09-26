import { useState } from "react";

function App() {
  return <TipCalulator />;
}

export default App;

function TipCalulator() {
  const [billPrice, setBillPrice] = useState("");
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendtip] = useState(0);

  function handleSetBillPrice(e) {
    setBillPrice(+e.target.value);
  }

  function handleYourTip(e) {
    setYourTip(+e.target.value);
  }

  function handleFriendTip(e) {
    setFriendtip(+e.target.value);
  }

  function handleClearAll() {
    setBillPrice(300);
    setYourTip(0);
    setFriendtip(0);
  }

  return (
    <div>
      <BillPrice billPrice={billPrice} onHandleBillPrice={handleSetBillPrice} />
      <TipPrice tip={yourTip} onHandleTip={handleYourTip}>
        {<span>How much did you enjoy the service</span>}
      </TipPrice>
      <TipPrice tip={friendTip} onHandleTip={handleFriendTip}>
        {<span>How much did your friend enjoy the service</span>}
      </TipPrice>
      <Total billPrice={billPrice} yourTip={yourTip} friendTip={friendTip} />
      <ClearAll OnClearAll={handleClearAll} />
    </div>
  );
}

function BillPrice({ billPrice, onHandleBillPrice }) {
  return (
    <div>
      <span>How much was the bill?</span>{" "}
      <input
        type="number"
        value={billPrice}
        onChange={onHandleBillPrice}
      ></input>
    </div>
  );
}

function TipPrice({ children, tip, onHandleTip }) {
  return (
    <div>
      {children}
      <select onChange={onHandleTip}>
        <option value={0}>Dissasified: 0%</option>
        <option value={10}>Disliked it: 10%</option>
        <option value={15}>Thought it was okay: 15%</option>
        <option value={20}>Loved it: 20%</option>
      </select>
    </div>
  );
}

function Total({ billPrice, yourTip, friendTip }) {
  let tipPercent = (yourTip + friendTip) / 2;
  let tipTotal = (billPrice * tipPercent) / 100;
  return (
    billPrice && (
      <div>
        You pay {billPrice + tipTotal}(${billPrice} + ${tipTotal})
      </div>
    )
  );
}

function ClearAll({ onClearAll }) {
  return <button onClick={onClearAll}>Reset</button>;
}
