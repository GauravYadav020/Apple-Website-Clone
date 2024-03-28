import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs ">
            If you have any suggestions for improvement ping me up on : {' '}
            <span className="underline text-blue hover:cursor-pointer">
            <a href="https://www.linkedin.com/in/gauravyadav6817">LinkedIN {' '}</a>
            </span>
            or {' '}
            <span className="underline text-blue hover:cursor-pointer">
            <a href="https://github.com/GauravYadav020">Github</a>
            </span>{' '}
            
          </p>
          <p className="font-semibold text-gray text-xs">
            Contact: +91-6263357935
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Website created by Gaurav Yadav</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer