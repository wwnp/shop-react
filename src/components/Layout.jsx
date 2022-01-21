import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom';
export const Layout = props => {
  return (
    <div className="wrapper">
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  )
}