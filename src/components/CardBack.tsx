/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

const CardBack = ({
  cardBackId,
  name,
  howToGet,
  description,
  img
}: {
  cardBackId: string
  name: string
  howToGet?: string
  description: string
  img: string
}) => {
  console.log(img)
  return (
    <div
      className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800
      grid
      text-center
      m-12
      justify-center
    dark:border-gray-700'
    >
      <div className='mt-10'>
        {img && <Image src={img} width={300} height={300} alt='card back' />}
      </div>
      <div>
        <p className='mb-3 mt-4 font-serif font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
      <div>
        <p className=' font-serif font-normal text-gray-700 dark:text-gray-400'>
          {howToGet}
        </p>
      </div>
      <div>
        <p className='mb-2 pb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Classic
        </p>
      </div>
    </div>
  )
}

export default CardBack
//example data
// 0:{10 items
// "cardBackId":"0"
// "name":"Classic"
// "description":"The only card back you'll ever need."
// "source":"0"
// "enabled":true
// "img":"https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d4bc6338a669a5a417931c4537753a98cb584effab34a499bbd9c76cafc012c7.png"
// "imgAnimated":"https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d4bc6338a669a5a417931c4537753a98cb584effab34a499bbd9c76cafc012c7.png"
// "sortCategory":"1" // onemsiz
// "sortOrder":"1" // onemsiz
// "locale":"enUS" // onemsiz
// }
