import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

function App() {
  // console.log(supabase);
  
  const [instruments, setInstruments] = useState([]);



  async function addInstrument() {
    const instrumentName = prompt("Enter instrument name");
    if (instrumentName) {
      await supabase.from("reactPractice").insert({ test: instrumentName });
      // getInstruments(); 
    }
  }



  useEffect(() => {
      async function getInstruments() {
    const { data } = await supabase.from("reactPractice").select();
    setInstruments(data);
    console.log(data);
    
  }

    getInstruments();
    
  }, []);



  return (
    <>
    <h1>Instruments</h1>
    <button onClick={addInstrument}>Add Instrument</button>

    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.test}</li>
      ))}
    </ul>
    </>
  );
}

export default App;