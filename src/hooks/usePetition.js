import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endpoint) => {
    
    const [data, setData] = useState();
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true);
        axios.get(`https://api.coincap.io/v2/${endpoint}`)
            .then(data =>{
                setData(data.data.data);
                setCargando(false);
            })
            .catch(e => {
                setCargando(false);
                console.error(e)
            });
    }, []);

    return [data, cargando];
}

export default usePetition;