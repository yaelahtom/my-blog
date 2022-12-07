import Head from "next/head";

const Meta = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="tutorial, life, philosophy"
      />
    </Head>
  )
}

export default Meta

Meta.defaultProps = {
  title: 'blogs',
}