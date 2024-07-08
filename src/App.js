import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleBillChange(e) {
    setBill(e);
  }

  function handleTipchange(e) {
    setTip(e);
  }
  function handleFriendTipchange(e) {
    setFriendTip(e);
  }

  function handleReset() {
    setBill(0);
    setTip(0);
    setFriendTip(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} onChange={handleBillChange} />
      <Tip tip={tip} onChange={handleTipchange}>
        How did you like the service?
      </Tip>
      <Tip tip={friendTip} onChange={handleFriendTipchange}>
        How did your friend like the service?
      </Tip>
      <Output bill={bill} tip={tip} friendTip={friendTip} />
      <Reset bill={bill} tip={tip} friendTip={friendTip}  onClick={handleReset} />
    </div>
  );
}

function Bill({ bill, onChange }) {
  return (
    <div className="row">
      <label>How much was the bill</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
function Tip({ children, tip, onChange }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onChange(Number(e.target.value))}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="0.05">It was okay(5%)</option>
        <option value="0.1">It was good(10%)</option>
        <option value="0.2">Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip, friendTip }) {
  if (bill === 0 && tip === 0 && friendTip === 0) return;
  let averageTip = (tip + friendTip) / 2;
  averageTip = averageTip.toFixed(2);

  const totalBill = bill + bill * averageTip;
  return (
    <h2>
      You pay ${totalBill}({bill} + ${averageTip * bill})
    </h2>
  );
}
function Reset({ bill, tip, friendTip, onClick }) {
  if (bill === 0 && tip === 0 && friendTip === 0) return;

  return <button onClick={onClick}>Reset</button>;
}
