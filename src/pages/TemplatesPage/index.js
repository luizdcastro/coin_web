import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import * as GoIcons from 'react-icons/go'
import TemplateBot from '../../components/TemplateBot'
import { getAllTemplates } from '../../redux/actions/TemplateActions'
import Modal from '@material-ui/core/Modal'
import { useHistory } from "react-router-dom";

import './styles.css'

const TemplatesPage = ({ dispatchGetTemplates, template, getme}) => {
    let history = useHistory()

    useEffect(() => dispatchGetTemplates(),
        // eslint-disable-next-line react-hooks/exhaustive-deps 
        [])

    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") {
            history.push("strategies")
        }
    }

    return (
        <div className="templates-page">
            <Modal open={getme.stripe.subscription.active ? false : true}>
                <div className="templates-page_inactive" onClick={handleOutsideClick} id="modal">
                    <div className="templates-page_inactive-modal">
                        <div>
                            <p>Templates are exclusive to subscribers.</p>
                            <p>Upgrade your plan to have access to all features.</p>
                            <Link className="update-payment-button" to="/settings-pricing">Get Started</Link>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="templates-container">
                <div className="templates-header">
                    <h2 className="templates-page-title">Templates</h2>
                    <Link className="add-bot-button" to="create-bot">
                        <GoIcons.GoPlus size={16} style={{ marginRight: 3 }} />
                        Custom Strategy
                    </Link>
                </div>
                <div className="strategies-list-header">
                    <p className="strategies_col_name">Name</p>
                    <p className="strategies_col_name" style={{ flex: 2 }}>Description</p>
                    <p className="strategies_col_name">Settings</p>
                    <p className="strategies_col_name"></p>
                </div>
                {template?.length >= 1 ?
                    <React.Fragment>
                        {template.map((item) => (
                            <div key={item.id}>
                                <TemplateBot to={`/template/${item.id}`} name={item.name} description={item.description} config={item.config} />
                            </div>
                        ))}
                    </React.Fragment>
                    : null
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    dispatchGetTemplates: () => dispatch(getAllTemplates()),
});

const mapStateToProps = (state) => ({
    template: state.template,
    getme: state.getme
});


export default connect(mapStateToProps, mapDispatchToProps)(TemplatesPage);