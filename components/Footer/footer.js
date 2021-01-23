import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../Footer/footer.scss"

const links = [
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="3">
              <h6>Hours</h6>
              <ul>
                <li>Monday - Friday: 9-5</li>
                <li>Saturday - Sunday: 8-4</li>
              </ul>
            </Col>
            <Col lg="3">
              <h6>Location</h6>
              <p>Address goes here</p>
            </Col>
            <Col lg="6">
              <ul className="d-flex justify-content-between">
                {links.map(link => (
                  <li>
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          {/* <Row>
            <Col lg="12">
              <p>
                <a
                  href="https://infused.agency"
                  target="_blank"
                  rel="noreferrer"
                >
                  Niagara web design
                </a>{" "}
                by Infused Agency
              </p>
            </Col>
          </Row> */}
        </Container>
      </section>
    </>
  )
}

export default Footer
