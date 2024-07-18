
import React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

function InputSearch() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-segment"
                    type={'text'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle Segment visibility"
                                edge="end"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Segment"
                    sx={{
                        ".MuiOutlinedInput-input": {
                            padding: '9px 14px'
                        }
                    }}
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={'text'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                {/* <SearchIcon /> */}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Select hierarchy"
                    sx={{
                        ".MuiOutlinedInput-input": {
                            padding: '9px 14px'
                        }
                    }}
                />
            </FormControl>
            <Typography>Clear Selection</Typography>
        </div>
    )
}

export default InputSearch