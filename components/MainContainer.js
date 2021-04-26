import React from 'react';
import { connect } from 'react-redux';
import { count, refresh, addList, removeList } from './../actions/creators';
import { MainContent } from './MainContent';

const MainContainer = ({ state, count, refresh, addList, removeList }) => {
    return (
        <MainContent
            state={state}
            count={count}
            refresh={refresh}
            addList={addList}
            removeList={removeList}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        count: () => dispatch(count()),
        refresh: (value) => dispatch(refresh(value)),
        addList: (data) => dispatch(addList(data)),
        removeList: () => dispatch(removeList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);