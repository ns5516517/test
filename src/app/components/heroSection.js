'use client'
import Image from "next/image"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import heroImg from '../../../public/images/hero_img.png'
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"

export default function HeroSection() {
  return (
    <>
        <div className="hero_section">

            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="hero_section_inner">
                            <Row>
                                <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
                                    <h3 className="heading">
                                        Meet your <br/> <div className="other">favorite</div> new (old) marketing channel .
                                    </h3>
                                    <p className="para">
                                        Remarkable results. Easier than email. Postcard marketing reinvented for modern ecommerce.
                                    </p>
                                    <div className="rating_area">
                                        <div className="try_btn">
                                            <Link href={"/"} title="..." className="try_link" >
                                                Try it Risk-free
                                            </Link>
                                        </div>
                                        <div className="rating_icons_outer">
                                            <div className="rating_icons">

                                                {
                                                    [...Array(5)].map((_,k)=>{
                                                        return <div className="star_icon" key={k}>
                                                            <FontAwesomeIcon icon={faStar} />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                            <p>5.0 Shopify Rating</p>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="hero_img">
                <Image src={heroImg} width={650} height={650} alt="..." title="..."/>
            </div>
        </div>
    </>
  )
}
