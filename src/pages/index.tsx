import type { NextPage } from 'next'
import Head from 'next/head'
import CardBack from '../components/CardBack'
import useQuery from '../utils/fetch'
type CardBack = {
  description: string
  cardBackId: string
  name: string
  howToGet?: string
  img: string
}
const Home: NextPage = () => {
  const { data, error, isLoading } = useQuery(
    'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks'
  )

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='grid grid-cols-5 gap-2'>
          {data?.data?.map((cardBack: CardBack) => (
            <CardBack
              description={cardBack.description}
              key={cardBack.cardBackId}
              cardBackId={cardBack?.cardBackId}
              name={cardBack.name}
              howToGet={cardBack.howToGet}
              img={cardBack.img}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home

// cardBackId: "10"
// name: "Hallow's End"
// description: "The Hallow's End candy bucket! Or the Headless Horseman's spare head! Stick your hand in and find out."
// source: "1"
// howToGet: "Acquired from achieving Rank 20 in Ranked Play, October 2014 or when available in the shop."
// enabled: true
// img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cc890a92992d0968da327bb0b8b372f408481c8ed26d5968ec252c7ef27ee64d.png"
// imgAnimated: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cc890a92992d0968da327bb0b8b372f408481c8ed26d5968ec252c7ef27ee64d.png"
// sortCategory: "5"
// sortOrder: "0"
// locale: "enUS"
