import { Preloader } from '../components/Preloader';
import { useSingle } from './useSingle';
export const Single = props => {
  const [single, loading] = useSingle()
  return (
    <main >
      {
        loading
          ? <Preloader></Preloader>
          : (
            <div className='row'>
              <div className="col s6 offset-s3">
                <div className="card blue-grey darken-1 large">
                  <div className="card-content white-text">
                    <span className="card-title">{single.name}</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="/">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          )
      }
    </main>
  )
}