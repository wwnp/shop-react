export const Footer = () => {
  return (
    <footer className="page-footer grey darken-4" style={{ paddingTop: 0 }}>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  )
}