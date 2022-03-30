export const Footer = () => {
  return (
    <footer className="page-footer light-red" style={{ paddingTop: 0 }}>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  )
}