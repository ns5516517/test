'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import img1 from '../../../public/images/div.png'
import img2 from '../../../public/images/div1.png'
import img3 from '../../../public/images/div2.png'
import img4 from '../../../public/images/div3.png'
import '../../../public/sass/pages/trusted_dtc.scss'




export default function DtcBrands() {
    const path = [ "/public/images/div.png",
        
        "/public/images/div2.png",
        "/public/images/div3.png",
        "/public/images/div4.png"
    ]
  return (
    <>
        <div className="dtc_brands_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="dtc_brands_inner">
                            <h3 className="heading">
                                Trusted by thousands of top DTC <div className="other">brands</div> .
                            </h3>
                            <Row>
                                <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6} >
                                   
                                    <div className='img_wrapper' >
                                        <Image src={img1} width={284} height={250} title='...' alt='...'/>
                                    </div>
                                
                                   
                                </Col>
                                <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6} >
                                    <div className='img_wrapper' >
                                        <Image src={img2} width={284} height={250} title='...' alt='...'/>
                                    </div>
                                </Col>
                                <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6} >
                                    <div className='img_wrapper' >
                                        <Image src={img3} width={284} height={250} title='...' alt='...'/>
                                    </div>
                                </Col>
                                <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6} >
                                    <div className='img_wrapper' >
                                        <Image src={img4} width={284} height={250} title='...' alt='...'/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>  
    </>
  )
}
