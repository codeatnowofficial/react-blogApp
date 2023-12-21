import React from 'react'

const SkeletonLoading = ({Users}) => {
    let array = [1,2]
    return (
        <div className='pt-4 sm:pl-32 sm:pr-32 p-4'>
        {
            array?.map((arr,index) =>{
                return(
                    <div class="relative bg-white p-6 mb-8 overflow-hidden shadow hover:shadow-md rounded-lg">
                <div class="animate-pulse flex space-x-4">
                    <div class="flex-1 space-y-4 py-1">
                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div class="space-y-2">
                            <div class="h-4 bg-gray-200 rounded"></div>
                            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
                )
            })
        }    
        
        </div>
    )
}

export default SkeletonLoading