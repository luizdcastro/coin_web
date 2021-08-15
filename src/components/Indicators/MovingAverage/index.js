import React, { useEffect } from 'react'

import Select from '../../Select';

const MovingAverage = ({ indicator, setIndicator, setNextIndicator }) => {

    const addContidionalList = [
        { value: "AND", label: "AND" },
        { value: "OR", label: "OR" },
        { value: "Final", label: "Final" }
    ]

    const contidionalList = [
        { value: ">", label: "Above Price" },
        { value: "<", label: "Below Price" },
        { value: "> ema", label: "Above EMA" },
        { value: "< ema", label: "Below EMA" },
        { value: "> ma", label: "Above MA" },
        { value: "< ma", label: "Below MA" },
    ]

    const maList = [
        { value: "ma_10", label: "MA (10)" },
        { value: "ma_20", label: "MA (20)" },
        { value: "ma_30", label: "MA (30)" },
        { value: "ma_40", label: "MA (40)" },
        { value: "ma_50", label: "MA (50)" },
        { value: "ma_100", label: "MA (100)" },
        { value: "ma_200", label: "MA (200)" },
    ]

    const emaList = [
        { value: "ema_10", label: "EMA (10)" },
        { value: "ema_20", label: "EMA (20)" },
        { value: "ema_30", label: "EMA (30)" },
        { value: "ema_40", label: "EMA (40)" },
        { value: "ema_50", label: "EMA (50)" },
        { value: "ema_100", label: "EMA (100)" },
        { value: "ema_200", label: "EMA (200)" },
    ]

    useEffect(() => {
        if (indicator.addConditional === "Final") {
            setNextIndicator({})
        }
    }, [indicator, setNextIndicator])

    return (
        <React.Fragment>

            <Select
                value={indicator.conditional}
                inputLabel="Conditional"
                placeholder="Conditional"
                onChange={(e) => { setIndicator({ ...indicator, conditional: e.target.value }) }}
            >
                {contidionalList.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Select>

            {indicator.conditional === "> ma" || indicator.conditional === "< ma" ?
                <Select
                    value={indicator.ma}
                    inputLabel={"MA"}
                    placeholder="MA"
                    onChange={(e) => { setIndicator({ ...indicator, ma: e.target.value }) }}
                >
                    {maList.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                </Select>
                : null}

            {indicator.conditional === "> ema" || indicator.conditional === "< ema" ?
                <Select
                    value={indicator.ema}
                    inputLabel={"EMA"}
                    placeholder="EMA"
                    onChange={(e) => { setIndicator({ ...indicator, ema: e.target.value }) }}
                >
                    {emaList.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                </Select>
                : null}

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

export default MovingAverage




