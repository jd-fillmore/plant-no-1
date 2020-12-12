import React from "react"
import { Container, Row, Col, Button } from "reactstrap"

import "../Catering/catering.scss"

function Catering({ title, description, btnText, btnLink }) {
  return (
    <>
      <section id="catering">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>{title}</h2>
              <hr />
              <p>{description}</p>
              <a href={btnLink} target="_blank">
                <Button>{btnText}</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Catering
