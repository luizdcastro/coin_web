import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getMe } from '../../redux/actions/UserActions'

import './styles.css'

const AccountSettings = ({ disptachGetMe, getme }) => {   

    useEffect(() => disptachGetMe(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <div>
          
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    disptachGetMe: () => dispatch(getMe()),
});

const mapStateToProps = (state) => ({
    getme: state.getme,

});

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);