

const CurrencyComponent = ({currencies}) => {
    return (
        <div className="box-currency">
            <div className="box-subtitle">Курсы валют относительно RUB:</div>
            <div className="box-values">
                <div className="box-value">USD = {currencies['USD']?.Value} ₽</div>
                <div className="box-value">EUR = {currencies['EUR']?.Value} ₽</div>
                <div className="box-value">CNY = {currencies['CNY']?.Value} ₽</div>
                <div className="box-value">KZT = {currencies['KZT']?.Value} ₽</div>
            </div>
        </div>
    )
};

export default CurrencyComponent;