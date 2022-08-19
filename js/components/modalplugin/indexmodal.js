const subjects = [
    {id: 1, title: 'ТОВ «АМБАР+»', 
    toString:function (){ return this.title},
        price: 20,
        img: 'https://zeo.ua/storage/app/media/objects/amb1.jpg',
        content: `
        <h2>Назначение и краткое описание объекта:</h2>
        <p>Запуск первой очереди элеватора компании ООО «Амбар+» объемом единовременного хранения зерна 15 000 тонн.</p>
        <h2>Расположение:</h2>
        <p>Украина, Винницкая область, г. Немиров, улица Ленина, 244</p>
        <h2>Характеристика объекта:</h2>
        <p>Общая вместимость элеватора 30 000 тонн (первая очередь 15 000 т и вторая очередь 15 000), производительность транспортного оборудования 100 т/час.</p>
        <h2>Проектом предусмотрен следующий функционал:</h2>
            <ul>
                <li>Прием зерна с автотранспорта (узлы разгрузки, взвешивания и пробоотбора).</li>
                <li>Первичная очистка зерна сепаратором.</li>
                <li>Сушка зерна влажностью с 24% до 14%.</li>
                <li>Хранение зерна общим объемом 30 000 тонн.</li>
                <li>Взвешивание и отгрузка зерна на автотранспорт.</li>
                <li>Полная автоматизация работы комплекса.</li>
            </ul>
        <h2>Виды проводимых работ:</h2>
            <ul>
                <li>Анализ строительной площадки.</li>
                <li>Разработка проектной документации.</li>
                <li>Монтаж оборудования.</li>
                <li>Автоматизация комплекса.</li>
            </ul>
        <strong>Поставка оборудования:</strong>
            <ul>
                <li>Транспортное и самотечное оборудование ZEO (скребковые конвейеры, нории) – 100 т/час.</li>
                <li>Зерносушилка Bonfanti, производительностью 25 т/час (650 т/сутки по кукурузе с 24% до 14%).</li>
                <li>Сушка зерна влажностью с 24% до 14%.</li>
                <li>Силосы хопперы для влажного зерна Symaga, объемом 563 м³.</li>
                <li>Силосы для хранения зерна на плоском днище Symaga, объемом 9915 м³.</li>
                <li>Силос-хоппер накопительный (отгрузка в автотранспорт) Symaga, объемом 52,22 м³.</li>
                <li>Сепаратор Луч ЗСО-150.</li>
                <li>Бункерные и автомобильные весы.</li>
            </ul>`,
        galleries: `
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-1.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-2.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-3.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-4.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-5.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-6.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-7.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-8.jpg" /></picture>

        `
},
    {id: 2, title: 'ТОВ «НОВОТЕХ-ТЕРМІНАЛ»', 
    toString:function (){ return this.title},
        price: 30,
        img: 'https://zeo.ua/storage/app/media/objects/Building/prev.jpg',
        content: ` <h2>Призначення та короткий опис об'єкта:</h2>
        <p>Портовий перевалочний зерновий термінал. По завершенню будівництва потужність одночасного зберігання складе 110 тис.т.</p>
        <p>На думку Національного морського рейтингу України, є найбільш сучасним та ефективним на сьогоднішній день терміналом з мінімальним терміном будівництва.</p>
        <h2>Розташування:</h2>
        <p>Україна, м. Одеса, Одеська обл, Митна площа, 1</p>
        <h2>Характеристика об'єкта:</h2>
        <p>Загальна місткість - 61000 м. куб., відвантаження на спецтару - 500 т/год, прийом з судна мобільним розвантажувачем - 250 т/год, відвантаження на судно - 1000 т/год, середня потужність транспортно-технологічних ліній 250-1000 т/год.</p>
        <h2>Види робіт, що проводяться:</h2>
            <ul> 
                <li> Розробка проектної документації стадії П та Р проекту зернового терміналу річним оборотом 3 000 000 тон.</li>
                    <li> Будівництво 4-ї черги перевантажувального комплексу зерна - генпідряд 2018 р.
                    <ul>
                        <li>- Поставка силосних ємностей компанії Symaga (25 тис.т).</li>
                        <li>- Виготовлення конвеєрного обладнання 500-1000 т/г (200 п.м), зачисних шнеків 200 т/год, самопливного обладнання (10 т.).</li>
                        <li>- Монтаж силосних ємностей, зачисних шнеків, конвеєрного та самопливного обладнання.</li>
                    </ul>
                    </li>
                <li>Будівництво 2-ї черги перевантажувального комплексу зерна - генпідряд.</li>
                <li>2017 р.
                    <ul>
                        <li> -Поставка силосних ємностей компанії Symaga (25 тис.т).
                        <li>- Виготовлення аспіраційного обладнання 2-ої черги перевантажувального комплексу зерна.</li>
                        <li>- Виготовлення вагового обладнання: бункерні ваги.</li>
                        <li>- Виготовлення високопродуктивного транспортного обладнання 500-1000 т/год: стрічкові конвеєри, норії, а також самопливне обладнання (80 т.).</li>
                        <li>- Монтаж силосного парку (обсяг зберігання 50 тис.т), монтаж конвеєрного обладнання (980 м.п.), монтаж аспіраційного обладнання (40 одиниць), монтаж самопливного обладнання.</li>
                        <li>- Монтаж силосного парку (обсяг зберігання 50 тис.т), монтаж конвеєрного обладнання (980 м.п.), монтаж аспіраційного обладнання (40 одиниць), монтаж самопливного обладнання..</li>
                    </ul>
                </li>
                <li>Будівництво 1-ї черги зерноперевантажувального терміналу (2016 р):
                    <ul>
                        <li>- Виготовлення, поставка та монтаж металоконструкцій елеватора.</li>
                        <li>- Виготовлення вагового обладнання: бункерні ваги.</li>
                        <li>- Виготовлення транспортного обладнання: стрічкові та скребкові конвеєри, норії 250- 1000 т/г.</li>
                        <li>- Монтаж технологічного обладнання та самопливу.</li>
                        <li>- Розробка проекту, виготовлення, монтаж аспіраційного обладнання 1-ої черги терміналу.</li>
                    </ul>
                </li>`,
        galleries: `
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-1.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-2.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-3.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-4.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-5.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-6.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-7.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-8.jpg" /></picture>

        `

        
},
    {id: 3, title: 'ТОВ «МВ КАРГО» (CARGILL)', 
    toString:function (){ return this.title},
        price: 40,
        img: 'https://zeo.ua/storage/app/media/objects/Building/cargo-prev.jpg',
        content: ` <h2>Призначення та короткий опис об'єкта:</h2>
        <p>Портовий перевалочний зерновий термінал. По завершенню будівництва потужність одночасного зберігання складе 110 тис.т.</p>
        <p>На думку Національного морського рейтингу України, є найбільш сучасним та ефективним на сьогоднішній день терміналом з мінімальним терміном будівництва.</p>
        <h2>Розташування:</h2>
        <p>Україна, м. Одеса, Одеська обл, Митна площа, 1</p>
        <h2>Характеристика об'єкта:</h2>
        <p>Загальна місткість - 61000 м. куб., відвантаження на спецтару - 500 т/год, прийом з судна мобільним розвантажувачем - 250 т/год, відвантаження на судно - 1000 т/год, середня потужність транспортно-технологічних ліній 250-1000 т/год.</p>
        <h2>Види робіт, що проводяться:</h2>
            <ul> 
                <li> Розробка проектної документації стадії П та Р проекту зернового терміналу річним оборотом 3 000 000 тон.</li>
                    <li> Будівництво 4-ї черги перевантажувального комплексу зерна - генпідряд 2018 р.
                    <ul>
                        <li>- Поставка силосних ємностей компанії Symaga (25 тис.т).</li>
                        <li>- Виготовлення конвеєрного обладнання 500-1000 т/г (200 п.м), зачисних шнеків 200 т/год, самопливного обладнання (10 т.).</li>
                        <li>- Монтаж силосних ємностей, зачисних шнеків, конвеєрного та самопливного обладнання.</li>
                    </ul>
                    </li>
                <li>Будівництво 2-ї черги перевантажувального комплексу зерна - генпідряд.</li>
                <li>2017 р.
                    <ul>
                        <li> -Поставка силосних ємностей компанії Symaga (25 тис.т).
                        <li>- Виготовлення аспіраційного обладнання 2-ої черги перевантажувального комплексу зерна.</li>
                        <li>- Виготовлення вагового обладнання: бункерні ваги.</li>
                        <li>- Виготовлення високопродуктивного транспортного обладнання 500-1000 т/год: стрічкові конвеєри, норії, а також самопливне обладнання (80 т.).</li>
                        <li>- Монтаж силосного парку (обсяг зберігання 50 тис.т), монтаж конвеєрного обладнання (980 м.п.), монтаж аспіраційного обладнання (40 одиниць), монтаж самопливного обладнання.</li>
                        <li>- Монтаж силосного парку (обсяг зберігання 50 тис.т), монтаж конвеєрного обладнання (980 м.п.), монтаж аспіраційного обладнання (40 одиниць), монтаж самопливного обладнання..</li>
                    </ul>
                </li>
                <li>Будівництво 1-ї черги зерноперевантажувального терміналу (2016 р):
                    <ul>
                        <li>- Виготовлення, поставка та монтаж металоконструкцій елеватора.</li>
                        <li>- Виготовлення вагового обладнання: бункерні ваги.</li>
                        <li>- Виготовлення транспортного обладнання: стрічкові та скребкові конвеєри, норії 250- 1000 т/г.</li>
                        <li>- Монтаж технологічного обладнання та самопливу.</li>
                        <li>- Розробка проекту, виготовлення, монтаж аспіраційного обладнання 1-ої черги терміналу.</li>
                    </ul>
                </li>`,
        galleries: `
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-1.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-2.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-3.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-4.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-5.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-6.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-7.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-8.jpg" /></picture>
        
                `
    },
    {id: 4, title: 'ТОВ «БУЧАЧАГРОХЛІБПРОМ»', 
    toString:function (){ return this.title},
        price: 45,
        img: 'https://zeo.ua/storage/app/media/services/stroitelstvo/buchach-new.jpg',
        content: ` <h2>Призначення та короткий опис об'єкта:</h2>
        <p>Портовий перевалочний зерновий термінал. По завершенню будівництва потужність одночасного зберігання складе 110 тис.т.</p>
        <p>На думку Національного морського рейтингу України, є найбільш сучасним та ефективним на сьогоднішній день терміналом з мінімальним терміном будівництва.</p>
        <h2>Розташування:</h2>
        <p>Україна, м. Одеса, Одеська обл, Митна площа, 1</p>
        <h2>Характеристика об'єкта:</h2>
        <p>Загальна місткість - 61000 м. куб., відвантаження на спецтару - 500 т/год, прийом з судна мобільним розвантажувачем - 250 т/год, відвантаження на судно - 1000 т/год, середня потужність транспортно-технологічних ліній 250-1000 т/год.</p>
        <h2>Види робіт, що проводяться:</h2>
            <ul> 
                <li> Розробка проектної документації стадії П та Р проекту зернового терміналу річним оборотом 3 000 000 тон.</li>
                    <li> Будівництво 4-ї черги перевантажувального комплексу зерна - генпідряд 2018 р.
                    <ul>
                        <li>- Поставка силосних ємностей компанії Symaga (25 тис.т).</li>
                        <li>- Виготовлення конвеєрного обладнання 500-1000 т/г (200 п.м), зачисних шнеків 200 т/год, самопливного обладнання (10 т.).</li>
                        <li>- Монтаж силосних ємностей, зачисних шнеків, конвеєрного та самопливного обладнання.</li>
                    </ul>
                    </li>
                <li>Будівництво 2-ї черги перевантажувального комплексу зерна - генпідряд.</li>
                <li>2017 р.
                    <ul>
                        <li> -Поставка силосних ємностей компанії Symaga (25 тис.т).
                        <li>- Виготовлення аспіраційного обладнання 2-ої черги перевантажувального комплексу зерна.</li>
                        <li>- Виготовлення вагового обладнання: бункерні ваги.</li>
                        <li>- Виготовлення високопродуктивного транспортного обладнання 500-1000 т/год: стрічкові конвеєри, норії, а також самопливне обладнання (80 т.).</li>
                        <li>- Монтаж силосного парку (обсяг зберігання 50 тис.т), монтаж конвеєрного обладнання (980 м.п.), монтаж аспіраційного обладнання (40 одиниць), монтаж самопливного обладнання.</li>
                        <li>- Монтаж силосного парку (обсяг зберігання 50 тис.т), монтаж конвеєрного обладнання (980 м.п.), монтаж аспіраційного обладнання (40 одиниць), монтаж самопливного обладнання..</li>
                    </ul>
                </li>
                <li>Будівництво 1-ї черги зерноперевантажувального терміналу (2016 р):
                    <ul>
                        <li>- Виготовлення, поставка та монтаж металоконструкцій елеватора.</li>
                        <li>- Виготовлення вагового обладнання: бункерні ваги.</li>
                        <li>- Виготовлення транспортного обладнання: стрічкові та скребкові конвеєри, норії 250- 1000 т/г.</li>
                        <li>- Монтаж технологічного обладнання та самопливу.</li>
                        <li>- Розробка проекту, виготовлення, монтаж аспіраційного обладнання 1-ої черги терміналу.</li>
                    </ul>
                </li>`,
        galleries: `
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-1.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-2.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-3.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-4.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-5.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-6.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-7.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-8.jpg" /></picture>

        `
    },
    {id: 5, title: 'ТОВ «ОЛСІДЗ БЛЕК СІ»', 
    toString:function (){ return this.title},
        price: 45,
        img: 'https://zeo.ua/storage/app/media/services/stroitelstvo/olsidz-new.jpg',
        content: ` <h2>Призначення та короткий опис об'єкта:</h2>
        <p>Портовий перевалочний зерновий термінал. По завершенню будівництва потужність одночасного зберігання складе 110 тис.т.</p>
        <p>На думку Національного морського рейтингу України, є найбільш сучасним та ефективним на сьогоднішній день терміналом з мінімальним терміном будівництва.</p>
        <h2>Розташування:</h2>
        <p>Україна, м. Одеса, Одеська обл, Митна площа, 1</p>
        <h2>Характеристика об'єкта:</h2>
        <p>Загальна місткість - 61000 м. куб., відвантаження на спецтару - 500 т/год, прийом з судна мобільним розвантажувачем - 250 т/год, відвантаження на судно - 1000 т/год, середня потужність транспортно-технологічних ліній 250-1000 т/год.</p>
        <h2>Види робіт, що проводяться:</h2>
            <ul> 
                <li> Розробка проектної документації стадії П та Р проекту зернового терміналу річним оборотом 3 000 000 тон.</li>
                    <li> Будівництво 4-ї черги перевантажувального комплексу зерна - генпідряд 2018 р.
                    <ul>
                        <li>- Поставка силосних ємностей компанії Symaga (25 тис.т).</li>
                        <li>- Виготовлення конвеєрного обладнання 500-1000 т/г (200 п.м), зачисних шнеків 200 т/год, самопливного обладнання (10 т.).</li>
                        <li>- Монтаж силосних ємностей, зачисних шнеків, конвеєрного та самопливного обладнання.</li>
                    </ul>
                    </li>
                <li>Будівництво 2-ї черги перевантажувального комплексу зерна - генпідряд.</li>
                <li>2017 р.
                    <ul>
                        <li> -Поставка силосних ємностей компанії Symaga (25 тис.т).
                        <li>- Виготовлення аспіраційного обладнання 2-ої черги перевантажувального комплексу зерна.</li>
                        <li>- Виготовлення вагового обладнання: бункерні ваги.</li>
                        <li>- Виготовлення високопродуктивного транспортного обладнання 500-1000 т/год: стрічкові конвеєри, норії, а також самопливне обладнання (80 т.).</li>
                        <li>- Монтаж силосного парку (обсяг зберігання 50 тис.т), монтаж конвеєрного обладнання (980 м.п.), монтаж аспіраційного обладнання (40 одиниць), монтаж самопливного обладнання.</li>
                        <li>- Монтаж силосного парку (обсяг зберігання 50 тис.т), монтаж конвеєрного обладнання (980 м.п.), монтаж аспіраційного обладнання (40 одиниць), монтаж самопливного обладнання..</li>
                    </ul>
                </li>
                <li>Будівництво 1-ї черги зерноперевантажувального терміналу (2016 р):
                    <ul>
                        <li>- Виготовлення, поставка та монтаж металоконструкцій елеватора.</li>
                        <li>- Виготовлення вагового обладнання: бункерні ваги.</li>
                        <li>- Виготовлення транспортного обладнання: стрічкові та скребкові конвеєри, норії 250- 1000 т/г.</li>
                        <li>- Монтаж технологічного обладнання та самопливу.</li>
                        <li>- Розробка проекту, виготовлення, монтаж аспіраційного обладнання 1-ої черги терміналу.</li>
                    </ul>
                </li>`,
        galleries: `
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-1.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-2.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-3.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-4.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-5.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-6.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-7.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-8.jpg" /></picture>

        `,
    },
    {id: 6, title: 'ТОВ «COFCO-AGRI»', 
    toString:function (){ return this.title},
        price: 45,
        img: 'https://zeo.ua/storage/app/media/services/stroitelstvo/cofco-new.jpg',
        content: ` <h2>Призначення та короткий опис об'єкта:</h2>
        <p>Портовий перевалочний зерновий термінал. По завершенню будівництва потужність одночасного зберігання складе 110 тис.т.</p>
        <p>На думку Національного морського рейтингу України, є найбільш сучасним та ефективним на сьогоднішній день терміналом з мінімальним терміном будівництва.</p>
        <h2>Розташування:</h2>
        <p>Україна, м. Одеса, Одеська обл, Митна площа, 1</p>
        <h2>Характеристика об'єкта:</h2>
        <p>Загальна місткість - 61000 м. куб., відвантаження на спецтару - 500 т/год, прийом з судна мобільним розвантажувачем - 250 т/год, відвантаження на судно - 1000 т/год, середня потужність транспортно-технологічних ліній 250-1000 т/год.</p>
        <h2>Види робіт, що проводяться:</h2>
            <ul> 
                <li> Розробка проектної документації стадії П та Р проекту зернового терміналу річним оборотом 3 000 000 тон.</li>
                    <li> Будівництво 4-ї черги перевантажувального комплексу зерна - генпідряд 2018 р.
                    <ul>
                        <li>- Поставка силосних ємностей компанії Symaga (25 тис.т).</li>
                        <li>- Виготовлення конвеєрного обладнання 500-1000 т/г (200 п.м), зачисних шнеків 200 т/год, самопливного обладнання (10 т.).</li>
                        <li>- Монтаж силосних ємностей, зачисних шнеків, конвеєрного та самопливного обладнання.</li>
                    </ul>
                    </li>
                <li>Будівництво 2-ї черги перевантажувального комплексу зерна - генпідряд.</li>
                <li>2017 р.
                    <ul>
                        <li> -Поставка силосних ємностей компанії Symaga (25 тис.т).
                        <li>- Виготовлення аспіраційного обладнання 2-ої черги перевантажувального комплексу зерна.</li>
                        <li>- Виготовлення вагового обладнання: бункерні ваги.</li>
                        <li>- Виготовлення високопродуктивного транспортного обладнання 500-1000 т/год: стрічкові конвеєри, норії, а також самопливне обладнання (80 т.).</li>
                        <li>- Монтаж силосного парку (обсяг зберігання 50 тис.т), монтаж конвеєрного обладнання (980 м.п.), монтаж аспіраційного обладнання (40 одиниць), монтаж самопливного обладнання.</li>
                        <li>- Монтаж силосного парку (обсяг зберігання 50 тис.т), монтаж конвеєрного обладнання (980 м.п.), монтаж аспіраційного обладнання (40 одиниць), монтаж самопливного обладнання..</li>
                    </ul>
                </li>
                <li>Будівництво 1-ї черги зерноперевантажувального терміналу (2016 р):
                    <ul>
                        <li>- Виготовлення, поставка та монтаж металоконструкцій елеватора.</li>
                        <li>- Виготовлення вагового обладнання: бункерні ваги.</li>
                        <li>- Виготовлення транспортного обладнання: стрічкові та скребкові конвеєри, норії 250- 1000 т/г.</li>
                        <li>- Монтаж технологічного обладнання та самопливу.</li>
                        <li>- Розробка проекту, виготовлення, монтаж аспіраційного обладнання 1-ої черги терміналу.</li>
                    </ul>
                </li>`,
        galleries: `
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-1.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-2.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-3.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-4.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-5.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-6.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-7.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-8.jpg" /></picture>

        `
    }
]

