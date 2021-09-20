import React, { useEffect } from 'react'
import Select from '../../Select'
import Input from '../../Input'
import InputRange from '../../InputRange'
import InputCheck from '../../InputCheck'

const Indicator = ({ indicator, setIndicator, setNextIndicator }) => {

    const addContidionalList = [
        { value: "AND", label: "AND" },
        { value: "OR", label: "OR" },
        { value: "Final", label: "Final" }
    ]

    const contidionalListCross = [
        { value: ">", label: "Crossover" },
        { value: "<", label: "Crossdown" },
    ]

    const contidionalListTrend = [
        { value: ">", label: "In Uptrend" },
        { value: "<", label: "In Downtrend" },
    ]

    const contidionalListPrice = [
        { value: ">", label: "Above Price" },
        { value: "<", label: "Below Price" },
    ]

    const contidionalListValue = [
        { value: ">", label: "Greater than" },
        { value: "<", label: "Less than" },
    ]

    const contidionalListBands = [
        { value: ">", label: "Upperband Price" },
        { value: "<", label: "Lowerband Price" },
    ]

    const contidionalListPriceIncreased = [
        { value: "buy", label: "Buy Price" },
        { value: "3m", label: "Within 3 minutes" },
        { value: "15m", label: "Within 15 minutes" },
        { value: "30m", label: "Within 30 minutes" },
        { value: "1h", label: "Within 1 hour" },
        { value: "2h", label: "Within 2 hours" },
        { value: "4h", label: "Within 4 hours" }
    ]

    const contidionalListPriceDecreased = [
        { value: "buy", label: "Buy Price" },
        { value: "3m", label: "Within 3 minutes" },
        { value: "15m", label: "Within 15 minutes" },
        { value: "30m", label: "Within 30 minutes" },
        { value: "1h", label: "Within 1 hour" },
        { value: "2h", label: "Within 2 hours" },
        { value: "4h", label: "Within 4 hours" }
    ]

    const editContidionalListValue = contidionalListValue.filter(item => item.value === indicator.conditional)
    const editContidionalListCross = contidionalListCross.filter(item => item.value === indicator.conditional)
    const editContidionalListTrend = contidionalListTrend.filter(item => item.value === indicator.conditional)
    const editContidionalListPrice = contidionalListPrice.filter(item => item.value === indicator.conditional)
    const editContidionalListBands = contidionalListBands.filter(item => item.value === indicator.conditional)
    const editContidionalListPriceDecreased = contidionalListPriceDecreased.filter(item => item.value === indicator.conditional)
    const editContidionalListPriceIncreased = contidionalListPriceIncreased.filter(item => item.value === indicator.conditional)


    useEffect(() => {
        if (indicator.addConditional === "Final") {
            setNextIndicator({})
        }
    }, [indicator, setNextIndicator])

    return (
        <React.Fragment>

            {indicator.indicator === "MACD" ?
                <Select
                    value={indicator.conditional}
                    inputLabel="Conditional"
                    placeholder={editContidionalListCross[0]?.label || "Conditional"}
                    onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                    {contidionalListCross.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                </Select>
                : indicator.indicator === "Supertrend" || indicator.indicator === "AROON" || indicator.indicator === "MOM" ?
                    <Select
                        value={indicator.conditional}
                        inputLabel="Conditional"
                        placeholder={editContidionalListTrend[0]?.label || "Conditional"}
                        onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                        {contidionalListTrend.map((item) => (
                            <option key={item.value} value={item.value}>{item.label}</option>
                        ))}
                    </Select>
                    : indicator.indicator === "WMA" ?
                        <Select
                            value={indicator.conditional}
                            inputLabel="Conditional"
                            placeholder={editContidionalListPrice[0]?.label || "Conditional"}
                            onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                            {contidionalListPrice.map((item) => (
                                <option key={item.value} value={item.value}>{item.label}</option>
                            ))}
                        </Select>
                        : indicator.indicator === "Price Increased" ?
                            <div style={{ display: 'flex' }}>
                                <InputRange
                                    onChange={(e) => setIndicator({ ...indicator, value: e.target.value })}
                                    inputLabel="Percent"
                                    value={indicator.value}
                                    step="0.5"
                                    symbol={"%"}
                                />
                                <Select
                                    value={indicator.conditional}
                                    inputLabel="From"
                                    placeholder={editContidionalListPriceIncreased[0]?.label || "From"}
                                    onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                                    {contidionalListPriceIncreased.map((item) => (
                                        <option key={item.value} value={item.value}>{item.label}</option>
                                    ))}
                                </Select>
                            </div>
                            : indicator.indicator === "Price Decreased" ?
                                <div style={{ display: 'flex' }}>
                                    <InputRange
                                        onChange={(e) => setIndicator({ ...indicator, value: e.target.value })}
                                        inputLabel="Percent"
                                        value={indicator.value}
                                        step="0.5"
                                        symbol={"%"}
                                    />
                                    <Select
                                        value={indicator.conditional}
                                        inputLabel="From"
                                        placeholder={editContidionalListPriceDecreased[0]?.label || "From"}
                                        onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                                        {contidionalListPriceDecreased.map((item) => (
                                            <option key={item.value} value={item.value}>{item.label}</option>
                                        ))}
                                    </Select>
                                </div>
                                : indicator.indicator === "Bollinger Bands" ?
                                    <Select
                                        value={indicator.conditional}
                                        inputLabel="Conditional"
                                        placeholder={editContidionalListBands[0]?.label || "Conditional"}
                                        onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                                        {contidionalListBands.map((item) => (
                                            <option key={item.value} value={item.value}>{item.label}</option>
                                        ))}
                                    </Select>
                                    : <Select
                                        value={indicator.conditional}
                                        inputLabel="Conditional"
                                        placeholder={editContidionalListValue[0]?.label || "Conditional"}
                                        onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                                        {contidionalListValue.map((item) => (
                                            <option key={item.value} value={item.value}>{item.label}</option>
                                        ))}
                                    </Select>}
            {indicator.indicator === "Supertrend" ||
                indicator.indicator === "MACD" ||
                indicator.indicator === "Bollinger Bands" ||
                indicator.indicator === "WMA" ||
                indicator.indicator === "MOM" ||
                indicator.indicator === "AROON" ||
                indicator.indicator === "Price Increased" ||
                indicator.indicator === "Price Decreased" ?

                null
                : <Input
                    inputLabel={"Value"}
                    onChange={(e) => setIndicator({ ...indicator, value: e.target.value })}
                    value={indicator.value}
                    placeholder="Value"
                    maxLength={4}
                />}
            <Select
                value={indicator.addConditional}
                inputLabel={"Sequece"}
                placeholder={indicator.addConditional || "Sequence"}
                onChange={(e) => { setIndicator({ ...indicator, addConditional: e.target.value }) }}
            >
                {addContidionalList.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Select>

            {indicator.indicator === "Price Increased" || indicator.indicator === "Price Decreased" ?
                null
                : <InputCheck
                    onChange={() => { setIndicator({ ...indicator, signal: !indicator.signal }) }}
                    checked={indicator.signal}
                />
            }

        </React.Fragment>
    )
}


export default Indicator;