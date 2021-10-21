import React from 'react'
import { Link } from 'react-router-dom'

export const PublicNavbar = () => (
  <nav>
    <img src={'/images/icons8-forum-64.png'} alt=""/>
    <section>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
    </section>
  </nav>
)

export const PrivateNavbar = () => (
  <nav>
  <img src={'images/icons8-forum-64.png'} alt=""/>
    <section>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
      <Link to="/listFavoritesQuestion">List Favorite Questions</Link>
    
    </section>
  </nav>
)
