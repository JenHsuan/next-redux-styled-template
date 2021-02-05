import React, { useEffect } from 'react';

import {
    useSelector,
    useDispatch
} from "react-redux";

import {
    getMockedUsers,
    getMockedData
} from "./actions/action";

import {
    selectMockedUsers,
    selectMockedData
} from "./states/states";

import {
    TemplateStyle,
} from './styles/Style';

const ReduxTester = () => {
    const dispatch = useDispatch();
    const mockedData = useSelector(selectMockedData);
    const mockedUsers = useSelector(selectMockedUsers);
    useEffect(() => {
        dispatch(getMockedData());
        dispatch(getMockedUsers());
    },[]);

    return (
        <TemplateStyle variant='main'>
            {mockedData}
        </TemplateStyle>
    )
}

export default ReduxTester
