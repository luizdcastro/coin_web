import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { getMe } from '../../redux/actions/UserActions'
import { logoutUser } from "../../redux/actions/AuthActions";
import { useLocation } from "react-router-dom";

import * as FiIcons from 'react-icons/fi'
import * as IoIcons from "react-icons/io5";
import './styles.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
        },
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'rgb(29, 29, 32)',
        border: 'none',
        paddingTop: 30,
        paddingBottom: 10,
        zIndex: 1
    },
}));

const VericalDrawer = ({ dispatchLogout, disptachGetMe, user, getme }) => {
    const { window } = "";
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("/strategies");
    const [open, setOpen] = useState(false);
    const location = useLocation()

    useEffect(() => disptachGetMe(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    useEffect(() => {
        setActiveMenu(location.pathname)
    }, [location.pathname, open])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <React.Fragment >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-betwen', height: '100%' }}>
                <div>
                    <div className='menu-item-avatar' onClick={() => setOpen(!open)}>
                        <div className="vertical-avatar">
                            <p className="vertical-avatar-name">{user?.name.slice(0, 1)}</p>
                        </div>
                        <p className="vertical-menu-title">{user?.name.split(" ")[0].slice(0, 12)}</p>
                        {!open ?
                            <FiIcons.FiChevronDown className="vertical-drop-icon" size={18} />
                            :
                            <FiIcons.FiX className="vertical-drop-icon" size={18} />
                        }
                    </div>
                    {open && (
                        <div className="expanded-vertical_menu">
                            <div className="expanded-vertical_menu-header">
                                <div>
                                    <div className="vertical-avatar">
                                        <p className="vertical-avatar-name">{user?.name.slice(0, 1)}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="expanded-vertical_menu-name">{user?.name}</p>
                                    <p className="expanded-vertical_menu-email">{user?.email}</p>
                                </div>
                            </div>
                            <div className="expanded-vertical_menu-footer">
                                <div className="expanded-vertical_item">
                                    <Link className="expanded-vertical_link" to="/settings-pricing" onClick={() => setOpen(false)}>Account settings</Link>
                                </div>
                                <div className="expanded-vertical_item">
                                    <Link className="expanded-vertical_link" to="#" onClick={() => setOpen(false)}>Support</Link>
                                </div>                               
                                <div className="expanded-vertical_item">
                                    <Link className="expanded-vertical_link" to="" onClick={() => dispatchLogout()}>Sign out</Link>
                                </div>
                            </div>
                        </div>)}
                </div>
                <ul style={{ paddingTop: 20 }}>
                    <li>
                        <Link
                            className={activeMenu === '/strategies' ? 'vertical-menu_item_active' : 'vertical-menu_item'}
                            to="/strategies">
                            <IoIcons.IoStatsChart size={23} />
                            <p className="vertical-menu_item-text">Strategies</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={activeMenu === '/create-bot' ? 'vertical-menu_item_active' : 'vertical-menu_item'}
                            to="/create-bot">
                            <IoIcons.IoLayers size={23} />
                            <p className="vertical-menu_item-text">Create Bot</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={activeMenu === '/exchanges' ? 'vertical-menu_item_active' : 'vertical-menu_item'}
                            to="/exchanges">
                            <IoIcons.IoShareSocialSharp size={23} />
                            <p className="vertical-menu_item-text">Exchanges</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={activeMenu === '/templates' ? 'vertical-menu_item_active' : 'vertical-menu_item'}
                            to="/templates">
                            <IoIcons.IoCopy size={23} />
                            <p className="vertical-menu_item-text">Templates</p>
                        </Link>
                    </li>
                </ul>
                <div className="vertical-menu_footer">
                    {!getme.stripe?.subscription?.active ?
                        <Link to="/settings-pricing" className="vertical-menu_upgrade">Upgrade Now</Link>
                        : null
                    }
                    <div className="vertical-menu_divider" />
                    <div>
                        <p style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginTop: 15, textAlign: 'center' }}>tradingrid <span style={{ fontSize: 14 }}>| BETA</span></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <div className="vertical-menu_bar">
                <div onClick={handleDrawerToggle} className="vertical-menu_button">
                    <FiIcons.FiMenu color="rgba(255,255,255,0.9)" size={23} />
                </div>
            </div>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        container={container}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

VericalDrawer.propTypes = {
    window: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    dispatchLogout: () => dispatch(logoutUser()),
    disptachGetMe: () => dispatch(getMe()),
});


const mapStateToProps = (state) => ({
    user: state.user,
    getme: state.getme
});

export default connect(mapStateToProps, mapDispatchToProps)(VericalDrawer);