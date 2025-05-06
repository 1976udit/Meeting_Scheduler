import React from 'react'
import Image from 'next/image'
import { Button } from '../../../../components/ui/button';
import { Plus } from 'lucide-react';

const SideNavbar = () => {
  return (
    <div className="p-5 py-12">
      <div className='flex justify-center'>
        <Image src="/logo.svg" width={150} height={100} alt="_blank" />
      </div>
      <div>
        <Button className="mt-5 gap-2 w-full rounded-full"><Plus/>Create</Button>
      </div>
    </div>
  );
}

export default SideNavbar