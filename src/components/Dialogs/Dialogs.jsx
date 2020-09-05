import React from 'react'
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.Dialogs}>
            <Dialog name="Joseph Stalin" img="https://img-fotki.yandex.ru/get/3512/lady-may2006.61/0_43ffc_b3359ea1_XL" message="Пора на Колыму!" count="5"/>
            <Dialog name="Joseph Stalin" img="https://img-fotki.yandex.ru/get/3512/lady-may2006.61/0_43ffc_b3359ea1_XL" message="Пора на Колыму!" count="1"/>
            <Dialog name="Joseph Stalin" img="https://img-fotki.yandex.ru/get/3512/lady-may2006.61/0_43ffc_b3359ea1_XL" message="Пора на Колыму!" count="6"/>
            <Dialog name="Joseph Stalin" img="https://img-fotki.yandex.ru/get/3512/lady-may2006.61/0_43ffc_b3359ea1_XL" message="Пора на Колыму!" count="228"/>
            <Dialog name="Joseph Stalin" img="https://img-fotki.yandex.ru/get/3512/lady-may2006.61/0_43ffc_b3359ea1_XL" message="Пора на Колыму!" count="52222"/>

        </div>
    )
}

export default Dialogs
