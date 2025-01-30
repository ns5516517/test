import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import '../../../public/sass/pages/cards.scss'
export default function Cards () {
  const path = [ 
      {path:"/images/b1.png",
        heading: "Plug-and-play with your stack",
        para: "Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.",
        opid: "red"
      },
      {path:"/images/b2.png",
        heading: "Run campaigns on autopilot",
        para: "Ink profits while you sleep: Just set it and forget it.",
        opid: "blue"
      },
      {path:"/images/b3.png",
        heading: "Real-time ROI dashboard",
        para: "Track performance of every postcard by customer or discount code. Your CFO will love it.",
        opid: "purple"

      },
      {path:"/images/b4.png",
        heading: "Deliver WOW with *real* handwritten cards",
         para: "Our proprietary robots use real pens and ink for an unforgettable VIP touch.",
         opid: "blue"
      },
      {path:"/images/b5.png",
        heading: "Predictable pricing",
         para: "Unlike CPCs, postage rates don’t change based on competition or who you’re targeting.",
         opid: "red"
      },
      {path:"/images/b6.png",
        heading: "Complimentary concierge service",
        para: "DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices.",
        opid: "purple"
      },
      
    ]
  return (
    <>
        <div className="cards_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="cards_inner">
                            <h3 className="heading">
                                Everything your brand needs to <div className="other">make your brand unforgettable</div> 
                            </h3>
                            <div className='card_wrapper'>
                              
                                  {
                                    path.map((i,k)=>{
                                      return   <div className={`product_card ${  i?.opid == "red" ? "opac_pink" : i?.opiad == "purple" ? "opac_purple" : "opac_blue"} `} key={k} >
                                          <div className='card_img'>
                                            <Image src={i?.path} width={284} height={250} title='...' alt='...'/>
                                          </div>
                                          <div className='text_area'>
                                            <h4 className='card_heading'>
                                              {i?.heading}
                                            </h4>
                                            <p className='para'>
                                              {i?.para}
                                            </p>
                                          </div>
                                        </div>
                                      
                                  
                                    })
                                    
                                  }
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 
    </>
  )
}
