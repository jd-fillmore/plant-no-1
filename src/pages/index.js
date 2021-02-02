import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/Hero"
import Intro from "../../components/Home/Intro/Intro"
import PlantBasedFoods from "../../components/Home/Plant-Based Foods/PlantBasedFoods"
import Catering from "../../components/Home/Catering/Catering"
import Pics from "../../components/Home/Pics/Pics"
import OurStory from "../../components/Home/Our Story/OurStory"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"

import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/typography.scss"
import "../scss/general.scss"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Best Vegan Restaurant Niagara-on-the-Lake, St. Catharines | Plant No.
          1
        </title>
        <meta
          name="description"
          content="A vegan food factory serving Niagara, St. Catharines and Niagara-on-the-Lake. Made locally, in house, on our beautiful blue planet, by hard working people."
        />
      </Helmet>
      <Nav />
      <Hero
        title={[
          "A vegan food factory serving Niagara, St. Catharines and Niagara-on-the-Lake.",
          <br />,
          <br />,
          "Vegetables, grains, nuts and fruits - boring - not here, not ever.",
        ]}
        subtitle="Made locally, in house, on our beautiful blue planet, by hard
                working people."
      />
      {/* <Intro
        imgAlt="Vegan restaraunt in Niagara-on-the-Lake, Niagara Falls and St. Catharines"
        title="Vegan Food Factory"
        description="100% plant based foods without the use of artificial colours, flavours, gmo's, or hydrogenated fats but we love organic and synthetic chemical free fruits and vegetables."
        btnText="View Menu"
        btnLink="/menu"
      /> */}
      {/* <PlantBasedFoods title="All Plant-Based Foods" /> */}
      <Catering
        title="Interested in Catering?"
        description="We can prepare something special for any occasion. Our “creative director and founder” specializes in using botanicals, reductions, and infusions inspired by an ever expanding array of edible flowers in our greenroom. Check out our DAILY GRUB and CELEBRATION menus (and we have been known to be up for a challenge if you’re craving something in particular)."
        btnText="View Menu"
        btnLink="/menu"
      />
      <Pics />
      <OurStory
        title="Thoughtfully chosen ingredients."
        btnText="Our Story"
        btnLink="/about"
      />
      <Footer />
    </>
  )
}

export default Home
