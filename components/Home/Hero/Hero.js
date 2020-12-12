import React from "react"

import { Container, Row, Col } from "reactstrap"

import "../Hero/hero.scss"

function Hero({ title, subtitle }) {
  return (
    <>
      <section id="hero">
        <div id="box">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Hero
