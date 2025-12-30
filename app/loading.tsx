import { Spinner } from '@/components/ui/spinner';
import React from 'react';

const Loading = () => {
    return (
        <div className='w-full h-[calc(100vh-6rem)]
 flex items-center justify-center'>
            <Spinner className='size-12'/>
        </div>
    );
};

export default Loading;