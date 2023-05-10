//Массив описывающий героев
const modalData = [
  {
    photoUrl: "assets/images/1.jpg",
    name: "Василий Ильич Мыхлик  ",
    description:
      "31 января 1944 года был сбит в воздушном бою и совершил посадку за линией фронта. 3 февраля 1944 года вместе со стрелком-радистом вернулся к своим. За время войны совершил 188 боевых вылетов на штурмовике Ил-2 для нанесения ударов по живой силе и технике противника. За мужество и героизм, проявленные в боях, Указом Президиума Верховного Совета СССР от 23 февраля 1945 года капитану Мыхлику Василию Ильичу присвоено звание Героя Советского Союза с вручением ордена Ленина и медали «Золотая Звезда».",
    awards: [
      " дважды Герой Советского Союза(23.02.1945; 29.06.1945)",
      " орден Ленина (23.02.1945);",
      "Три Ордена Красного Знамени (7.09.1943; 21.06.1944; 22.02.1945);",
      "Орден Александра Невского (5.11.1944); ",
      "два Ордена Отечественной войны 1-й степени (25.07.1944; 11.03.1985);",
      "орден Красной Звезды (31.07.1943);",
      "Почётный гражданин Кривого Рога (17.03.1982);",
      "медали."
    ]
  },
  {
    photoUrl: "assets/images/2.jpg",
    name: "Коваленко Георгий Петрович",
    description:
      "К осени 1944 года капитан Георгий Коваленко командовал эскадрильей 103-го штурмового авиаполка 230-й штурмовой авиадивизии 4-й воздушной армии 2-го Белорусского фронта.		К тому времени он совершил 169 боевых вылетов на штурмовку скоплений боевой техники и живой силы противника.		Указом Президиума Верховного Совета СССР от 26 октября 1944 года за «мужество и героизм, проявленные в боях» капитан Георгий Коваленко был удостоен высокого звания		Героя Советского Союза с вручением ордена Ленина и медали «Золотая Звезда» за номером 4846",
    awards: [
      " Герой Советского Союза",
      " орден Ленина ",
      "Три Ордена Красного Знамени ",
      "Орден Александра Невского ",
      " Орден Отечественной войны  ",
      "орден Красной Звезды ",
      "Медаль «За боевые заслуги»",
      "медали."
    ]
  },
  {
    photoUrl: "assets/images/3.jpg",
    name: "Амет-Хан Султан",
    description:
      "Родился 20 октября 1920 года в местечке Алупка Дерекойской волости Ялтинского уезда Таврической губернии в семье рабочего советский военный лётчик-ас крымскотатарского и лакского происхождения, участник Великой Отечественной войны,	дважды Герой Советского Союза (1943, 1945). Член ВКП(б) с 1942 года	   Выпускник 1-й Качинской военной авиационной школы в годы Великой Отечественной войны прошёл путь от лётчика		до командира эскадрильи 9-го гвардейского истребительного авиационного полка. 31 мая 1942 года совершил под 	   Ярославлем свой первый воздушный таран немецкого бомбардировщика «Юнкерс-88». Участвовал в Сталинградской битве, 	   в ходе которой зарекомендовал себя асом. Последний свой воздушный бой провёл 29 апреля 1945 года над находящимся 	   в черте Берлина аэродромом «Темпельхоф»,		сбив «Фокке-Вульф 190» (30-я одиночная воздушная победа, 49-я вместе с групповыми).",
    awards: [
      " медаль «Золотая Звезда» Героя Советского Союза (№ 1136, 24 августа 1943, № 66, 29 июня 1945);",
      "  медаль «Золотая Звезда» Героя Советского Союза (№ 1136, 24 августа 1943, № 66, 29 июня 1945);",
      "ордена Красного Знамени (31 июля 1942, 13 октября 1943, 20 апреля 1945, 3 февраля 1953); ",
      "Орден Александра Невского ",
      "  Орден Отечественной войны 1-й степени  ",
      "орден Красной Звезды ",
      "орден «Знак Почёта» (31 июля 1961);",
      "медали.",
      "Почётный крымчанин (26 апреля 2000, посмертно)",
      "Почётный гражданин города Алупка (2010, посмертно)"
    ]
  },
  {
    photoUrl: "assets/images/4.jpg",
    name: "Раиса Ермолаевна Аронова",
    description:
      "Родилась 10 февраля 1920 года в Саратове в семье рабочего-железнодорожника.		Окончила среднюю школу № 95, аэроклуб, два курса Саратовского института механизации сельского хозяйства имени М. И. Калинина. В 1940 году перевелась в Московский авиационный институт.				В октябре 1941 года пошла в Красную Армию. В 1942 году окончила Энгельсскую военную школу лётчиков. В том же году была принята в ВКП(б).				С мая 1942 года до победы над Германией в Великой Отечественной войне сражалась в составе 4-й воздушной армии на Северо-Кавказском, 4-м Украинском и 2-м Белорусском фронтах. Принимала участие в обороне Кавказа, освобождении Крыма, Белоруссии, Польши, разгроме врага на территории Германии.				Ранена 23 марта 1943 года. Рядом с бортом её самолета разорвался зенитный снаряд. В результате она получила 34 осколочных ранения. 17 крупных осколков хирургам удалось удалить, 17 поменьше до конца жизни остались у неё в боку. Они и стали причиной её преждевременного ухода из жизни — закапсулировались и вызвали серьезное заболевание крови, которое и привело к смерти спустя 39 лет. В 1943 году, она смогла восстановиться и продолжала летать, несмотря на боль.				За боевые отличия награждена двумя орденами Красного Знамени (1943, 1945), орденами Отечественной войны 1-й степени (1944), Красной Звезды (1942), медалями «3а оборону Кавказа» и «За победу над Германией в Великой Отечественной войне 1941—1945 гг.».",
    awards: [
      " Медаль «Золотая Звезда» Героя Советского Союза ",
      "Орден Ленина  ",
      "Два ордена Красного Знамени   ",
      "  Орден Отечественной войны 1-й степени  ",
      "орден Красного Звезды   ",
      "медали."
    ]
  },
  {
    photoUrl: "assets/images/5.jpg",
    name: "Курманин Вадим Матвеевич",
    description:
      "В 1942 году он окончил Краснодарское объединённое военное авиационное училище. С июня 1943 года — на фронтах Великой Отечественной войны.К апрелю 1945 года гвардии лейтенант Вадим Курманин был старшим лётчиком 43-го гвардейского штурмового авиаполка (230-й штурмовой авиадивизии, 4-й воздушной армии, 2-го Белорусского фронта). К тому времени он совершил 133 боевых вылета на штурмовку скоплений боевой техники и живой силы противника,нанеся ему большие потерь",
    awards: [
      " Медаль «Золотая Звезда» Героя Советского Союза ",
      "Орден Ленина  ",
      "Два ордена Красного Знамени   ",
      "  Орден Отечественной войны 1-й степени  ",
      "  Орден Отечественной войны 2-й степени  ",
      "Два ордена Красного Звезды   ",
      "медали."
    ]
  },
  {
    photoUrl: "assets/images/6.jpg",
    name: "Алейников Александр Георгиевич",
    description:
      "В боях Великой Отечественной войны участвовал с октября 1944 года. В бою 5 апреля 1945 года старшина Алейников первым ворвался во вражескую траншею и лично уничтожил несколько фашистов и пулемётную точку.		Во время боя в населённом пункте Гросс-Фридрихсберг под Кёнигсбергом, взобравшись по водосточной трубе на второй этаж дома, вместе с двумя бойцами забросал гитлеровцев гранатами	   . 11 апреля при отражении контратаки противника был ранен, но не покинул поля боя	   29 июня 1945 года А. Г. Алейникову было присвоено звание Героя Советского Союза.",
    awards: [
      " Героя Советского Союза ",
      "Орден Ленина  ",
      "Два ордена Красного Знамени   ",
      " Орден Отечественной войны 1-й степени  ",
      " Орден Отечественной войны 2-й степени  ",
      "медали."
    ]
  },
  {
    photoUrl: "assets/images/7.jpg",
    name: "Дикун Георгий Васильевич",
    description:
      "Вскоре после начала Великой Отечественной войны был переведён командиром взвода в 120-й танковый полк 60-й танковой дивизии, которая формировалась в Биробиджане.		В октябре 1941 года дивизия была переброшена на Ленинградский фронт, где в первых числах ноября 1941 года Георгий Дикун и принял боевое крещение в ходе Тихвинской оборонительной операции.		С конца ноября воевал на Северо-Западном фронте заместителем командира роты тяжёлых танков в том же полку и в той же дивизии. В марте 1942 года дивизия была расформирована и на её базе создана 60-я танковая бригада, в которой		Г. Дикун стал офицером связи в штабе бригады, в июне 1942 года назначен заместителем командира батальона. В октябре 1942 года вступил в ВКП(б). В декабре 1942 года был тяжело ранен и эвакуирован в эвакогоспиталь в Казань. После выздоровления в марте 1943 года перспективного боевого командира направили учиться,		и в июле 1943 года он окончил Ленинградскую бронетанковую школу.		С июля 1943 по декабрь 1944 года — заместитель командира 420-го танкового батальона, затем командир танкового батальона 103-й танковой бригады 3-го танкового корпуса 2-й танковой армии на Центральном, 1-м Украинском и 2-м Украинском фронтах.		В этой бригаде прошёл Орловскую фронтовую, Черниговско-Припятскую фронтовую (составная часть битвы за Днепр), Корсунь-Шевченковскую фронтовую и Уманско-Ботошанскую фронтовую наступательные операции.		Летом 1944 года в составе бригады участвовал в Люблин-Брестской наступательной операции 1-го Белорусского фронта.		За неполные полтора года боёв в составе бригады награждён тремя боевыми орденами.		Был ранен в одном из боёв 1943 года, но остался в строю",
    awards: [
      " Герой Советского Союза (24.03.1945)",
      "Орден Ленина (24.03.1945) ",
      "Орден Александра Невского ",
      " два Орден Отечественной войны 1-й степени  ",
      "Три ордена Красного Знамени (3.10.1943, 20.08.1944, 31.03.1945) ",
      " орден Красной Звезды ;",
      "медали."
    ]
  },
  {
    photoUrl: "assets/images/8.jpg",
    name: "Яксаргин Василий Владимирович",
    description:
      "На фронте в Великую Отечественную войну с июня 1941 года.		Был помощником командира танковой роты, заместителем и командиром роты управления, заместителем и командиром танкового батальона.		Воевал на Западном, Юго-Западном, Сталинградском, Донском, Брянском, Воронежском, 1-м Украинском фронтах.	   	   Участвовал в боях в районе городов Минск, Орша, Вязьма, был в окружении на территории Смоленской области в 1941 году - попал в плен.		В марте 1942 года помощник командира роты 127-го танкового полка воентехник 2-го ранга Яксаргин В.В. освобожден из плена.	   	   После освобождения участвовал:	   	   в боях в районе станции Волоконовка, в боях на Дону севернее Сталинграда, в окружении и ликвидации Сталинградской гитлеровской группировки — в 1942—1943 годах;	   в боях на Курско-Орловской дуге в районе посёлка Становой Колодезь, в форсировании Днепра, в боях за город Киев, в освобождении города Фастов, в отражении контрударов противника в районе города Брусилов — в 1943 году;	   в Житомирско-Бердичевской, Проскуровско-Черновицкой и Львовско-Сандомирской операциях, в том числе в освобождении городов Проскуров (Хмельницкий), Тернополь, Перемышль, в форсировании рек Сан и Висла, в боях на Сандомирском плацдарме — в 1944 году;	   в Висло-Одерской операции, в том числе в освобождении городов Шидлув, Радомско, Глейвиц (Гливице), в завоевании плацдарма на Одере в районе города Оппельн (Ополе), в Берлинской операции, в том числе в форсировании рек Нейсе, Шпрее, канала Тельтов и уличных боях в Берлине, в освобождении Праги — в 1945 году.	   В феврале 1945 года был ранен в бою.",
    awards: [
      "Герой Советского Союза ",
      " орден Ленина ;",
      "Два Орден Красного Знамени  ;",
      "Орден Александра Невского  ",
      " Орден Отечественной войны 1-й степени  ;",
      "Три орден Красной Звезды ;",
      "медали."
    ]
  },
  {
    photoUrl: "assets/images/9.jpg",
    name: "Третьяк Иван Лукич",
    description:
      "Особенно отличился, командуя 21-й гвардейской Житомирской Краснознамённой танковой бригадой во время Корсунь-Шевченковской операции, а также в боях в районе Ясс и Плоешти на территории Румынии 20-31 августа 1944 года.		я В дни наступления на город Фокшаны И. Л. Третьяк мастерски провёл тактический манёвр бригады, одним из первых преодолел на танке укрепления противника.		 Ворвавшись в село, он разгромил группу противников, которая обстреливала переправу.		 Продуманные и решительные действия командира бригады обеспечили успешное форсирование реки Серет на юго-запад от города Фокшаны.		 Во взаимодействии с другими подразделениями наших войск танковая бригада гвардии подполковника И. Л. Третьяка участвовала в освобождении многих городов Румынии, громила врага в Венгрии, Австрии, Чехословакии.		 Танкисты И. Л. Третьяка трое суток вели ожесточённые бои с врагом на ближних подступах к Будапешту. На одной из станций гвардейцы захватил и эшелон с шестьюдесятью танками. Во время боя за станцию танк командира бригады был подбит, 		а сам И. Л. Третьяк — ранен, но продолжал руководить боем вплоть до разгрома вражеской группировки.",
    awards: [
      " Герой Советского Союза",
      " орден Ленина",
      " Орден Красного Знамени ",
      "Орден Суворова ",
      "два Орден Отечественной войны 2-й степени ",
      "орден Красной Звезды "
    ]
  },
  {
    photoUrl: "assets/images/10.jpg",
    name: "Николай Степанович Кохов",
    description:
      "С марта 1942 года — на фронтах Великой Отечественной войны. Принимал участие в боях на Юго-Западном, Сталинградском, 3-м Украинском и 3-м Прибалтийском фронтах.		Участвовал в освобождении Ростовской области, Украинской и Молдавской ССР, Прибалтики.	   К сентябрю 1944 года майор Николай Кохов был штурманом 955-го штурмового авиаполка 305-й штурмовой авиадивизии 14-й воздушной армии 3-го Прибалтийского фронта.		К тому времени он совершил 197 боевых вылетов на штурмовку скоплений боевой техники и живой силы противника, его важных объектов, нанеся ему большие потери.	   Указом Президиума Верховного Совета СССР от 23 февраля 1945 года за «образцовое выполнение боевых заданий командования на фронте борьбы с немецкими захватчиками и проявленные при этом мужество и героизм» майор		Николай Кохов был удостоен высокого звания Героя Советского Союза с вручением ордена Ленина и медали «Золотая Звезда» за номером 5326	   ",
    awards: [
      " Герой Советского Союза",
      "Два ордена Ленина ",
      " Орден Красного Знамени ",
      "Орден Александра Невского ",
      " Орден Отечественной войны 1-й степени ;",
      "орден Красной Звезды "
    ]
  },
  {
    photoUrl: "assets/images/11.jpg",
    name: "Журба Иван Тимофеевич",
    description:
      "В июне 1941 года был призван на службу в Рабоче-крестьянскую Красную Армию. В 1943 году он окончил Ворошиловградскую военную авиационную школу пилотов.		С сентября 1943 года — на фронтах Великой Отечественной войны.К сентябрю 1944 года старший лейтенант Иван Журба командовал звеном 237-го штурмового авиаполка 305-й штурмовой авиадивизии 14-й воздушной армии 3-го Прибалтийского фронта.		 К тому времени он совершил 108 боевых вылетов на разведку и штурмовку скоплений боевой техники и живой силы противника, его объектов и коммуникаций, нанеся вражеским войскам ощутимый урон.		Указом Президиума Верховного Совета СССР от 23 февраля 1945 года за «образцовое выполнение боевых заданий командования на фронте борьбы с немецкими захватчиками и проявленные при этом мужество и героизм»		 старший лейтенант Иван Журба был удостоен высокого звания Героя Советского Союза с вручением ордена Ленина и медали «Золотая Звезда» за номером 7362",
    awards: [
      " Герой Советского Союза",
      "Два ордена Ленина ",
      " Орден Красного Знамени ",
      "Орден Александра Невского ",
      " Орден Отечественной войны 1-й степени ;",
      " два ордена Красной Звезды ",
      "медали"
    ]
  },
  {
    photoUrl: "assets/images/12.jpg",
    name: "Старостин Николай Фёдорович",
    description:
      "В 1939 году был призван в Красную армию и направлен в авиационное училище. В 1940 году окончил Краснодарское военно-авиационное училище, службу проходил в бомбардировочном полку у западных границ страны.		Участник Великой Отечественной войны с июня 1941 года. Первый боевой вылет на бомбардировку железнодорожных станций противника совершил 22 июня. Воевал на Калининском, Брянском, Центральном, 1-м Белорусском фронтах. Во время наступления под Москвой совершал до 5-6 вылетов в день. Стал настоящим мастером бомбометания. В 1942 году вступил в ВКП(б).		Более 50 раз летал в тыл врага и всегда добывал ценнейшие данные о передвижении войск противника, о скоплении танков, артиллерии, живой силы врага, о его аэродромах. Под его руководством была проведена аэрофотосъемка Ржевского плацдарма немцев, с его системой сложных укреплений и опорных пунктов. Данные разведки и фотосъемки, добытые Старостиным, широко использовались командованием при подготовке штурма Ржевской обороны немцев.		К октябрю 1943 года штурман эскадрильи старший лейтенант Старостин совершил 236 боевых вылетов на бомбардировку скоплений войск и других объектов противника. В воздушном бою сбил вражеский самолёт.		Указом Президиума Верховного Совета СССР «О присвоении звания Героя Советского Союза офицерскому составу военно-воздушных сил Красной Армии» от 4 февраля 1944 года за «образцовое выполнение приказов командования на фронте борьбы с немецкими захватчиками и проявленные при этом отвагу и геройство» старшему лейтенанту Старостину Николаю Фёдоровичу присвоено звание Героя Советского Союза с вручением ордена Ленина и медали «Золотая Звезда»[1].		В составе своего полка участвовал в боях за освобождение Белоруссии, Польши, штурмовал Берлин. К концу войны совершил около 500 боевых вылетов. На его счету было 20 подбитых танков, бронепоезд, несколько железнодорожных эшелонов, десятки автомашин, артиллерийские батареи, дзоты, пулемётные огневые точки.		Погиб после окончания боевых действий. 7 мая 1945 год во время охоты в лесу подорвался на мине. Похоронен в городе Пыжице",
    awards: [
      "Герой Советского Союза",
      " два ордена Ленина ",
      " Орден Красного Знамени ",
      " Орден Отечественной войны 1-й степени ;",
      "орден Красной Звезды "
    ]
  },
  {
    photoUrl: "assets/images/13.jpg",
    name: "Марина Смирнова Васильевна",
    description:
      "Работала учительницей в деревне Полюжье, лётчиком-инструктором в аэроклубе. В Красной армии с ноября 1941 года.		В 1942 году окончила курсы лётчиков при Энгельсской военной авиационной школе пилотов. В действующей армии с мая 1942 года.		Член ВКП(б) с 1943 года.	   Командир эскадрильи 46-го гвардейского ночного бомбардировочного авиационного полка (325-я ночная бомбардировочная авиадивизия, 4-я воздушная армия, 2-й Белорусский фронт) гвардии капитан М. В. Смирнова к августу 1944 года совершила 805 ночных боевых вылетов на бомбардировку войск противника, нанесла врагу большой урон.		Из 25 тысяч боевых вылетов на долю эскадрильи Смирновой приходилось 10 тысяч вылетов, сама она 940 раз летала на ночные боевые задания.	   	   Указом Президиума Верховного Совета СССР от 26 октября 1944 года за образцовое выполнение боевых заданий командования и проявленные мужество и героизм в боях с немецко-фашистскими захватчиками командиру эскадрильи		гвардии капитану Смирновой Марии Васильевне было присвоено звание Героя Советского Союза с вручением ордена Ленина и медали «Золотая Звезда».",
    awards: [
      "Герой Советского Союза",
      " орден Ленина ",
      "Три Ордена Красного Знамени ",
      "Орден Александра Невского ",
      " Орден Отечественной войны 1-й степени ;",
      "орден Красной Звезды ",
      "медали  ",
      "почётный гражданин Твери. "
    ]
  },
  {
    photoUrl: "assets/images/14.jpg",
    name: "Вера Лукьяновна Белик",
    description:
      "В Красной армии с 1941 года. Освоила специальность штурмана. В действующей армии с мая 1942 года. Член ВКП(б) с 1942 года.		Штурман звена 46-го гвардейского ночного бомбардировочного авиационного полка (325-я ночная бомбардировочная авиационная дивизия, 4-я воздушная армия, 2-й Белорусский фронт).		Участвовала в битве за Кавказ, освобождении Кубани, Крыма и Белоруссии, наносила бомбовые удары по военным объектам врага в Восточной Пруссии. К августу 1944 года она совершила 813 ночных вылета.		В ночь на 25 августа 1944 года самолёт, в котором В. Белик вместе с командиром экипажа гвардии лейтенантом Макаровой Т. П. возвращалась с боевого задания, северо-западнее города Замбрув (Польша) был атакован и сбит истребителем противника. Самолёт загорелся и горящим упал на землю, экипаж погиб.		 ",
    awards: [
      "Герой Советского Союза",
      " орден Ленина ",
      " Орден Красного Знамени ",
      " Орден Отечественной войны 1-й степени ;",
      "орден Красной Звезды "
    ]
  },
  {
    photoUrl: "assets/images/15.jpg",
    name: "Екатерина Васильевна Рябова",
    description:
      "В октябре 1941 года Екатерина Рябова была зачислена в 588-й авиаполк, который был полностью женским. Окончила курсы штурманов при Энгельсской военной авиационной школе.		27 мая 1942 года в составе полка прибыла на фронт. Была назначена штурманом звена. 29 декабря 1942 года за выполнение 151 боевого вылета на самолете У-2 стрелок-бомбардир звена старшина Рябова награждена орденом Красной Звезды. Долгое время летала в экипаже Надежды Поповой, с которой они очень подружились. 25 октября 1943 года за выполнение 614 боевых ночных вылетов штурман звена гвардии лейтенант Рябова была награждена орденом Красного Знамени. С 1943 года член ВКП(б)/КПСС.				В 1943 году для пополнения лётного состава гвардейскому полку было разрешено создать свою учебно-боевую эскадрилью. В октябре 1943 штурманом эскадрильи была назначена Екатерина Рябова, командиром — Марина Чечнева. Учёба осуществлялась в бою. Чечнева летала на задания с молодыми штурманами, Рябова — с лётчицами. 26 апреля 1944 года приказом командования 4-й воздушной армии за выполнение 685 боевых ночных вылетов штурман эскадрильи гвардии лейтенант Рябова награждена орденом Отечественной войны I степени.",
    awards: [
      "Герой Советского Союза",
      " орден Ленина ",
      " Орден Красного Знамени ",
      " Орден Отечественной войны 1-й степени ;",
      "орден Красной Звезды ",
      "медали. "
    ]
  },
  {
    photoUrl: "assets/images/16.jpg",
    name: "Наталья Фёдоровна Меклин",
    description:
      "В начале октября 1941 года по личному заявлению была зачислена в 588-й ночной легкобомбардировочный авиационный полк, сформированный по инициативе известной лётчицы Героя Советского Союза М. М. Расковой[К 1]. В 1942 году окончила Энгельсскую военную авиационную школу пилотов.		На фронтах Великой Отечественной войны находилась с мая 1942 года. Была начальником связи эскадрильи, лётчиком, старшим лётчиком и командиром звена авиационного полка. Воевала на Южном, Северо-Кавказском, 4-м Украинском и 2-м Белорусском фронтах. В общей сложности на счету командира звена Натальи Меклин — 980 боевых вылетов, во время которых на врага было сброшено 147 тонн бомб.				Указом от 23 февраля 1945 года гвардии лейтенанту Меклин Наталии Фёдоровне было присвоено звание Героя Советского Союза (медаль «Золотая звезда» № 4855)[К 2]. После войны продолжала службу в ВВС командиром звена (в Северной группе войск, Польша), а с октября 1945 года уволилась в запас		",
    awards: [
      " медаль «Золотая Звезда» Героя Советского Союза ",
      " орден Ленина ",
      " Три ордена Красного Знамени  ",
      "  Орден Отечественной войны 1-й степени  ",
      "  Орден Отечественной войны 2-й степени  ",
      "орден Красной Звезды ",
      "орден «Знак Почёта» ",
      "15 медалей."
    ]
  },
  {
    photoUrl: "assets/images/17.jpg",
    name: "Ирина Фёдоровна Себрова",
    description:
      "Окончила Московский техникум мукомольной промышленности. Работала на фабрике. В 1938 году окончила московский аэроклуб, в 1940 году — Херсонскую военную авиационную школу пилотов. Была лётчиком-инструктором во Фрунзенском аэроклубе города Москвы. К этому времени, в двадцать три года, она была уже довольно опытным инструктором, выпустив за два года работы во Фрунзенском аэроклубе Москвы несколько групп курсантов.		В РККА с октября 1941 года. В 1942 году окончила курсы при военной авиационной школе пилотов. На фронтах Великой Отечественной войны с мая 1942 года. Командир звена 46-го гвардейского ночного бомбардировочного авиационного полка (325-я ночная бомбардировочная авиадивизия, 4-я воздушная армия, 2-й Белорусский фронт) гвардии старший лейтенант Себрова И. Ф. совершила 1004 боевых ночных вылета на бомбардировку войск противника[1].		Ира Себрова сделала в полку больше всех вылетов — 1004, даже произнести страшно. Я думаю, что во всём мире не найти лётчика с таким количеством боевых вылетов. А была она тихой, скромной, вроде бы и не яркой девушкой. После войны рассказал мне муж Себровой — Саша Хоменко, как перегнал он Ирину машину из ремонта в полк. Саша служил тогда инженером в ремонтной мастерской (ПАРМ). Туда мы отправляли самолёты, когда был выработан моторесурс или машина требовала ремонта после обстрела. Самолёт восстанавливали и возвращали на фронт.		Прилетел Саша на аэродром в Ивановской, и Ира стала опробовать машину. Саша сел во вторую кабину. Договорились, что петлю она делать не будет, поэтому он не привязался. И вдруг он видит, что она начала делать петлю, забыла, что он не привязан. «Я вцепился в борта кабины, когда был вниз головой — чуть не выпал».		Очевидно, Ира вспомнила о нём, быстро снизилась, села на площадку, выскочила из кабины и пошла на КПП… «Я зарулил машину на стоянку, — продолжал рассказывать Саша, — пошёл тоже на командный пункт. Вижу, Ира сидит на скамейке, руками за голову держится и говорит мне: „Если бы ты выпал, что бы я сказала командиру полка?“…».		— Ракобольская И. В., Кравцова Н. Ф. Нас называли ночными ведьмами. 2005",
    awards: [
      " медаль «Золотая Звезда» Героя Советского Союза ",
      " орден Ленина ",
      " Три ордена Красного Знамени  ",
      "  Орден Отечественной войны 1-й степени  ",
      "  Орден Отечественной войны 2-й степени  ",
      "орден Красной Звезды ",
      " медали."
    ]
  },
  {
    photoUrl: "assets/images/18.jpg",
    name: "Гашева Руфина Сергеевна",
    description:
      "В 1941 году окончила 2 курса механико-математического факультета Московского государственного университета. На третьем курсе, в октябре 1941 года Гашева добилась назначения в полк лёгких ночных бомбардировщиков. В 1942 году Гашева окончила курсы штурманов при Энгельсской военной авиационной школе пилотов. Служила сначала в качестве штурмана самолета, а затем штурмана эскадрильи.[1]		К декабрю 1944 года Гашева совершила 823 боевых вылета, нанеся противнику значительный урон в боевой технике и живой силе.  два была асбита вражескими зенитчиками.		Указом Президиума Верховного Совета СССР от 23 февраля 1945 года гвардии старшему лейтенанту Гашевой Руфине Сергеевне «за образцовое выполнение боевых заданий командования на фронте борьбы с немецкими захватчиками и проявленные при этом отвагу и геройство» было присвоено звание Героя Советского Союза с вручением ордена Ленина и медали «Золотая Звезда»",
    awards: [
      "медаль «Золотая Звезда» Героя Советского Союза ",
      "орден Ленина ",
      "Два ордена Красного Знамени  ",
      "Два Ордена Отечественной войны 1-й степени ",
      "Два ордена Красной Звезды ",
      " медали.",
      "Медаль «За оборону Кавказа».",
      "Медаль «За победу над Германией в Великой Отечественной войне 1941—1945 гг.»",
      "Медаль «За освобождение Варшавы»",
      "Медали"
    ]
  },
  {
    photoUrl: "assets/images/19.jpg",
    name: "Mарат Mазей",
    description:
      "Ребенок героически лишился жизни во имя победы над фашистами. Марат родился в 1929 году в селе рядом с Минском. Его отец был убежденным коммунистом, на работе его ценили и уважали. Но в 1935 году отец мальчика был арестован правительством по доносу и отправлен на Дальний Восток, где после пропал без вести. Мать Марата Анну уволили с работы, отчислили из института, лишили жилья. До войны арестовывали несколько раз, так как Анна сразу занялась подпольной деятельностью. В 1942 ее повесили гестаповцы.      Смерть матери породила ненависть в сердце Марата. Он вместе со своей сестрой Ариадной ушел в партизанский отряд, где наравне со взрослыми вел борьбу против фашизма. Уже в 1943 году Марат ходил в атаку на немцев. Он был ловкий и юркий, что помогало ему в разведке. Его часто посылали за ценными сведениями, и мальчик всегда возвращался с важной информацией. В 1943 году его отряд был окружен, но мальчик смог прорваться через кольцо врага и привести помощь. Ариадна в этом оцеплении отморозила ноги, ее самолетом вывезли в тыл. Марат остался служить в партизанском отряде и еще не раз добывал ценную информацию. Наравне со взрослыми Марат сражался за Родину, не жалея своих сил. Он смело выполнял самые сложные задания, а его юность, ловкость, ум помогали в сложных ситуациях не только самому мальчику, но и всему отряду.      В 1944 году, находясь на очередном задании, Марат оказался в окружении врага. Пока не кончились патроны, Марат мужественно отстреливался от немцев.  У ребенка в запасе была граната. Он подорвал ею сам себя, захватив несколько приближающихся фашистов. Уже в таком юном возрасте ребенок был смелым и мужественным человеком. Сдаться фашистам для него было страшнее, чем погибнуть. Такой подвиг – поступок смелого и очень сильного человека.",
      
    awards: [
      " медаль «Золотая Звезда» Героя Советского Союза  (посмертно) ",
      " орден Ленина ",
      "  Орден Отечественной войны 1-й степени  ",
      "медаль «За отвагу»",
      "медаль «За боевые заслуги»."
    ]
  },
  {
    photoUrl: "assets/images/20.jpg",
    name: "Cаша Ковалев",
    description:
      " В 1937 году его родители были репрессированы (отец приговорён к расстрелу, мать к 8 годам лагерей).		После ареста родителей воспитывался в семье тёти — переводчицы Риты Райт-Ковалёвой (Черномордик) и капитана Северного флота Николая Петровича Ковалёва.		В начале Великой Отечественной войны был эвакуирован в Ярославскую область, а позже вернулся к месту службы Н. П. Ковалёва в Архангельск, где поступил на катер.		В 1942 году поступил в Соловецкую школу юнг под именем Александр Николаевич Ковалёв в роту подготовки мотористов. После её окончания был распределён на эсминец «Громкий»[3], а после — на торпедный катер. Участвовал в 20 боевых операциях Северного флота[4].		8 мая 1944 года торпедный катер ТК-209, на котором служил Саша Ковалёв, под командованием А. И. Кисова атаковал группу кораблей противника, после чего сам подвергся атаке немецкой авиации, в результате которой осколком снаряда был пробит радиатор двигателя, из которого стала поступать горячая вода, перемешанная с маслом и бензином. Саша Ковалёв прикрыл пробоину своим телом, получив сильнейшие ожоги. При этом удалось сохранить ход катера, мотор не взорвался и было спасено два экипажа торпедных катеров, так как в этот момент на катере находилась ещё одна команда катерников, подобранная с только что уничтоженного германской авиацией такого же катера ТКА-217. 9 мая 1944 года Саша Ковалёв погиб от взрыва германской фосфорной мины, не разорвавшейся накануне на катере после бомбардировки его авиацией противника",
    awards: [
      " Орден Отечественной войны 1-й степени  (посмертно)  ",
      "орден Красной Звезды ",
      "медаль Ушакова"
    ]
  },
  {
    photoUrl: "assets/images/21.jpg",
    name: "Голиков Леонид Александрович",
    description:
      "Бригадный разведчик 67-го отряда 4-й Ленинградской партизанской бригады, действовавшей на территории Новгородской и Псковской областей. Участвовал в 27 боевых операциях. Особенно отличился при разгроме немецких гарнизонов в деревнях Апросово, Сосницы и Север.		Всего им уничтожено: 78 немцев, 2 железнодорожных и 12 шоссейных мостов, 2 продовольственно-фуражных склада и 10 автомашин с боеприпасами. Сопровождал обоз с продовольствием (250 подвод) в блокадный Ленинград. За доблесть и отвагу награждён орденом Ленина, орденом Красного Знамени, медалью «За отвагу» и медалью Партизану Отечественной войны II степени посмертно.		13 августа 1942 года, возвращаясь из разведки от шоссе «Луга—Псков», неподалёку от деревни Варницы Струго-Красненского района гранатой подорвал легковую машину, в которой находился немецкий генерал-майор инженерных войск Рихард фон Виртц. В донесении командира отряда указывалось, что Голиков в перестрелке застрелил из автомата генерала, а также сопровождавших его офицера и шофёра, однако после этого, в 1943—1944 годах, генерал Виртц командовал 96-й пехотной дивизией, а в 1945 году был взят в плен американскими войсками. В штаб бригады разведчик доставил портфель с документами. В их числе были чертежи и описание новых образцов немецких мин, инспекционные донесения вышестоящему командованию и другие важные бумаги военного характера.		24 января 1943 года в бою в селе Острая Лука Псковской области Леонид Голиков погиб. Представлен к званию Героя Советского Союза посмертно",
    awards: [
      "Героя Советского Союза  (посмертно)",
      " орден Ленина ",
      "Два ордена Красного Знамени  ",
      "медаль «За отвагу»",
      "Медаль «Партизану Отечественной войны» II степени."
    ]
  }
];

