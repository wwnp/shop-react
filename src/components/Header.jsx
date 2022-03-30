export const Header = () => {
  return (
    <nav className='light-red'>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Shop</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/wwnp/shop-react" target={'_blank'} rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </nav>
  )
}