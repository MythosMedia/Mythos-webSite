import React from 'react'

import SEO from '../common/SEO'
import ColorSwitcher from '../elements/switcher/ColorSwitcher'
import HeaderTwo from '../common/header/HeaderTwo'
import FooterOne from '../common/footer/FooterOne'
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne'
import FormOne from '../component/contact/FormOne'

const DataDel = () => {
    const styles = {
        padding:'100px 80px 100px'
    }
  return (
    <>
       <SEO title="Data Deletion Request"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderTwo />
            <BreadCrumbOne 
                title="Data Deletion Request"
                page="Data Deletion Request"
                />
                <div style={styles} className="mt-5 flex-column d-flex justify-content-center">
                    <h3>Effective as of 2 Septembre 2024</h3>
                    <p>Thank you for using Mythos Media! We understand that sometimes our users would like to delete existing data from our database. We would be more than happy to work with you in removing the required data from our database. Please provide your information below and we will be in touch as soon as possible to confirm your request.</p>
                <FormOne/>  
                <h3 className='mt-5'>Contact Us</h3>
                <p>If, for whatever reason, you have any questions, comments, complaints or compliments about how our services or this data deletion policy, please contact our email support. Please also use this email address if you believe you have received a marketing communication from us that you feel makes use of your information in an unauthorized or unwelcome way.  Please contact us using the information below:</p>
                <ul>
                    <li>
                    <p>By email: create@mythosmedia.io</p>
                    </li>
                    <li>
                    <p>By phone number: (604) 227-6898</p>
                    </li>
                </ul>
                </div>
            <FooterOne parentClass="" />
        </main>
        </>
  )
}

export default DataDel