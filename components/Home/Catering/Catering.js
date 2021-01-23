import React from "react"
import { Link } from "gatsby"
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
              <Link to={btnLink}>
                <Button>{btnText}</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Catering
