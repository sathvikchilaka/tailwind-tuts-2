import React from 'react'
import { CONTACT } from '../constants'

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-t from-black to-transparent pb-20">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tigher flex items-center justify-center gap-x-4">
            <span className="">{CONTACT.address}</span>
            <span className="">{CONTACT.phoneNo}</span>
            <a href={`mailto:${CONTACT.email}`} className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default ContactSection