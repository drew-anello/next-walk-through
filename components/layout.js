import styles from './layout.module.css'
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Your Name'

export default function Layout ({ children }) {
  return <div>{children}</div>
}
