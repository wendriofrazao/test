import { useNavigate } from "react-router-dom"

export function Home() {

    let navigator = useNavigate();
    return (
        <div>
            <h1>HOME</h1>
            <button onClick={() => navigator(1)} >próximo</button>
        </div>
    )
}