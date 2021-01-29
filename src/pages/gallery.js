import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/Hero"
import InnerContent from "../../components/innerContent/innerContent"
import Footer from "../../components/Footer/footer"

import ImageGallery from "react-image-gallery"
import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss"

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
]

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - Plant No. 1</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <Hero
        title="Take a look at some of our declicious offerings."
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
