import { useState } from "react";

function  MoodTracker(){
    const [mood,setMood] = useState("HAHA")
    return (
        <div>
            <p>Current mood :{mood}</p>

            <button onClick={() => setMood("KWAKWAKWA")}>Happy</button>
            <button onClick={() => setMood("KWIKWIKWI")}>Sad</button>

            </div>
    );
}

export default MoodTracker