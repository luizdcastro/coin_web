import React, { useEffect } from 'react'

import Select from '../../Select';

const CandlePattern = ({ indicator, setIndicator, setNextIndicator }) => {

    const addContidionalList = [
        { value: "AND", label: "AND" },
        { value: "OR", label: "OR" },
        { value: "Final", label: "Final" }
    ]

    const contidionalList = [
        { value: "true", label: "True" },
        { value: "false", label: "False" },
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

export default CandlePattern




