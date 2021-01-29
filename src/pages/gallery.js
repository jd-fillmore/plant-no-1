import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/Hero"
import InnerContent from "../../components/innerContent/innerContent"
import Footer from "../../components/Footer/footer"

import ImageGallery from "react-image-gallery"
import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss"
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
import image25 from "../img/gallery/25.jpg"

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
  {
    original: image4,
    thumbnail: image4,
  },
  {
    original: image5,
    thumbnail: image5,
  },
  {
    original: image6,
    thumbnail: image6,
  },
  {
    original: image7,
    thumbnail: image7,
  },
  {
    original: image8,
    thumbnail: image8,
  },
  {
    original: image9,
    thumbnail: image9,
  },
  {
    original: image10,
    thumbnail: image10,
  },
  {
    original: image11,
    thumbnail: image11,
  },
  {
    original: image12,
    thumbnail: image12,
  },
  {
    original: image13,
    thumbnail: image13,
  },
  {
    original: image14,
    thumbnail: image14,
  },
  {
    original: image15,
    thumbnail: image15,
  },
  {
    original: image16,
    thumbnail: image16,
  },
  {
    original: image17,
    thumbnail: image17,
  },
  {
    original: image18,
    thumbnail: image18,
  },
  {
    original: image19,
    thumbnail: image19,
  },
  {
    original: image20,
    thumbnail: image20,
  },
  {
    original: image21,
    thumbnail: image21,
  },
  {
    original: image22,
    thumbnail: image22,
  },
  {
    original: image23,
    thumbnail: image23,
  },
  {
    original: image24,
    thumbnail: image24,
  },
  {
    original: image25,
    thumbnail: image25,
  },
]

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
                <ImageGallery items={images} />
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
