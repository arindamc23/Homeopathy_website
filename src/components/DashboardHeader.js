import React from 'react';
import 'remixicon/fonts/remixicon.css'
import {
  CSidebar,
  CSidebarHeader,
  CNavTitle,
  CSidebarBrand,
  CSidebarNav,
  CNavItem,
  CNavGroup,
  CBadge,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

const DashboardHeader = () => {
  return (
    <CSidebar className="border-end">
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>Logo</CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle className='mb-4'>
          <i className="ri-admin-line ri-lg"></i><span>Join Dow <small>Dept Admin</small></span>
        </CNavTitle>
        <CNavItem href="#"><i className="ri-dashboard-line ri-lg"></i> Dashboard</CNavItem>
        <CNavItem href="#"><i className="ri-empathize-line ri-lg"></i> Patients <CBadge color="count ms-auto">3</CBadge></CNavItem>
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
        <CNavItem href="#"><i className="ri-stethoscope-line ri-lg"></i> Doctors <CBadge color="count ms-auto">5</CBadge></CNavItem>
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
          <CNavItem href="#"> Add Products</CNavItem>
          <CNavItem href="#"> Add Stock</CNavItem>
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
        <CNavItem href="#"><i className="ri-pin-distance-line ri-lg"></i> Delivery Status</CNavItem>
        <CNavItem href="#"><i className="ri-article-line ri-lg"></i>  Invoices</CNavItem>
        <CNavItem href="#"><i className="ri-settings-2-line ri-lg"></i> Settings</CNavItem>
        <CNavItem href="#"><i className="ri-logout-box-line ri-lg"></i> Logout</CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default DashboardHeader;