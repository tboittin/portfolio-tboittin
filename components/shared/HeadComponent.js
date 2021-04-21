import Head from 'next/head'

export const HeadComponent = ({ title, description, url, image, imageURL,imageWidth, imageHeight }) => {
  return (
    <>
      <title>{title ? title : 'Thomas Boittin Website'}</title>
      <meta property="og:locale" content="en_US" key="locale" />
      <meta
        property="og:locale:alternate"
        content="fr_FR"
        key="locale:alternate"
      />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:title" content={title ? title : 'Thomas Boittin Website'} key="title" />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:url" content={url} key="url" />
      <meta property="og:site_name" content="Thomas Boittin" key="site_name" />
      <meta property="og:image" content={image ? image : 'https://tboittin.vercel.app/images/shared-image.png'} key="image" />
      <meta property="og:image:secure_url" content={imageURL ? imageURL : 'https://tboittin.vercel.app/images/section-1.png'} key="imageURL" />
      <meta property="og:image:width" content={imageWidth ? imageWidth : 838} key="imageWidth" />
      <meta property="og:image:height" content={imageHeight ? imageHeight : 1364} key="imageHeight" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </>
  )
}
