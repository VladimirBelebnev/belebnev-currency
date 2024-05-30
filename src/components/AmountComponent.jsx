
const AmountComponent = ({amount, setAmount}) => {
    return (
        <label className="box-item" htmlFor="amount">
            <span>Количество</span>
            <input type="number" id="amount" value={amount} onChange={event =>  setAmount(event.target.value)} />
        </label>
    )
};

export default AmountComponent;