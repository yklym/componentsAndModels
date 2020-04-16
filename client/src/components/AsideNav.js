import React from 'react'

export const AsideNav = ({ navToggled, toggleNav }) => {
    return (
        <ul className={'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ' + (navToggled ? 'toggled' : '')} id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-file-signature"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Pulse</div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-home"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <hr className="sidebar-divider" />

            {/* <div className="sidebar-heading">
                Interface
            </div> */}

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-project-diagram"></i>
                    <span>My projects</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Projects</h6>
                        <a className="collapse-item" href="buttons.html">Proj 1</a>
                        <a className="collapse-item" href="cards.html">Proj 2</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-file-alt"></i>
                    <span>My documents</span>
                </a>
            </li>

            <hr className="sidebar-divider" />


            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-info-circle"></i>
                    <span>Help</span></a>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={toggleNav}></button>
            </div>

        </ul>
    )
}