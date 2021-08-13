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

    const contidionalListValue = [
        { value: ">", label: "Greater than" },
        { value: "<", label: "Less than" },
    ]

    useEffect(() => {
        if (indicator.addConditional === "Final") {
            setNextIndicator({})
        }
    }, [indicator, setNextIndicator])

    return (
        <React.Fragment>

            {indicator.indicator === "Supertrend" || indicator.indicator === "MACD" || indicator.indicator === "Bollinger Bands" ?
                <Select
                    value={indicator.conditional}
                    inputLabel="Conditional"
                    placeholder="Conditional"
                    onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value}) }}>
                    {contidionalListCross.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                </Select>
                : <Select
                    value={indicator.conditional}
                    inputLabel="Conditional"
                    placeholder="Conditional"
                    onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}>
                    {contidionalListValue.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                </Select>}

            {indicator.indicator === "Supertrend" || indicator.indicator === "MACD" || indicator.indicator === "Bollinger Bands" ?
                null
                : <Input
                    inputLabel={"Value"}
                    onChange={(e) => setIndicator({ ...indicator, value: e.target.value })}
                    value={indicator.value}
                    placeholder="Value"
                    maxLength={3}
                />}

            <Select
                value={indicator.addConditional}
                inputLabel={"Add Condition"}
                placeholder="Add Condition"
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