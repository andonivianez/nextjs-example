import Link from "next/link"
import styles from './Navigation.module.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/posts', label: 'Posts' },
]

export function Navigation() {
return (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navigation}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>
            {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)}