const modal = document.querySelector(".modal");

const sliderItems = document.querySelectorAll(".slider__item");
const modalClose = document.querySelector(".modal__close");

sliderItems[0].addEventListener("click", () => {
  modal.classList.remove("modal-hidden");
});

modalClose.addEventListener("click", () => {
  modal.classList.add("modal-hidden");
});

const sliderMain = document.querySelector(".slider__main");

sliderMain.addEventListener("click", (event) => {
  const { id } = event.target;
  const manData = modalData[id];
  const img = modal.querySelector(".modal__img");
  const header = modal.querySelector(".name");
  const context = modal.querySelector(".context");
  const awards = modal.querySelector(".awards");

  const awardsChilds = awards.querySelectorAll(".awards__item");

  if (awardsChilds) {
    awardsChilds.forEach((ch) => {
      ch.parentNode.removeChild(ch);
    });
  }

  img.src = manData.photoUrl;
  header.innerText = manData.name;
  context.innerText = manData.description;

  manData.awards.forEach((aw) => {
    const li = document.createElement("li");
    li.classList.add("awards__item");
    li.innerText = aw;
    awards.appendChild(li);
  });

  modal.classList.remove("modal-hidden");
});

//Audio

let soundButton = document.querySelector(".soundbutton");
let audio = document.querySelector(".audio");

soundButton.addEventListener("click", (e) => {
  soundButton.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  soundButton.classList.contains("paused") ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};

const config = {
  type: "carousel",
  startAt: 0,
  perView: 2,
  breakpoints: {
    600: {
      perView: 1
    }
  }
};
new Glide(".glide", config).mount();
