import Hero from '../components/Hero'
import { AboutSection } from '../components/AboutSection'
import { CustomerSection } from '../components/CustomerSection'

const NOTION_BLOG_ID = '49fb82b390cf4451b377110dcc80d6ff'

export const getCopyWritingData = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export async function getStaticProps() {
  const datas = await getCopyWritingData()

  return {
    props: {datas},
    revalidate: 3600,
  };
}

const Index = (props) => {
  const {datas: [data]} = props
  console.log("cp : ", data.profile)
  return (
    <>
      <Hero title={data.title} desc={data.desc} />
      <AboutSection companyProfile={data.profile} />
      <CustomerSection />
    </>
  )
}

export default Index
