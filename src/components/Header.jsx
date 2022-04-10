export const Header = () => {
  return (
    <nav className='indigo grey darken-4'>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Shop</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/wwnp/shop-react" target={'_blank'} rel="noreferrer">GitHub Repo</a></li>
          <li><a href="https://github.com/michey85" target={'_blank'} rel="noreferrer">Contributes to michey85</a></li>
          <li><a href="https://fortniteapi.io/" target={'_blank'} rel="noreferrer">Contributes to FortniteApi.io</a></li>
        </ul>
      </div>
    </nav>
  )
}