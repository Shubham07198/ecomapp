import imageurlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'puwt4igo',
    dataset:'production',
    apiVersion:'1',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,


});

const builder = imageurlBuilder(client)

export const urlFor = (source)=> builder.image(source)
