import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand" href="#">
        ERP
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              銷售系統
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              庫存系統
            </a>
          </li> */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              採購單
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link to={'/BuyAddPage'} className="dropdown-item" >新增採購單</Link>
              </li>
              <li>
                <Link to={'/BuySearchPage'} className="dropdown-item" >查詢採購單</Link>
              </li>
              <li>
                <Link to={'/BuyDetailPage'} className="dropdown-item" >採購單明細</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              進貨單
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link to={'/RestockAddPage'} className="dropdown-item" >新增進貨單</Link>
              </li>
              <li>
                <Link to={'/RestockSearchPage'} className="dropdown-item" >查詢進貨單</Link>
              </li>
              <li>
                <Link to={'/RestockDetailPage'} className="dropdown-item" >進貨單明細</Link>
              </li>
            </ul>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              會計系統
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              基本資料
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              系統設定
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
