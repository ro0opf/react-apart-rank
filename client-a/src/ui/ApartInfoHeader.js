import React from 'react';
import { Wrapper } from './ApartInfoHeader.css';
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function ApartInfoHeader() {
    let location = useLocation();
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });
    };

    return (
        <>
            <Wrapper>
                <div className="Apart">
                    <span className="Small">
                        전체 가격 랭킹 <span className="Blue">2,735,342</span>위 (상위 52%)
                    </span>
                    <span className="Big">
                        {location.state.name}
                    </span>
                </div>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">평형</InputLabel>
                    <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Age"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>27평</option>
                        <option value={20}>32평</option>
                        <option value={30}>40평</option>
                    </Select>
                </FormControl>
            </Wrapper>
        </>
    )
}

export default ApartInfoHeader;