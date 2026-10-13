import { useEffect, useState } from "react";

export default function Student() {
  const [math, setmath] = useState(70);
  const [science, setscince] = useState(80);
  const [total, settotal] = useState(0);
  const [per, setper] = useState(0);

  useEffect(() => {
    let t = Number(math) + Number(science);
    settotal(t);
    setper((t / 200) * 100);
  }, [math, science]);

  return (
    <>
    <div className="bg-blue-400 font-bold justify-center">
      <div>
        <p>Math Marks: {math}</p>
        <p>Science Marks: {science}</p>
        <p>Total Marks: {total}</p>
        <p>Percentage: {total/2}%</p>
      </div>

      <div>
        <h2>Change Marks</h2>

        <p>
          Math Marks:
          <input
            type="number"
            defaultValue={math}
            onBlur={(e) => setmath(e.target.value)}
          />
        </p>

        <p>
          Science Marks:
          <input
            type="number"
            defaultValue={science}
            onBlur={(e) => setscince(e.target.value)}
          />
        </p>
      </div>
      </div>
    </>
  );
}