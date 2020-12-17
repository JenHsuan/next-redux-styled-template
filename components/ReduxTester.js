import React, { useEffect} from 'react';

import {
    useSelector,
    useDispatch
} from "react-redux";

import {
    getData
} from "./actions/action";

import {
    selectData 
} from "./states/states";

import {
    TemplateStyle,
} from './styles/Style';

const ReduxTester = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    useEffect(() => {
        dispatch(getData());
    },[]);

    return (
        <TemplateStyle variant='main'>
            {data}
        </TemplateStyle>
    )
}

export default ReduxTester
