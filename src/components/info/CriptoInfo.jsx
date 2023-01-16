const CriptoInfo = ({ cripto }) => {
    return (
        <div className="info">
            <ul>
                <li><span className="label">Nombre:</span>{cripto.name}</li>
                <li><span className="label">Simbolo:</span>{cripto.symbol}</li>
            </ul>
        </div>
    );
}

export default CriptoInfo;