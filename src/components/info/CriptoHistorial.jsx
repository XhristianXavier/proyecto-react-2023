import { parseFloatNumber } from "../../helpers/number";

const CriptoHistorial = ({ history }) => {
    return (
        <>
            <h2>HISTORIAL</h2>

            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map(({ date, priceUsd, time }) => (
                        <tr key={time}>
                            <td>{date}</td>
                            <td>{parseFloatNumber(priceUsd, 3)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default CriptoHistorial;