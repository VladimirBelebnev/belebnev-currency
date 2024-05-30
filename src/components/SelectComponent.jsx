import { useState } from "react";


const SelectComponent = ({countries, currency, setCurrency}) => {
    const [active, setActive] = useState(false);

    function onChangeCurrency (value) {
        setActive(false);
        setCurrency(value)
    }

    return (
        <label className="box-item" htmlFor="from">
            <span>Имею</span>
            <input onClick={() => setActive(!active)} type="text" readOnly value={currency} />
            <div className={active ? 'box-dropdown active' : 'box-dropdown'}>
                {countries.map((item, i) => {
                    let value = `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`;
                    return (
                        <div
                            key={Math.random(100000)}
                            onClick={() => onChangeCurrency(value)}
                        >
                            {value}
                        </div>
                    )
                })}
            </div>
        </label>
    )
};

export default SelectComponent;