import styles from "./links.module.css";
import NavLink from "./navlink/NavLink";

const Links = () => {

  // TEMPORARY
  const session = true
  const isAdmin = true

  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    }
  ];

  return (
    <div className={styles.links}>
      {links.map((link) =>
      (
      // <Link href={link.path} key={link.title}>{link.title}</Link>
      // created our nav link component:
      <NavLink item={link} key={link.title} />
      ))}
      {session ? (
          <>
          {
            isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )
          }
          <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item = { {title: "Login", path: "/login"} } />
        )}
    </div>
  )
}

export default Links