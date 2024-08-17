import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h4 className="font-bold">Abstract</h4>
          <ul>
            <li>
              <a href="#">Branches</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Resources</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Release Notes</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Community</h4>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Dribbble</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
          </ul>
          <div className="mt-4">
            <p>© Copyright 2022 Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
