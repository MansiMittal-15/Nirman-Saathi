import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = ({job}) => {
  return (
    <div className='p-5 rounded-md shadow-2xl shadow-purple-300 bg-white border border-gray-300 cursor-pointer'>
        <div>
        <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position}</Badge>
            <Badge className={'text-red-700 font-bold'} variant="ghost">{job?.jobType}</Badge>
            <Badge className={'text-purple-700 font-bold'} variant="ghost">{job?.salary}k</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards
