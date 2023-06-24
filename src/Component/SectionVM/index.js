import React from 'react'
import { Container } from 'react-bootstrap'
import './Vm.css'

const SectionVM = () => {
  return (
    <div className="bg-navy py-80">
        <Container>
            <div className='row vm-wrap'>
                <div className='col-md vm-cont'>
                    <h1>Vision</h1>
                    <p>Memberikan layanan intergrated marketing communications yang prima dengan konsep layanan one stop service dalam satu atap</p>
                </div>
                <div className='col-md vm-cont'>
                    <h1>Misson</h1>
                    <p>Assist manufactures/brands in any marketing communication program. Providing more value in every service.</p>
                </div>
                <div className='col-md vm-cont mt-vm'>
                    <p>Being the best solution for manufactures/brands in meeting all their marketing communication needs. Become a trusted professional partner by prioritizing excellent service and customer satisfaction</p>
                </div>
            </div>
        </Container>
    </div>
  )
}
export default SectionVM;