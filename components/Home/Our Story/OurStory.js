import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"

import "../Our Story/our-story.scss"

function OurStory({ title, btnText, btnLink }) {
  return (
    <>
      <section id="ourstory">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>{title}</h2>
              <hr />
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

export default OurStory
