import React from 'react';
import HorizontalScroll from "../../../UI/HorizontalScroll/HorizontalScroll";
import Button from "../../../UI/Button/Button";
import { useTranslation } from 'react-i18next';

// const buttons = [
//     {id: 1, title: 'Разработка веб-сайта'},
//     {id: 2, title: 'Разработка бота'},
//     {id: 3, title: 'SMM'},
//     {id: 4, title: 'SEO'},
//     {id: 5, title: 'Мобильная разработка'},
//     {id: 6, title: 'Контекстная реклама'}
// ]

const Buttons = ({selectButton, setActive, setIndex}) => {
    const {t, i18n } = useTranslation()

    const buttons = [
        { id: 1, title: `${t('services.service1')}` },
        { id: 2, title:  `${t('services.service2')}` },
        { id: 3, title: 'SMM'},
        { id: 4, title: 'SEO'},
        { id: 5, title:  `${t('services.service3')}` },
        { id: 6, title:  `${t('services.service4')}`},
      ];

    const changeClick = (index) => {
        setActive(true)
        setIndex(index)
    }
    return (
        <div>
            <HorizontalScroll>
                {buttons.map(item =>
                    <Button
                        key={item.id}
                        onClick={() => changeClick(item.id)}
                        active={ selectButton === item.id}>
                        {item.title}
                    </Button>
                )}
            </HorizontalScroll>
        </div>
    );
};

export default Buttons;