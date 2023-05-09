import { Box, MenuItem, TextField } from "@mui/material";
import { DropdownButton,Dropdown } from "react-bootstrap";

function SMSelect(props) {

    const { options, label, defaultValue, helperText, className, action } = props

    return (

        <DropdownButton id="dropdown-basic-button" title={label} variant="light">
          {
                    options && Array.isArray(options) && options.length > 0 ?
                        options.map((option, index) => (
                            <Dropdown.Item key={index} onClick={() => { action(option.value) }} >
                                {option.label}
                            </Dropdown.Item>
                        )) : null
                }
        </DropdownButton>

        // <Box

        //     component="form"
        //     sx={{
        //         '& .MuiTextField-root': { m: 1, width: '20ch' },
        //     }}
        //     noValidate
        //     autoComplete="off"
        // >

        //     <TextField
        //         className={className}
        //         id="outlined-select-currency"
        //         select
        //         label={label}
        //         defaultValue={defaultValue}
        //         helperText={helperText}

        //     >
        //         {
        //             options && Array.isArray(options) && options.length > 0 ?
        //                 options.map((option, index) => (
        //                     <MenuItem key={index} onClick={() => { action(option.value) }} >
        //                         {option.label}
        //                     </MenuItem>
        //                 )) : null
        //         }

        //     </TextField>
        // </Box>
    )

}

export default SMSelect;