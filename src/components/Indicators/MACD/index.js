import React, { useEffect, useState } from 'react'
import * as MdIcons from 'react-icons/md'

const MACD = ({ indicator, setIndicator, setNextIndicator }) => {
    const [open, setOpen] = useState("")

    const addContidionalList = [
        { value: "and", label: "AND" },
        { value: "or", label: "OR" },
        { value: "final", label: "Final" }
    ]

    const contidionalList = [
        { value: ">", label: "Crossover" },
        { value: "<", label: "Crossdown" },
    ]

    useEffect(() => {
        if (indicator.addConditional === "Final") {
            setNextIndicator({})
        }
    }, [indicator, setNextIndicator])

    return (
        <React.Fragment>
        <div style={{ marginRight: 20 }}>
            <button className="condition-select_container" onClick={() => { open === "conditional" ? setOpen("") : setOpen("conditional") }}>
                {indicator?.conditional ?
                    <p className="condition-option_title">{indicator.conditional === ">" ? "Crossover" : "Crossdown"}</p>
                    :
                    <p className="condition-select_title">Conditional</p>
                }
                {open === "conditional" ?
                    <MdIcons.MdKeyboardArrowUp size={24} style={{ marginRight: 3 }} /> :
                    <MdIcons.MdKeyboardArrowDown size={24} style={{ marginRight: 3 }} />
                }
            </button>
            {open === "conditional" && (
                <div className="condition-option_container">
                    {contidionalList.map((item) => (
                        <button key={item.label} className="condition-option_item" onClick={() => { setIndicator({ ...indicator, conditional: item.value }); setOpen("") }}>
                            <p className="condition-option_title">{item.label}</p>
                        </button>
                    ))}
                </div>
            )}
        </div>     
        <div>
            <button className="condition-select_container" onClick={() => { open === "addConditional" ? setOpen("") : setOpen("addConditional") }}>
                {indicator?.addConditional ?
                    <p className="condition-option_title">{indicator.addConditional}</p>
                    :
                    <p className="condition-select_title">Sequence</p>
                }
                {open === "addConditional" ?
                    <MdIcons.MdKeyboardArrowUp size={24} style={{ marginRight: 3 }} /> :
                    <MdIcons.MdKeyboardArrowDown size={24} style={{ marginRight: 3 }} />
                }
            </button>
            {open === "addConditional" && (
                <div className="condition-option_container">
                    {addContidionalList.map((item) => (
                        <button key={item.label} className="condition-option_item" onClick={() => { setIndicator({ ...indicator, addConditional: item.label }); setOpen("") }}>
                            <p className="condition-option_title">{item.label}</p>
                        </button>
                    ))}
                </div>
            )}
        </div>
    </React.Fragment>
    )
}

export default MACD




