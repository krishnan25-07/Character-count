import { useEffect, useState } from "react";

function CharacterStats({text}) {
    const [count, setCount] = useState(0);

    useEffect(() =>{
            setCount(text.length);
    }, [text]);

    return(
        <div className="stats-box">
            <p>Character Count:{count}</p>

            {count> 100 && (<p className="warning"> ⚠️Warning: Character Limit exceeded!</p>)}
        </div>
        
    );
}

export default CharacterStats;