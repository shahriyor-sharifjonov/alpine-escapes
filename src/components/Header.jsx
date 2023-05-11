import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'

import styles from '@/styles/components/Header.module.scss'

import en from '@/../locales/en'
import ru from '@/../locales/ru'

const Header = () => {
    const router = useRouter()
    const { locale } = router 
    const [ menuOpen, setMenuOpen ] = useState(false)
    let language
    switch (locale) {
      case 'en':
        language = en
        break
      case 'ru':
        language = ru
        break
      default: 
        language = ru 
    }
    const t = language

    function toggleMenu() {
        setMenuOpen(!menuOpen)
        document.body.classList.toggle('oh')
    }

    function handleLanguageChange() {
        let loc
    
        switch (locale) {
            case 'en':
                loc = 'ru'
                break
            case 'ru':
                loc = 'en'
                break
            default: 
                loc = 'ru' 
        }
    
        router.push(router.pathname, router.asPath, { locale: loc, scroll: false })
    }

    return (
        <header className={`${styles.header} ${styles.white} ${menuOpen ? styles.menuOpen : ''}`}>
            <nav className={`${styles.nav} container`}>
                <Link href="/" className={styles.logo} onClick={() => {setMenuOpen(false);document.body.classList.remove('oh')}}>
                    <div className={`${styles.logoImg}`}>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_634_5606)">
                            <path d="M29.5337 33.7011C29.5922 36.973 30.0476 40.2257 30.8899 43.3879C30.8899 43.3879 31.4636 47.6352 35.8823 51.1001C37.7899 52.6872 41.0312 54.5501 46.5378 56.1521L52.2679 53.2833C52.2679 53.2833 46.6794 47.1955 39.9955 44.6174C40.5104 39.3453 39.7196 34.0275 37.693 29.1334C36.5157 22.8518 34.4069 18.5077 32.015 15.4973C31.0911 15.7507 28.9153 16.3393 26.7245 16.7417C24.735 17.0472 19.9289 17.2857 18.8857 12.7254C18.7173 13.0343 18.5307 13.3329 18.3268 13.6196C16.7471 15.7432 14.1317 15.3706 13.5281 15.244L13.4834 15.1695C13.7451 15.2144 14.0139 15.194 14.2658 15.1098C18.8335 13.5525 18.8857 7.53923 18.8857 7.53923C18.3268 0.758467 14.847 -0.128249 12.6265 0.0133275C12.2033 0.0494005 11.7842 0.124228 11.3747 0.236869C10.9126 0.381499 10.4659 0.571178 10.0409 0.803175L10.1675 0.900043L9.95891 0.847883C5.80103 3.28449 6.85913 7.21882 7.40308 8.60478C8.39412 7.80003 10.6742 6.36936 15.0929 5.53481L15.3612 5.48265C15.5292 5.77626 15.6737 6.08272 15.7933 6.39917C16.1957 7.50943 16.7024 9.54366 15.4133 10.3931C15.4133 10.3931 13.923 11.5108 11.6876 9.91623C11.6876 9.91623 11.5759 12.487 9.76517 12.4572C10.5102 13.3895 11.4288 14.1689 12.47 14.7522C11.6727 16.0934 9.93655 19.5211 8.68472 25.5343C6.36986 27.6532 4.49604 30.2082 3.17069 33.0528C3.17069 33.0528 0.562701 36.2495 2.06788 37.8142L5.19002 34.7741L5.07825 34.6772C5.95751 34.1035 11.2033 30.5715 12.4253 28.12C13.8612 26.5348 15.0358 24.7314 15.9051 22.7773C19.8916 29.4016 26.9332 35.1392 26.9332 35.1392C26.9332 35.1392 27.5367 36.7785 28.5725 38.9245C28.3415 37.1436 28.2372 35.5192 28.1925 34.4537L29.5337 33.7011Z"/>
                            <path d="M22.1717 15.7581C24.8468 16.2052 32.0821 14.089 32.0821 14.089C34.6007 15.2589 42.2458 14.6926 42.2458 14.6926H46.5527C46.0907 12.7477 42.5811 12.0846 42.5811 12.0846C33.5351 8.82831 23.5801 8.65693 20.145 8.70164C19.9825 10.0138 19.6048 11.2902 19.0273 12.4795C19.5414 14.1113 20.6591 15.5048 22.1717 15.7581Z"/>
                            <path d="M41.4261 43.7604C47.879 46.5845 53.013 52.1731 53.244 52.3817L53.6017 52.7692L55.5838 51.8452C52.0994 47.2736 47.0927 44.1015 41.4708 42.9035C41.4559 43.2314 41.441 43.522 41.4261 43.7604Z"/>
                            <path d="M45.5616 58.6558C41.9965 57.8083 38.2634 57.997 34.8018 59.1997C33.3116 59.7362 30.0777 61.07 30.875 62.8286C31.0152 63.1101 31.2264 63.3502 31.4878 63.5253C31.7491 63.7004 32.0515 63.8044 32.3652 63.827C42.4172 64.8404 53.9519 61.7854 60.2409 53.5516C58.7911 54.753 57.1873 55.7554 55.472 56.5321C52.7522 57.8361 48.6242 59.3786 45.5616 58.6558Z"/>
                            <path d="M62.603 49.4906C62.603 49.4906 62.603 49.4906 62.603 49.4533C62.5687 49.2196 62.4793 48.9974 62.3422 48.805C62.1863 48.5898 61.9593 48.4367 61.7014 48.3729H61.6567C61.2244 48.2723 60.7703 48.3361 60.3825 48.5517L60.3005 48.6039C59.1679 49.3043 58.6537 51.4056 58.1918 52.5158C57.997 52.9869 57.7627 53.4405 57.4913 53.872L59.3542 52.6127L59.4287 52.5531C60.4644 51.808 61.597 51.0628 62.603 50.3177C62.6544 50.0444 62.6544 49.7639 62.603 49.4906Z"/>
                            <path d="M40.1221 17.5464C38.7343 17.6845 37.3739 18.0233 36.0835 18.5524L35.8003 18.6418C36.335 19.6831 36.8126 20.7527 37.231 21.8459L37.4247 21.7416C38.3968 21.3095 39.4255 21.0185 40.4798 20.8772C41.5284 20.7394 42.5906 20.7394 43.6392 20.8772C45.7373 21.176 47.7701 21.8259 49.6525 22.7997C51.4145 23.6565 53.0805 24.6981 54.6225 25.9069C55.3677 26.4732 56.0085 27.0395 56.6046 27.6133C57.2007 28.187 57.767 28.8055 58.2663 29.3569C59.2946 30.4746 60.1589 31.4805 60.8221 32.3375C61.4853 33.1944 61.9696 33.9246 62.3124 34.4313L62.7818 35.2137L62.4838 34.3493C62.1782 33.538 61.8275 32.7444 61.4331 31.9723C60.7936 30.7824 60.0896 29.6282 59.3244 28.5149C58.3585 27.0224 57.2316 25.6405 55.9638 24.3943C54.4377 22.915 52.7535 21.6081 50.9416 20.4972C48.856 19.222 46.5716 18.3052 44.1831 17.7849C42.8467 17.5208 41.4803 17.4406 40.1221 17.5464Z"/>
                            <path d="M22.8722 33.4775C22.4176 34.409 21.9557 35.3255 21.4862 36.1973C20.966 37.172 20.3965 38.1196 19.7798 39.0363C19.2031 39.9028 18.5682 40.7294 17.8797 41.5101C17.5444 41.9051 17.2091 42.2553 16.8738 42.5608L16.2926 43.0824L16.0318 43.3134L15.7486 43.5444C15.0383 44.1459 14.2918 44.7033 13.5132 45.2135C12.1166 46.1007 10.6367 46.8494 9.09455 47.4489C7.88202 47.917 6.63678 48.2956 5.36885 48.5815C4.3033 48.8125 3.45385 48.9392 2.86519 49.0062L1.95612 49.1031L2.85773 49.2372C3.72312 49.3389 4.59466 49.3788 5.46572 49.3565C6.8323 49.3393 8.19336 49.1795 9.52673 48.8796C10.3582 48.7049 11.1792 48.4835 11.9857 48.2164C12.8792 47.9047 13.7548 47.544 14.6086 47.1359C15.5458 46.6898 16.4498 46.1768 17.3134 45.601L17.6487 45.3774L17.999 45.1241L18.6249 44.6546C19.072 44.2821 19.5489 43.9095 19.9587 43.4997C21.7008 41.8391 23.2053 39.946 24.4295 37.8739C24.8319 37.2256 25.2119 36.5624 25.577 35.8918C25.0331 35.4671 24.0644 34.6176 22.8722 33.4775Z"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_634_5606">
                            <rect width="64" height="64"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <span className={styles.logoText}>Alpine<br/>Escapes</span>
                </Link>
                <div className={styles.right}>
                    <ul className={styles.list}>
                        <li className={styles.li}>
                            <Link href="/resorts" className={styles.link} onMouseLeave={(e) => {e.target.classList.add(styles.leave);setTimeout(() => {e.target.classList.remove(styles.leave)}, 300)}}>{t.resorts}</Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/articles" className={styles.link} onMouseLeave={(e) => {e.target.classList.add(styles.leave);setTimeout(() => {e.target.classList.remove(styles.leave)}, 300)}}>{t.articles}</Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="https://mercurylab.uz" target="_blank" rel="noreferrer" className={styles.link} onMouseLeave={(e) => {e.target.classList.add(styles.leave);setTimeout(() => {e.target.classList.remove(styles.leave)}, 300)}}>{t['order a website']}</Link>
                        </li>
                    </ul>
                    <Link href="/saved" className={styles.saved}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0013 21V21C11.7355 21.0016 11.4801 20.8972 11.2913 20.71L3.52134 12.93V12.93C1.49289 10.8804 1.49289 7.57967 3.52134 5.53002V5.53002C5.56648 3.49065 8.8762 3.49065 10.9213 5.53002L12.0013 6.61002L13.0813 5.53002V5.53002C15.1265 3.49065 18.4362 3.49065 20.4813 5.53002V5.53002C22.5098 7.57967 22.5098 10.8804 20.4813 12.93L12.7113 20.71V20.71C12.5226 20.8972 12.2671 21.0016 12.0013 21V21ZM7.22296 6.00003V6.00003C6.3679 5.99616 5.54685 6.33466 4.94296 6.94003L4.94296 6.94003C3.68567 8.20394 3.68568 10.2461 4.94296 11.51L12.003 18.58L19.063 11.51V11.51C20.3203 10.2461 20.3203 8.20394 19.063 6.94003V6.94003C17.7833 5.73109 15.7826 5.73109 14.503 6.94003L12.713 8.74003V8.74003C12.324 9.13216 11.6909 9.13475 11.2988 8.74583C11.2968 8.74391 11.2949 8.74197 11.293 8.74003L9.50297 6.94003V6.94003C8.89908 6.33466 8.07803 5.99616 7.22297 6.00003L7.22296 6.00003Z"></path>
                        </svg>
                    </Link>
                    <button className={styles.lang} onClick={handleLanguageChange} onMouseLeave={(e) => {e.target.classList.add(styles.leave);setTimeout(() => {e.target.classList.remove(styles.leave)}, 300)}}>
                        { locale }
                    </button>
                    <button type="button" className={`${styles.btn} ${menuOpen ? styles.active : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
            <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
                <div className={`${styles.menuContainer} container`}>
                    <p className={styles.menuTitle}>{t.navigation}</p>
                    <Link href="/resorts" className={styles.menuLink} onClick={toggleMenu}>{t.resorts}</Link>
                    <Link href="/articles" className={styles.menuLink} onClick={toggleMenu}>{t.articles}</Link>
                    <Link href="https://mercurylab.uz" rel="noreferrer" target="_blank" className={styles.menuLink}>Mercury Lab</Link>
                    <Link href="https://mercurylab.uz" rel="noreferrer" target="_blank" className={styles.menuMerc}>
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15.3593" cy="15.3588" r="12.6128" fill="url(#paint0_linear_758_3526)"></circle><ellipse cx="14.9999" cy="15" rx="2.99025" ry="18.2229" transform="rotate(45 14.9999 15)" fill="url(#paint1_linear_758_3526)"></ellipse><defs><linearGradient id="paint0_linear_758_3526" x1="28.3925" y1="-0.196884" x2="-4.82107" y2="34.278" gradientUnits="userSpaceOnUse"><stop stopColor="#DF972C"></stop><stop offset="1" stopColor="white" stopOpacity="0.58"></stop></linearGradient><linearGradient id="paint1_linear_758_3526" x1="18.0898" y1="-7.47497" x2="2.19288" y2="-4.76735" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stopColor="white" stopOpacity="0.58"></stop></linearGradient></defs></svg>
                            {t['site by']}
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
