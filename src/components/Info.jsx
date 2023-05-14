import Image from 'next/image'
import React from 'react'

import styles from '@/styles/components/Info.module.scss'

const Info = () => {
    return (
        <section className={styles.info}>
            <div className={`container ${styles.body}`}>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <Image src="/info-1.svg" alt="" width={40} height={40} draggable="false"/> 
                    </div>
                    <p className={styles.p}>Стоимость скайпасов</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <Image src="/info-2.svg" alt="" width={40} height={40} draggable="false"/> 
                    </div>
                    <p className={styles.p}>Информация о трассах</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <Image src="/info-3.svg" alt="" width={40} height={40} draggable="false"/> 
                    </div>
                    <p className={styles.p}>Реальные отзывы катающихся</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <Image src="/info-4.svg" alt="" width={40} height={40} draggable="false"/> 
                    </div>
                    <p className={styles.p}>Подбор трасс по уровню сложности</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <Image src="/info-5.svg" alt="" width={40} height={40} draggable="false"/> 
                    </div>
                    <p className={styles.p}>Актуальные новости курортов</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <Image src="/info-6.svg" alt="" width={40} height={40} draggable="false"/> 
                    </div>
                    <p className={styles.p}>Точный прогноз погоды</p>
                </div>
            </div>
        </section>
    )
}

export default Info
