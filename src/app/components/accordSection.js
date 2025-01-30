import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/pages/accord_sect.scss'

export default function AccordSection() {
  return (
    <>
        <div className="accord_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="accord_inner">
                            <h3 className='heading'>
                                Fast launch. Fast results. 
                            </h3>
                            <h4 className='heading sub_heading'>
                                Here's how.
                            </h4>
                            <div className='accord_area'>
                                <div className="accord_item">
                                    <div className='accord_num'>
                                        1
                                    </div>
                                    <div className="accord_text">
                                        <h5 className='title'>Segment</h5>
                                        <p>One-off announcements or automatically triggered flows. 
                                        Customers receive their personalized cards within a week.</p>
                                    </div>
                                </div>
                                <div className="accord_item">
                                    <div className='accord_num'>
                                        1
                                    </div>
                                    <div className="accord_text">
                                        <h5 className='title'>Segment</h5>
                                        <p>One-off announcements or automatically triggered flows. 
                                        Customers receive their personalized cards within a week.</p>
                                    </div>
                                </div>
                                <div className="accord_item">
                                    <div className='accord_num'>
                                        1
                                    </div>
                                    <div className="accord_text">
                                        <h5 className='title'>Segment</h5>
                                        <p>One-off announcements or automatically triggered flows. 
                                        Customers receive their personalized cards within a week.</p>
                                    </div>
                                </div>
                                <div className="accord_item">
                                    <div className='accord_num'>
                                        1
                                    </div>
                                    <div className="accord_text">
                                        <h5 className='title'>Segment</h5>
                                        <p>One-off announcements or automatically triggered flows. 
                                        Customers receive their personalized cards within a week.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}
