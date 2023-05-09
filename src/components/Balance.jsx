import { useGlobalState } from "../context/GlobalContext";

export default function Balance() {
  const data = useGlobalState();
  return (
    <div>
      <h1>Balance</h1>
    </div>
  );
}
