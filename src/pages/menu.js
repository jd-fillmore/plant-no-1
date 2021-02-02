import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerContent from "../../components/innerContent/innerContent"
import Footer from "../../components/Footer/footer"
import Hero from "../../components/Home/Hero/Hero"
import imgMeal from "../img/daily-grub-menu.jpg"
import imgDessert from "../img/daily-desserts-menu.jpg"
import imgCatering from "../img/catering-menu.jpg"
import desertMenu from "../img/desert-menu.pdf"
import grubMenu from "../img/grub-menu.pdf"
import cateringMenu from "../img/catering-menu.pdf"
import "../scss/menu.scss"

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu - Plant No. 1</title>
        <meta
          name="description"
          content="We use the best ingredients we can find, void of anything artificial, hydrogenated or genetically modified."
        />
      </Helmet>
      <Nav />
      <Hero
        title="We use the best ingredients we can find, void of anything artificial, hydrogenated or genetically modified."
        subtitle="Menu"
      />
      <InnerContent>
        <section className="menu">
          <Container>
            {/* One */}
            <Row>
              <Col lg="4">
                <img
                  className="img-fluid"
                  src={imgDessert}
                  alt="Daily Grub Meal Menu"
                />
                <h4>Daily Grub Meal Menu</h4>
                <a href={grubMenu} target="_blank" rel="noreferrer">
                  <Button>View Menu</Button>
                </a>
              </Col>
              <Col lg="4">
                <img
                  className="img-fluid"
                  src={imgMeal}
                  alt="Daily Grub Meal Menu"
                />
                <h4>Daily Grub Dessert Menu</h4>
                <a href={desertMenu} target="_blank" rel="noreferrer">
                  <Button>View Menu</Button>
                </a>
              </Col>
              <Col lg="4">
                <img
                  className="img-fluid"
                  src={imgCatering}
                  alt="Daily Grub Meal Menu"
                />
                <h4>Catering Menu</h4>
                <a href={cateringMenu} target="_blank" rel="noreferrer">
                  <Button>View Menu</Button>
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <Footer />
    </>
  )
}

export default Menu
