import { useNavigate } from "react-router-dom"

export function Other() {
    let navigator = useNavigate();

    return (
        <div>
            <h1>outra página</h1>
            <button onClick={() => navigator(-1)} >voltar</button>
        </div>
    )
}