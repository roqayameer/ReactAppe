import React from 'react'
import { Nav } from 'react-bootstrap';
export default function Header() {
  return (
    <div><Nav defaultActiveKey="/home" as="ul" className="mb-3"  >
      <a className='navbar-brand' harf="#">React Website</a>
    <Nav.Item as="li">
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-1">About</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-2">Services</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-2">Continer</Nav.Link>
    </Nav.Item>
  </Nav></div>
  )
}
