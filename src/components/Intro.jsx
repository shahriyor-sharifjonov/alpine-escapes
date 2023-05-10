import React, { useState } from 'react'

import { useRouter } from 'next/router'

import styles from '@/styles/components/Intro.module.scss'

import en from '@/../locales/en'
import ru from '@/../locales/ru'
import Image from 'next/image'
import Link from 'next/link'

const Intro = () => {
    const router = useRouter()

    const [search, setSearch] = useState('')

    const { locale } = router 
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

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch('')
    }

    return (
        <section className={styles.intro}>
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>{t['intro title']}</h1>
                <p className={styles.desc}>{t['intro desc']}</p>
                <div className={styles.search}>
                    <form className={styles.searchForm} onSubmit={handleSearch}>
                        <input type="text" placeholder={t.search} value={search} onChange={(e) => {setSearch(e.target.value)}}/>
                        <button type="submit">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8487 18 13.551 17.3729 14.9056 16.3199L20.2929 21.7071L20.3871 21.7903C20.7794 22.0953 21.3466 22.0676 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L16.3199 14.9056C17.3729 13.551 18 11.8487 18 10C18 5.58172 14.4183 2 10 2ZM10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4Z" fill="#fff"></path>
                            </svg>
                        </button>
                    </form>
                </div>
                <div className={styles.img}>
                    <Image src="/intro-img.webp" alt="Alpine Escapes" width={944} height={704} draggable={false} />
                </div>
                <div className={styles.items}>
                    <div className={styles.itemsWrap}>
                        <Link href="/post" className={styles.item}>
                            <p className={styles.itemNum}>01</p>
                            <p className={styles.itemTitle}>
                                {t.sochi}
                                <Image src="/icon-right-arrow.svg" alt="" width={32} height={32} draggable={false}/>
                            </p>
                            <div className={styles.itemImg}>
                                <Image src="/intro-img-1.webp" alt="" width={840} height={504} draggable={false}/>
                            </div>
                        </Link>
                        <Link href="/post" className={styles.item}>
                            <p className={styles.itemNum}>02</p>
                            <p className={styles.itemTitle}>
                                {t.caucas}
                                <Image src="/icon-right-arrow.svg" alt="" width={32} height={32} draggable={false}/>
                            </p>
                            <div className={styles.itemImg}>
                                <Image src="/intro-img-2.webp" alt="" width={840} height={504} draggable={false}/>
                            </div>
                        </Link>
                        <Link href="/post" className={styles.item}>
                            <p className={styles.itemNum}>03</p>
                            <p className={styles.itemTitle}>
                                {t.siberia}
                                <Image src="/icon-right-arrow.svg" alt="" width={32} height={32} draggable={false}/>
                            </p>
                            <div className={styles.itemImg}>
                                <Image src="/intro-img-3.webp" alt="" width={840} height={504} draggable={false}/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
