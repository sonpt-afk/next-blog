import { client } from '@/app/(sanity)/client';
import { ClockIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react'

async function getPostById(id) {
    const result = await client.fetch(`*[_type == 'post' && _id == $id] {
        ...,
        mainImage {
            asset-> {
                url
            }
        }
    }`, { id })

    return result?.[0] || {}
}

export default async function PostDetail(route) {
    const postId = route?.params?.slug?.[0]
    const post = await getPostById(postId)
    console.log(post);
    return (
        <div className='container max-w-screen-lg mx-auto'>
            <div className=' max-w-screen-md mx-auto'>
                <h1 className='text-center text-3xl font-semibold'>
                    {post.title}
                </h1>
                <div className='flex gap-2 justify-center mt-5'>
                    <ClockIcon className='w-[15px] h-[15px] text-gray-500' /><span className='text-xs text-gray-500'> {dayjs(post.publishedAt).format('HH:mm:ss DD/MM/YYYY')}</span>
                </div>
            </div>
            <div className='relative w-full h-[500px] object-cover m-10 rounded-md overflow-hidden'>
                <Image fill src={post.mainImage?.asset?.url} />
            </div>
            <div className='flex justify-center'>
                <p className='max-w-screen-md mx-16 p-10'>
                    {
                        post.description
                    }
                </p>
            </div>
        </div>
    )
}
