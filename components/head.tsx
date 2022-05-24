import Head from "next/head"

const head = (props: any) => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width" />
    </Head>
  )
}

export default head