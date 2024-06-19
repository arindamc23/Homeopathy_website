import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, useLocation } from 'react-router-dom';
import {
  CSidebar,
  CNavTitle,
  CSidebarNav,
  CNavItem,
  CNavGroup,
  CBadge,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Tooltip as ReactTooltip } from "react-tooltip";

/*--------datereange----------*/
import { addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, subWeeks, subMonths } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DashboardHeader = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const location = useLocation();
  const [activeNavItem, setActiveNavItem] = useState('');

  // Function to handle click on nav items
  const handleNavItemClicked = (navItem) => {
    setActiveNavItem(navItem);
  };

  /*--------datereange----------*/
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleFilterClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const setDateRange = (startDate, endDate) => {
    setState([
      {
        startDate,
        endDate,
        key: 'selection'
      }
    ]);
    setShowDatePicker(false); // Hide the picker after selecting the date range
  };

  const predefinedRanges = [
    {
      label: 'Today',
      range: () => setDateRange(new Date(), new Date())
    },
    {
      label: 'Yesterday',
      range: () => setDateRange(addDays(new Date(), -1), addDays(new Date(), -1))
    },
    {
      label: 'This Week',
      range: () => setDateRange(startOfWeek(new Date()), endOfWeek(new Date()))
    },
    {
      label: 'Last Week',
      range: () => setDateRange(startOfWeek(subWeeks(new Date(), 1)), endOfWeek(subWeeks(new Date(), 1)))
    },
    {
      label: 'This Month',
      range: () => setDateRange(startOfMonth(new Date()), endOfMonth(new Date()))
    },
    {
      label: 'Last Month',
      range: () => setDateRange(startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1)))
    }
  ];
 

  return (
    <>
      <CSidebar visible={sidebarVisible} className="border-end">
        <Container fluid className='topheader_nav'>
          <Row className='align-items-center justify-content-between'>
            <Col lg={3} className='d-flex align-items-center justify-content-between logo-div-width'>
              <h6 className='mb-0'><b>LOGO</b></h6>
              <button onClick={toggleSidebar} className="btn">
                  <i className={sidebarVisible ? "ri-toggle-fill" : "ri-toggle-line"}></i>
              </button>
            </Col>
            <Col lg={3} className='d-flex align-items-center justify-content-end '>
              <InputGroup hasValidation className='search_fild'>
                  <InputGroup.Text>< i className="ri-search-line"></i></InputGroup.Text>
                  <Form.Control type="search" placeholder='Search...' />
              </InputGroup>
              <div className='datefilter_btn'>
                <button onClick={handleFilterClick} className='btn' data-tooltip-id="my-tooltip-1">
                  {showDatePicker ? < i className="ri-filter-off-line"></i> : < i className="ri-filter-line"></i>}
                </button>

                {showDatePicker && (
                  <div className="date-picker-dropdown">
                    <div className="predefined-ranges">
                      {predefinedRanges.map((range, index) => (
                        <button key={index} onClick={range.range} className="predefined-range-btn">
                          {range.label}
                        </button>
                      ))}
                    </div>
                    <DateRange
                      onChange={item => setState([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                    />
                  </div>
                )}
                <ReactTooltip
                    id="my-tooltip-1"
                    //place="top"
                    content="Date Filter"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <CSidebarNav>
        <CNavTitle className='mb-4'>
          <i className="ri-admin-line ri-lg"></i>
          <span>Join Dow <small>Dept Admin</small></span>
        </CNavTitle>
        <CNavItem
          component={NavLink}
          to="/"
          isActive={() => location.pathname === '/'}
          onClick={() => handleNavItemClicked('dashboard')}
          className={activeNavItem === 'dashboard' ? 'active' : ''}
        >
          <i className="ri-dashboard-line ri-lg"></i> Dashboard
        </CNavItem>
        <CNavItem
          component={NavLink}
          to="/patients"
          isActive={() => location.pathname.includes('/patients')}
          onClick={() => handleNavItemClicked('patients')}
          className={activeNavItem === 'patients' ? 'active' : ''}
        >
          <i className="ri-empathize-line ri-lg"></i> Patients <CBadge color="count ms-auto">3</CBadge>
        </CNavItem>
        <CNavGroup
          toggler={
            <>
              <i className="ri-customer-service-2-line ri-lg"></i> Appointments
            </>
          }
        >
          <CNavItem href="#"> Appointments List</CNavItem>
          <CNavItem href="#"> Book Appointment</CNavItem>
        </CNavGroup>
        {/* Add more menu items as needed */}
        <CNavItem
          href="#"
          className={activeNavItem === 'doctors' ? 'active' : ''}
          onClick={() => handleNavItemClicked('doctors')}
        >
          <i className="ri-stethoscope-line ri-lg"></i> Doctors <CBadge color="count ms-auto">5</CBadge>
        </CNavItem>
        <CNavGroup
          toggler={
            <>
              <i className="ri-microscope-line ri-lg"></i> Disease
            </>
          }
        >
          <CNavItem href="#"> All Disease</CNavItem>
          <CNavItem href="#"> Add Disease</CNavItem>
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <i className="ri-medicine-bottle-line ri-lg"></i> Products & Stock
            </>
          }
        >
          <CNavItem href="#"> All Products</CNavItem>
          <CNavItem href="#"> Add Products</CNavItem>
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <i className="ri-secure-payment-fill ri-lg"></i> Accounts
            </>
          }
        >
          <CNavItem href="#"> Income</CNavItem>
          <CNavItem href="#"> Payments</CNavItem>
          <CNavItem href="#"> Expenses</CNavItem>
        </CNavGroup>
        <CNavItem
          href="#"
          className={activeNavItem === 'delivery' ? 'active' : ''}
          onClick={() => handleNavItemClicked('delivery')}
        >
          <i className="ri-pin-distance-line ri-lg"></i> Delivery Status
        </CNavItem>
        <CNavItem href="#">
          <i className="ri-article-line ri-lg"></i> Invoices
        </CNavItem>
        <CNavItem href="#">
          <i className="ri-settings-2-line ri-lg"></i> Settings
        </CNavItem>
        <CNavItem href="/login">
          <i className="ri-logout-box-line ri-lg"></i> Logout
        </CNavItem>
      </CSidebarNav>
      </CSidebar>
    </>
  );
};

export default DashboardHeader;
