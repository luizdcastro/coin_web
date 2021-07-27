import React, {useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const Stochastic = ({ indicator, setIndicator, setNextIndicator }) => {

    const addContidionalList = [
        { value: "and", label: "AND" },
        { value: "or", label: "OR" },
        { value: "final", label: "Final" }
    ]
    
    const contidionalList = [
        { value: ">", label: "Greater than" },
        { value: "<", label: "Less than" },
    ] 

    useEffect(() => {
        if (indicator.addConditional === "final") {
            setNextIndicator({})
        }
    }, [indicator, setNextIndicator])

    return (        
        <div>
            <TextField
                select
                id="select"
                label="Conditional"
                variant="outlined"
                value={indicator?.conditional || ""}
                onChange={(e) => setIndicator({ ...indicator, conditional: e.target.value })}
                style={{ width: 150, marginRight: 20 }}
                InputLabelProps={{ style: { fontSize: 14 } }}
            >
                {contidionalList.map((option) => (
                    <MenuItem key={option.value} value={option.value} style={{ fontSize: 14 }}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                label="Value"
                id="select"
                variant="outlined"
                value={indicator?.value || ""}
                onChange={(e) => setIndicator({ ...indicator, value: e.target.value })}
                style={{ width: 150, marginRight: 20 }}
                InputLabelProps={{ style: { fontSize: 14 } }}
            >
            </TextField>
            <TextField
                select
                id="select"
                label="Add Conditional"
                variant="outlined"
                value={indicator?.addConditional || ""}
                onChange={(e) => setIndicator({ ...indicator, addConditional: e.target.value })}
                style={{ width: 150 }}
                InputLabelProps={{ style: { fontSize: 14 } }}
            >
                {addContidionalList.map((option) => (
                    <MenuItem key={option.value} value={option.value} style={{ fontSize: 14 }}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}

export default Stochastic





