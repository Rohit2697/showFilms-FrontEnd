import React from 'react'
import PaginateItems from '../Paginate/PaginateItems'
export default function Footer({films}) {
  return (
    // <!-- Remove the container if you want to extend the Footer to full width. -->
    <>

<div className=" my-5">
  <footer className="text-center bg-success text-lg-start fixed-bottom">
  
    <div className="container d-flex justify-content-center py-5">
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
        <i className="fab fa-facebook-f"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
        <i className="fab fa-youtube"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
        <i className="fab fa-instagram"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" >
        <i className="fab fa-twitter"></i>
      </button>
    </div>

    {/* <!-- Copyright --> */}
    <div className="text-center text-white p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a> 
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  
</div>
</>
// <!-- End of .container -->
  )
}
