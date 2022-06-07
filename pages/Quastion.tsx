import type { NextPage } from 'next'
import Head from '../components/head'
import Load from '../components/load'
import fetcher from "../utils/fetcher";
import useSWR from 'swr'

const Index: NextPage = () => {
  const { data, error } = useSWR('/api/get?type=Quastions', fetcher)
  
  if (error) {
    return <>
      <Head title='GBSW | 캡스톤' />
      <Load />
    </>
  }
  if (!data) {
    return <>
      <Head title='GBSW | 캡스톤' />
      <Load />
    </>
  } else {
    return (
      <div>
        <Head title='GBSW | 캡스톤' />
        <div className='Home_Container'>
          <main className='Home_Main'>
            <h1 style={{ textAlign: 'center', margin: 0, lineHeight: '1.15', fontSize: '3rem', color: '#0070f3' }}>Future Farm</h1>
          </main>
          {Object.values(data.panelItems).map((Item: any) => (
            <div key={1} className="box2" onClick={() => window.location.href = Item.redirect}>
              <div className="image" style={{ backgroundImage: "url(" + Item.image + ")" }}>
                <div className="titleShadow">
                  <div className="textShadow">
                    <h1>{Item.name}</h1>
                    <p>{Item.description}</p>
                  </div>
                </div>
              </div>
              <br/>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: '60px'}}></div>
        <div className="footer">
          © {new Date().getFullYear()}. GBSWHS. 
          <span><a href="https://github.com/gbswhs" target="blank" className="Credits">GITHUB</a></span>
        </div>
      </div>
    )
  }

}

export default Index
