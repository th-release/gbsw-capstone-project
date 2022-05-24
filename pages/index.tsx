import type { NextPage } from 'next'
import Head from '../components/head'
import Load from '../components/load'
import fetcher from '../utils/fetcher'
import useSWR from 'swr'

const Index: NextPage = () => {
  const { data, error } = useSWR('/api/getProject')
  return (
    <div>
      <Head title='GBSW | 캡스톤' />
      {Object.values(data.projects).map((project: any) => (
        <div key={1} className="box2" onClick={() => window.location.href = project.redirect}>
          <div className="image" style={{ backgroundImage: "url(" + project.image + ")" }}>
            <div className="titleShadow">
              <div className="textShadow">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
          <br/>
        </div>
      ))}
      <div style={{ marginBottom: '60px'}}></div>
      <div className="footer">
        © {new Date().getFullYear()}. GBSWHS. 
        <span><a href="https://github.com/gbswhs" target="blank" className="Credits">GITHUB</a></span>
      </div>
    </div>
  )
}

export default Index
