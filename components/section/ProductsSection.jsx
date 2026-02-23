import React from 'react'
import Products from '../product/Products'
import SectionHeading from '../SectionHeading'
import Container from '../layout/Container'

export default function ProductsSection() {
  return (
    <section className="mt-fluid-90 mb-fluid-128">
      <Container>
        <SectionHeading title=" Don't miss out new drops" buttonText="Shop New Drops" />
        <Products />
      </Container>
    </section>
  )
}
