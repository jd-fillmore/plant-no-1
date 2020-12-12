import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"
import img from "../../../src/img/vegan-restaurant-niagara-on-the-lake.png"

import "../Intro/intro.scss"

function Intro({ imgAlt, title, description, btnText, btnLink }) {
  return (
    <>
      <section id="intro">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <img src={img} alt={imgAlt} />
              <h4>{title}</h4>
              <hr />
              <p>{description}</p>
              <Link href={btnLink}>
                <Button>
                  <a>{btnText}</a>
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Intro
