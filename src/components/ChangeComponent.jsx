

const ChangeComponent = ({fromCurrency, toCurrency, setFromCurrency, setToCurrency}) => {
	function switchCurrency () {
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
	}

    return (
        <svg onClick={() => switchCurrency()} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 489.2 489.2" space="preserve">
<g>
	<g>
		<path d="M365.55,485.6c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l94.5-94.5c4.8-4.8,4.8-12.5,0-17.3l-94.5-94.5
			c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l73.6,73.6H20.35c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h418.8l-73.6,73.5
			C360.75,473.1,360.75,480.9,365.55,485.6z"/>
		<path d="M106.25,3.6l-94.5,94.5c-4.8,4.8-4.8,12.5,0,17.3l94.5,94.5c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6
			c4.8-4.8,4.8-12.5,0-17.3L50.05,119h418.8c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H49.95l73.6-73.5c4.8-4.8,4.8-12.5,0-17.3
			S110.95-1.2,106.25,3.6z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
    )
}

export default ChangeComponent;