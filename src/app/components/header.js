import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import logo from '../../../public/images/logo.png';
import '../../../public/sass/pages/header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  return (
    <>
        <div className="header_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}> 
                        <div className="header_inner">
                            <div className="left_area">
                                <div className="logo_wrapper">
                                    <Link className="logo" href={".."} title="logo"  >
                                        <Image src={logo} width={162} height={30} alt="..." title="..."/>
                                    </Link>
                                </div>
                            </div>
                            <div className="right_area">
                                <nav className="nav_links">
                                    <ul className="nav_links_inner">
                                        <li className="link">
                                            <div className="link_inner">
                                                <Link className="n_link" href={"/"} title="..." >Success stories</Link>
                                                <div className="n_icon">
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="link">
                                            <Link className="n_link" href={"/"} title="..." >Resources</Link>
                                        </li>
                                        <li className="link">
                                            <div className="link_inner">
                                                <Link className="n_link" href={"/"} title="..." >Company</Link>
                                                <div className="n_icon">
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="link">
                                                <Link className="n_link" href={"/"} title="..." >Pricing</Link>
                                        </li>
                                        
                                    </ul>
                                    <div className="button_area">
                                        <div className="nav_btn login">
                                            <Link className="auth_link" href={'/'}>Login</Link>
                                        </div>
                                        <div className="nav_btn signup">
                                            <Link className="auth_link" href={'/'}>Create free account</Link>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}
