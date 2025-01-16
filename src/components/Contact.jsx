import React, { useState } from 'react';
import linkedin from '../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmail = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-doubleze1982@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0D%0AFrom: ${name} (${email})`;
    window.location.href = mailtoLink;
  };

  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
            <p className='mb-4 text-white/85'>
              I&apos;m always open to new opportunities and collaboration. Feel free to reach out!
            </p>
            <div className='flex space-x-4'>
              <a 
                href="https://www.linkedin.com/in/zelalem-zeleke/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-foreground/60 hover:text-foreground/80'
              >
                <img src={linkedin} alt="LinkedIn" className='h-6 w-6' />
              </a>
            </div>
            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]' />
          </div>
          <form 
            className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'
            onSubmit={handleEmail}
          >
            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
            <div className='mb-4'>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
              <input
                type="text"
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Full Name'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
              <input
                type="email"
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Enter Your Message'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </div>
            <button type='submit' className='bg-red-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;