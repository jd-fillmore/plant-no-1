import React from "react"
import { Container, Row, Col } from "reactstrap"
import top1 from "../../../src/img/top-1.jpg"
import top2 from "../../../src/img/top-2.jpg"
import top3 from "../../../src/img/top-3.jpg"
import btm1 from "../../../src/img/btm-1.jpg"
import btm2 from "../../../src/img/btm-2.jpg"
import btm3 from "../../../src/img/btm-3.jpg"

import "../Pics/pics.scss"

function Pics() {
  return (
    <>
      <section id="pics">
        <Container>
          <div className="flex">
            <Row className="align-items-center">
              <Col lg="6">
                <img className="img-fluid top-1" src={top1} alt="Top 1" />
              </Col>
              <Col lg="6">
                <img className="img-fluid" src={top2} alt="Top 2" />
                <img className="img-fluid" src={top3} alt="Top 3" />
              </Col>
            </Row>
          </div>
          <Row className="btm align-items-center">
            <Col lg="6">
              <img id="btm-1" className="img-fluid" src={btm1} alt="btm 1" />
              <img className="img-fluid" src={btm2} alt="btm 2" />
            </Col>
            <Col lg="6">
              <img className="img-fluid" src={btm3} alt="btm 3" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Pics
