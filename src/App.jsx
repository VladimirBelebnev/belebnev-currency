import { useEffect, useState } from "react";
import AmountComponent from "./components/AmountComponent";
import SelectComponent from "./components/SelectComponent";
import ChangeComponent from "./components/ChangeComponent";
import CurrencyComponent from "./components/CurrencyComponents";

const currencyList = ['EUR', 'USD', 'JPY', 'BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON', 'SEK', 'CHF', 'ISK', 'NOK', 'HRK', 'RUB', 'TRY', 'AUD', 'BRL', 'CAD', 'CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MXN', 'MYR', 'NZD', 'PHP', 'SGD', 'THB', 'ZAR']

const App = () => {
	const [currencies, setCurrencies] = useState([]);
	const [countries, setCountries] = useState([]);
	const [fromCurrency, setFromCurrency] = useState("🇷🇺 RUB - Russia");
	const [toCurrency, setToCurrency] = useState("🇺🇸 USD - United States");
	const [amount, setAmount] = useState(100);
	const [resultCurrency, setResultCurrency] = useState(0);

	async function getCurrency () {
		const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
		const data = await response.json();

		setCurrencies(data['Valute']);
	}

	async function getCountries () {
		const response = await fetch("https://restcountries.com/v3.1/all");
		const data = await response.json();
		let filteredData = [];

		data.filter(item => "currencies" in item).sort(item => {
			if (currencyList.indexOf(Object.keys(item.currencies)[0]) !== -1) {
				filteredData = [...filteredData, item];
			}
		});

		setCountries(filteredData);
	}

	async function calcResultCurrency () {
		const codeFromCurrency = fromCurrency.split(" ")[1];
  		const codeToCurrency = toCurrency.split(" ")[1];
		const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_DEVxjSFBSYNVt9F4DhAUjFoswyWQdraG3ctZH41J&base_currency=${codeFromCurrency}&currencies=${codeToCurrency}`);
		const data = await response.json();

		if (data.errors) {
			alert('Увы, мы не нашли такой вылюты.');
			return;
		}
	
		setResultCurrency(data.data[codeToCurrency]);
	}

	useEffect(() => {
		getCurrency();
		getCountries();
	}, []);

	useEffect(() => {
		calcResultCurrency();
	}, [amount, fromCurrency, toCurrency]);

	return (
		<>
			<div className="wrapper">
				<div className="container">
					<div className="box">
						<h1 className="box-title">Конвертер валют</h1>
						<div className="box-items">
							<AmountComponent amount={amount} setAmount={setAmount} />
							<SelectComponent countries={countries} currency={fromCurrency} setCurrency={setFromCurrency} />
							<ChangeComponent fromCurrency={fromCurrency} toCurrency={toCurrency} setFromCurrency={setFromCurrency} setToCurrency={setToCurrency}  />
							<SelectComponent countries={countries} currency={toCurrency} setCurrency={setToCurrency} />
						</div>
						<div className="box-result">
							Итого: <span>{(amount * resultCurrency).toFixed(2)} {toCurrency.split(" ")[0]}</span>
						</div>
						{<CurrencyComponent currencies={currencies} />}
					</div>
				</div>
			</div>
			<div className="name">Vladimir Belebnev</div>
			<img src="./logo.png" alt="SFU" className="logo" />
		</>
	);
}

export default App;