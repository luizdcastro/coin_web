import React, { useEffect } from 'react'

import Select from '../../Select';
import Input from '../../Input';

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

    const editContidionalListValue = contidionalListValue.filter(item => item.value === indicator.conditional)
    const editContidionalListCross = contidionalListCross.filter(item => item.value === indicator.conditional)
    const editContidionalListTrend = contidionalListTrend.filter(item => item.value === indicator.conditional)
    const editContidionalListPrice = contidionalListPrice.filter(item => item.value === indicator.conditional)
    const editContidionalListBands = contidionalListBands.filter(item => item.value === indicator.conditional)

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
                        : indicator.indicator === "Bollinger Bands" ?
                            <Select
                                value={indicator.conditional}
                                inputLabel="Conditional"
                                placeholder={editContidionalListPrice[0]?.label || "Conditional"}
                                onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                                {contidionalListBands.map((item) => (
                                    <option key={item.value} value={item.value}>{item.label}</option>
                                ))}
                            </Select>
                            : <Select
                                value={indicator.conditional}
                                inputLabel="Conditional"
                                placeholder={editContidionalListBands[0]?.label || "Conditional"}
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
                indicator.indicator === "AROON" ?
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
                inputLabel={"Add Condition"}
                placeholder={indicator.addConditional || "Add Condition"}
                onChange={(e) => { setIndicator({ ...indicator, addConditional: e.target.value }) }}
            >
                {addContidionalList.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Select>

        </React.Fragment>
    )
}

export default Indicator