import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import * as GoIcons from 'react-icons/go'
import TemplateBot from '../../components/TemplateBot'
import { getAllTemplates } from '../../redux/actions/TemplateActions'
import Modal from '@material-ui/core/Modal'
import { useHistory } from "react-router-dom"

import './styles.css'

const TemplatesPage = ({ dispatchGetTemplates, template, getme }) => {
    const [open, setOpen] = useState(false)
    let history = useHistory()

    useEffect(() => dispatchGetTemplates(),
        // eslint-disable-next-line react-hooks/exhaustive-deps 
        [])

    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") {
            setOpen(false)
        }
    }

    const handleTemplates = (id) => {
        if (!!getme.stripe.subscription.active === false) {
            setOpen(true)
        } else {
            history.push(`/template/${id}`)
        }
    }

    return (
        <div className="templates-page">
            <Modal open={open}>
                <div className="templates-page_inactive" onClick={handleOutsideClick} id="modal">
                    <div className="templates-page_inactive-modal">
                        <div>
                            <p className="templates-modal_title">Hey {getme?.name.split(" ")[0].slice(0, 12)}!</p>
                            <p className="templates-modal_text">Templates are avaliable to subscribers only.</p>
                            <p className="templates-modal_text">Upgrade your plan to unlock all trading features.</p>
                            <div className="templates-modal_container-button">
                                <Link className="templates-update_button" to="/settings-pricing">Upgrade Now</Link>
                            </div>
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
                <div className="templates-list-header">
                    <p className="templates_col_name">Name</p>
                    <p className="templates_col_name" style={{ flex: 2 }}>Summary</p>
                    <p className="templates_col_name">Settings</p>
                    <p className="templates_col_name" style={{ marginRight: 20, textAlign: 'right' }}>Quick Start</p>
                </div>
                {template?.length >= 1 ?
                    <React.Fragment>
                        {template.map((item) => (
                            <div key={item.id}>
                                <TemplateBot onClick={() => handleTemplates(item.id)} name={item.name} description={item.description} config={item.config} />
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