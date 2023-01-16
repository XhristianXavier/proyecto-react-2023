import { useParams } from "react-router-dom";
import usePetition from "../../hooks/usePetition";
import CriptoHistorial from "../info/CriptoHistorial";
import CriptoInfo from "../info/CriptoInfo";

const CriptoPage = () => {

    const params = useParams();

    const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`);
    const [history, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`);

    if(cargandoCripto || cargandoHistory) return  <span>Cargando...</span>
    return (
        <>
            { cripto && <CriptoInfo cripto={cripto} /> }
            { history && <CriptoHistorial history={history} /> }
        </>
    )
}

export default CriptoPage;