const subjectsTwo = [
    {id: 7, title: 'ТОВ «ТІС-ЗЕРНО»', 
    // toString:function (){ return this.title},
    price: 45,
    img: 'https://zeo.ua/storage/app/media/objects/Building/tis-new.jpg',
    content:`
        <h4> Modal is working </h4>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis qui sapiente aut molestiae aspernatur eligendi nemo, perferendis, voluptas, doloremque illo officia quos ratione!</span>
        `,
        galleries: `
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-1.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-2.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-3.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-4.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-5.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-6.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-7.jpg" /></picture>
        <picture><img src="https://zeo.ua/storage/app/media/objects/Building/Novotex-Terminal-8.jpg" /></picture>

        `
}
]




const toHTML = subject => `
    <div class="col-3 col-md-2 ">
        <div class="service_el" data-open="true" >
            <div class="service_img">
                <img class="obj-img" src="${subject.img}" data-btn="showInfo" data-id="${subject.id}"  alt="${subject.title}" />
            </div>
            <div class="service_title" data-title>
                ${subject.title}
            </div>

        </div>
    </div>
`

const objRegions = ['#nav-north',
'#nav-center',
'#nav-south',
'#nav-east',
'#nav-west',
'#nav-south']





function render() {
    const html = subjects.map(
        // subject => toHTML(subject)
        toHTML
    ).join('')
    document.querySelector('#nav-north').innerHTML = html
}
render()






const infoModal = $.modal({


        // `<h1 class="vmodal-caption">Ціна на товар</h1>`
    title: ` 
    ` ,
    closable: true, 
    content:`

    ` ,
    width: '80vw',
    galleries: ``,

    

})

// const documentModal = document.querySelector('body')


document.addEventListener('click', event => {
    // event.preventDefault()

    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id

    if (btnType ==='showInfo' ) {
        const subject = subjects.find(s => s.id === id)
        // console.log(subject);
        infoModal.setTitle(`

        <h1 class="vmodal-caption" data-title>${subject.title}</h1>
        `),
        
        infoModal.setImage(`
        
        <picture>
            <img src="${subject.img}" height="600px" width="100%" alt="">
        </picture>
        
        `),

        infoModal.setContent(`

        <div class="vmodal-body">
            ${subject.content}
        </div>

        `),
        infoModal.setGallery(`

        <div class="picture-wrap">
        
        ${subject.galleries}
        
        </div>
            `)



        

        infoModal.open()
    }

})
