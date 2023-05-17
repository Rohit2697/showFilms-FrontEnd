import React from 'react'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function SearchBox({ films }) {

    return (

        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={films}
            sx={{ width: 300 }}
            getOptionLabel={(option) => option.title}
            renderOption={(props, option) => {
                return (
                    <li {...props} key={option.id}>
                        {option.title}
                    </li>
                );
            }}
            renderInput={(params) => <TextField {...params} label="Movie" size="small" />}

        />
    )
}
