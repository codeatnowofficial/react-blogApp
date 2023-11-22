
'use client';

import { Footer } from 'flowbite-react';

export default function Foot() {
  return (
    <Footer container className='fixed bottom-0'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <h1 className='text-xl font-medium'><span className='text-violet-700'>Blog</span>App</h1>
          <Footer.Copyright href="https://www.codeatnow.com" by="CodeAtNow" year={2022} />
        </div>
      </div>
    </Footer>
  );
}
