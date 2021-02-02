import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/Hero"
import InnerContent from "../../components/innerContent/innerContent"
import Footer from "../../components/Footer/footer"

import "../scss/image-gallery.scss"

import image1 from "../img/gallery/1.jpg"
import image2 from "../img/gallery/2.jpg"
import image3 from "../img/gallery/3.jpg"
import image4 from "../img/gallery/4.jpg"
import image5 from "../img/gallery/5.jpg"
import image6 from "../img/gallery/6.jpg"
import image7 from "../img/gallery/7.jpg"
import image8 from "../img/gallery/8.jpg"
import image9 from "../img/gallery/9.jpg"
import image10 from "../img/gallery/10.jpg"
import image11 from "../img/gallery/11.jpg"
import image12 from "../img/gallery/12.jpg"
import image13 from "../img/gallery/13.jpg"
import image14 from "../img/gallery/14.jpg"
import image15 from "../img/gallery/15.jpg"
import image16 from "../img/gallery/16.jpg"
import image17 from "../img/gallery/17.jpg"
import image18 from "../img/gallery/18.jpg"
import image19 from "../img/gallery/19.jpg"
import image20 from "../img/gallery/20.jpg"
import image21 from "../img/gallery/21.jpg"
import image22 from "../img/gallery/22.jpg"
import image23 from "../img/gallery/23.jpg"
import image24 from "../img/gallery/24.jpg"
// import image25 from "../img/gallery/25.jpg"

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - Plant No. 1</title>
        <meta
          name="description"
          content="Take a look at some of our delicious offerings."
        />
      </Helmet>
      <Nav />
      <Hero
        title="Take a look at some of our delicious offerings."
        subtitle="Gallery"
      />
      <InnerContent>
        <section className="inner">
          <Container>
            {/* One */}
            <Row>
              <Col lg="12">
                <section className="gallery">
                  <Container>
                    <div className="flex">
                      <Row className="align-items-center">
                        <Col lg="6">
                          <img
                            className="img-fluid top-1"
                            src={image1}
                            alt={image1}
                          />
                        </Col>
                        <Col lg="6">
                          <img
                            className="img-fluid"
                            src={image2}
                            alt={image2}
                          />
                          <img
                            className="img-fluid"
                            src={image3}
                            alt={image3}
                          />
                        </Col>
                      </Row>
                    </div>
                    <Row className="btm align-items-center">
                      <Col lg="6">
                        <img
                          id="btm-1"
                          className="img-fluid"
                          src={image4}
                          alt={image4}
                        />
                        <img className="img-fluid" src={image5} alt={image5} />
                      </Col>
                      <Col lg="6">
                        <img className="img-fluid" src={image6} alt={image6} />
                      </Col>
                    </Row>
                    <div className="flex">
                      <Row className="align-items-center">
                        <Col lg="6">
                          <img
                            className="img-fluid top-1"
                            src={image7}
                            alt={image7}
                          />
                        </Col>
                        <Col lg="6">
                          <img
                            className="img-fluid"
                            src={image8}
                            alt={image8}
                          />
                          <img
                            className="img-fluid"
                            src={image9}
                            alt={image9}
                          />
                        </Col>
                      </Row>
                    </div>
                    <Row className="btm align-items-center">
                      <Col lg="6">
                        <img
                          id="btm-1"
                          className="img-fluid"
                          src={image10}
                          alt={image10}
                        />
                        <img
                          className="img-fluid"
                          src={image11}
                          alt={image11}
                        />
                      </Col>
                      <Col lg="6">
                        <img
                          className="img-fluid"
                          src={image12}
                          alt={image12}
                        />
                      </Col>
                    </Row>
                    <div className="flex">
                      <Row className="align-items-center">
                        <Col lg="6">
                          <img
                            className="img-fluid top-1"
                            src={image13}
                            alt={image13}
                          />
                        </Col>
                        <Col lg="6">
                          <img
                            className="img-fluid"
                            src={image14}
                            alt={image14}
                          />
                          <img
                            className="img-fluid"
                            src={image15}
                            alt={image15}
                          />
                        </Col>
                      </Row>
                    </div>
                    <Row className="btm align-items-center">
                      <Col lg="6">
                        <img
                          id="btm-1"
                          className="img-fluid"
                          src={image16}
                          alt={image16}
                        />
                        <img
                          className="img-fluid"
                          src={image17}
                          alt={image17}
                        />
                      </Col>
                      <Col lg="6">
                        <img
                          className="img-fluid"
                          src={image18}
                          alt={image18}
                        />
                      </Col>
                    </Row>
                    <div className="flex">
                      <Row className="align-items-center">
                        <Col lg="6">
                          <img
                            className="img-fluid top-1"
                            src={image19}
                            alt={image19}
                          />
                        </Col>
                        <Col lg="6">
                          <img
                            className="img-fluid"
                            src={image20}
                            alt={image20}
                          />
                          <img
                            className="img-fluid"
                            src={image21}
                            alt={image21}
                          />
                        </Col>
                      </Row>
                    </div>
                    <Row className="btm align-items-center">
                      <Col lg="6">
                        <img
                          id="btm-1"
                          className="img-fluid"
                          src={image22}
                          alt={image22}
                        />
                        <img
                          className="img-fluid"
                          src={image23}
                          alt={image23}
                        />
                      </Col>
                      <Col lg="6">
                        <img
                          className="img-fluid"
                          src={image24}
                          alt={image24}
                        />
                      </Col>
                    </Row>
                  </Container>
                </section>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <Footer />
    </>
  )
}

export default Gallery
