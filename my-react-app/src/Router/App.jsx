import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Booking from "../pages/Booking";
import Register from "./Register";
import Excursions from "../pages/Excursions";
import Login from "./Login";



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
} from "react-router-dom";
import "./App.css";


const countries = [
  {
    id: "italy",
    name: "Италия",
    desc: "Италия славится своим искусством, кухней, архитектурой и историей. Здесь находится Рим, Венеция, Флоренция и множество красивейших городов.",
    img: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/xd7p0jzhahel9pxtdjol",
    facts: [
      "В Риме находится Колизей – одно из чудес света.",
      "Пицца родом из Неаполя.",
      "В Венеции более 400 мостов.",
    ],
  },
  {
    id: "madagaskar",
    name: "Мадагаскар",
    desc: "Австронезийские переселенцы прибыли на остров на каноэ, предположительно, с Калимантана, Больших Зондских островов или Филиппин; малагасийский язык — государственный язык Мадагаскара ",
    img: "https://www.benns.no/media/9767/madagascar-beautiful-baobab-trees-at-sunset-at-the-avenue-of-the-baobabs-shutterstock_259688654-cut.jpg",
    facts: [
      "Столица — Антананариву..",
      "Мадагаскаре возникли между 350 годом до н. э. и 550 годом н. э.",
      "Площадь — 587 тыс. км², население — 28,2 млн чел.",
    ],
  },

  {
    id: "eswatini",
    name: "Эсватини",
    desc: "Страна лежит на плато Велд, которое уступами снижается с запада на восток. Самая высокая точка — гора Эмлембе (1862 м)",
    img: "https://basetop.ru/wp-content/uploads/2020/01/eo0nj1oh.jpg",
    facts: [
      "19 апреля 2018 года король Мсвати III объявил, что Королевство Свазиленд переименовано в Королевство Эсватини",
      "Глава государства — король, с 1986 года — Мсвати III.",
      "В 1979 году были восстановлены непрямые выборы в парламент.",
    ],
  },
  {
    id: "laos",
    name: "Laos",
    desc: "В Лаосе однопартийная система, управление страной осуществляет Народно-революционная партия Лаоса (НРПЛ) коммунистического типа ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bus_from_Vientiane_to_Luang_Prabang_%2812236800914%29.jpg/2560px-Bus_from_Vientiane_to_Luang_Prabang_%2812236800914%29.jpg",
    facts: [
      "От 50 до 60 % населения исповедует буддизм Тхеравады, 1 % — буддизм махаяны",
      "Лаос разделён на 16 провинций (кхвэнг), столичную префектуру и столичный муниципалитет",
      "ВВП на душу населения в 2014 году — 5 тыс. USD (168-е место в мире",
    ],
  },
  {
    id: "bhutan",
    name: "бутан",
    desc: "На севере граничит с КНР, на западе — с индийским штатом Сикким, на востоке — со штатом Аруначал-Прадеш, на юге — со штатом Ассам, в котором ведётся многолетняя гражданская война, на юго-западе — с Западной Бенгалией. ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tiger_Nest_05.JPG/500px-Tiger_Nest_05.JPG",
    facts: [
      "Вторая высочайшая точка — Джомолхари высотой 7314 м — находится у долины Чумби",
      ". Более 50 % земель страны расположено выше 3 000 м, 20 % — покрыто ледниками и вечными снегами.",
      "В Бутане был коронован пятый король Джигме Кхесар Намгьял Вангчук. ",
    ],
  },  {
    id: "rim",
    name: "Рим",
    desc: " Административный центр области Лацио и одноимённой территориальной единицы Рим, приравненной к провинции. Расположен на реке Тибр. Часть территории Рима относится к государству Ватикан.",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Rome_Montage_2017.png",
    facts: [
      "Первые поселения на месте современного Рима появились задолго до традиционно приводимой даты основания города ",
      "В IV веке до н. э. на Рим совершили набег галлы, разрушившие древнюю стену",
      "В 476 году Одоакр низложил последнего западно-римского императора",
    ],
  },
  {
    id: "vatican",
    name: "Vatican",
    desc: " ипломатические миссии иностранных государств аккредитуются при Святом Престоле, а не при городе-государстве Ватикан. ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ватикан.jpg/2560px-Ватикан.jpg",
    facts: [
      "Самое маленькое государство в мире.",
      "Центр католической церкви и резиденция Папы Римского.",
      "Площадь — всего 0.44 км².",
    ],
  },
  {
    id: "lesota",
    name: "lesota",
    desc: " государство-анклав в Южной Африке, полностью окружённое территорией ",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/The_American_Museum_journal_%28c1900-%281918%29%29_%2818159633915%29.jpg",
    facts: [
      "Находится полностью внутри Южной Африки.",
      "Все население страны живет выше 1400 метров над уровнем моря.",
      "Часто называют Королевство в небесах.",
    ],
  },
  {
    id: "Северная Корея ",
    name: "Северная Корея ",
    desc: "государство в Восточной Азии, широко известное под неофициальным названием Се́верная Коре́я ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pyongyang_western_view_April_2010.jpg/2560px-Pyongyang_western_view_April_2010.jpg",
    facts: [
      "Закрытое тоталитарное государство с уникальной идеологией (чучхе).",
      "Практически полностью изолирована от остального мира.",
      "Имеет уникальную культуру, основанную на культе личности.",
    ],
  },
  {
    id: "Исландия",
    name: "Исландия",
    desc: " островное государство, расположенное на западе Северной Европы в северной части Атлантического океана ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Северное_сияние_в_Исландии.jpg/500px-Северное_сияние_в_Исландии.jpg",
    facts: [
      "Нет армии.",
      "Более 80% энергии поступает из геотермальных и гидроисточников.",
      "Часто кажется лунным пейзажем из-за лавовых полей.",
    ],
  },
  {
    id: "Лихтенштейн",
    name: "Лихтенштейн",
    desc: " карликовое государство в Центральной Европе. Площадь — 160 км ",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Schlossvaduz.jpg",
    facts: [
      "Крошечное княжество между Швейцарией и Австрией.",
      "Один из самых богатых и безопасных уголков Европы.",
      "Можно арендовать всю страну на день (буквально!).",
    ],
  },
  {
    id: "Новая Зеландия",
    name: "Новая Зеландия",
    desc: "  государство в Полинезии. Население, по итогам официальной переписи 2018 года, составляет около 4,7 миллиона человек ",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/White_Island_n.jpg",
    facts: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/White_Island_n.jpg",
      "Кристально чистые реки и редкая флора.",
      "Чистота и экологичность на высшем уровне.",
    ],
  },
  {
    id: "Перу",
    name: "Перу",
    desc: " Граничит на северо-западе с Эквадором, на севере — с Колумбией, на востоке — с Бразилией, на юго-востоке — с Боливией и Чили. ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Machu_Picchu%2C_Peru_-_2022.jpg/2880px-Machu_Picchu%2C_Peru_-_2022.jpg",
    facts: [
      "Величественные Анды, джунгли Амазонки и пустыня Наска.",
      "Уникальное смешение природы и древних культур.",
      "Мачу-Пикчу – одно из чудес света.",
    ],
  },
  {
    id: "Иордания",
    name: "Иордания",
    desc: " Королевство граничит с Сирией на севере, с Ираком — на северо-востоке, с Саудовской Аравией — на востоке и юге, с Израилем и Палестинской национальной администрацией (ПНА) / частично признанным Государством Палестина — на западе. ",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Ajlun_Green.jpg",
    facts: [
      "Петра — древний город, вырезанный в скале.",
      "Пустыня Вади-Рам — космические пейзажи.",
      "Мёртвое море и исторические маршруты Ближнего Востока.",
    ],
  },
  {
    id: "Мальдивы",
    name: "Мальдивы",
    desc: "Столица — город Мале. Государственный язык — мальдивский — индоарийский язык, родственный санскриту.Население — 402 071 человек, в том числе 338 434 гражданина и 63 637 неграждан",


    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/405-Maldives.jpg",
    facts: [
      "Белоснежные пляжи и бирюзовая вода.",
      "Один из самых романтичных уголков планеты.",
      "Идеально для отдыха, дайвинга и медитации.",
    ],
  },
  {
    id: "japan",
    name: "Япония",
    desc: "Япония — страна самураев, технологий и традиций. Известна храмами, сакурой и мегаполисами.",
    img: "https://a.cdn-hotels.com/gdcs/production147/d1285/0745ceba-e251-44dd-900d-758bd7078d8a.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    facts: [
      "В Японии более 6 тысяч островов.",
      "Самая популярная кухня — суши и рамен.",
      "На Фудзи ежегодно поднимается более 200 тыс. туристов.",
    ],
  },
  {
    id: "kazakhstan" ,
    name: "Казахстан⛰️🇰🇿🐎🥖",
    desc: "Казахстан — сердце Евразии. Знаменит своими степями, горами и гостеприимством.",
    img: "http://aboutkazakhstan.com/blog/wp-content/uploads/2016/05/astana-at-night-kazakhstan-1.jpg",
    facts: [
      "Здесь находится Байтерек — символ столицы.",
      "Озеро Балхаш наполовину пресное, наполовину солёное.",
      "Казахстан — 9-я по величине страна в мире.",
    ],
  },
  

];


function Navbar({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedCountry = event.target.value;
    if (selectedCountry) {
      navigate(`/countries/${selectedCountry}`);
    }
  };
  return (
    <nav className="navbar">
      <div className="logo">✈️ TravelWorld</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/tours">Туры</Link>
        <Link to="/about">Про нас </Link>
        <Link to="/contact">🔒Служба безопасности</Link>
       

        
      
        <select onChange={handleChange} defaultValue="">
      <option value="" disabled>Select a country</option>
      <option value="italy">Italy</option>
      <option value="japan">Japan</option>
      <option value="kazakhstan">Kazakhstan</option>
      <option value="eswatini">Eswatini</option>
      <option value="laos">Laos</option>
      <option value="bhutan">Bhutan</option>
      <option value="madagaskar">Madagaskar</option>
      <option value="rim">Rim</option>
      <option value="vatican">vatican</option>
      <option value="lesota">Lesota</option>
      <option value="Северная Корея ">Северная Корея </option>
      <option value="Исландия">Исландия</option>
      <option value="Лихтенштейн">Лихтенштейн</option>
      <option value="Новая Зеландия">Новая Зеландия</option>
      <option value="Перу">Перу</option>
      <option value="Иордания">Иордания</option>
      <option value="Мальдивы">Мальдивы</option>
    </select>
        <Link to="/profile">Profile</Link>
        <button className="login-btn" onClick={() => setLoggedIn(!loggedIn)}>
          {loggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}


function Home() {
  return (
    <div className="page">
      <h1>🌍 Добро пожаловать в TravelWorld</h1>
      <p>
        Наш сайт поможет тебе узнать больше о странах, традициях и культуре
        разных уголков планеты.
      </p>
    </div>
  );
}


function About() {
  return (
    <div className="page">
      <h2>🚗 Про нас </h2>
      <p>
      Мир полон невероятных мест, и мы хотим помочь вам их открыть.
Наш сайт создан для тех, кто мечтает путешествовать, планировать поездки и находить вдохновение.
Выбирайте страну, исследуйте города, узнавайте интересные факты — всё в одном месте.
Это ваш маленький помощник в большом путешествии 🌍
      </p>
      <p>Мы любим путешествия и технологии.
       Этот сайт — место, где они встретились.
       Начни с выбора страны — и открой для себя мир!</p>
      <ul>
        <li>История стран</li>
        <li>Культура и традиции</li>
        <li>Интересные факты</li>
        <li>Советы путешественникам</li>
        <img 
  src="https://amiel.club/uploads/posts/2022-03/1647653885_29-amiel-club-p-krasivie-kartinki-puteshestviya-33.jpg" 
  alt="https://amiel.club/uploads/posts/2022-03/1647653885_29-amiel-club-p-krasivie-kartinki-puteshestviya-33.jpg" 
  style={{ width: "400px", height: "300px", objectFit: "cover" }}  
  
/>
<img 
  src="https://img.gazeta.ru/files3/497/6316497/468404-pic4_zoom-1000x1000-25061.jpg" 
  alt="Фото" 
  style={{ width: "400px", height: "300px", objectFit: "cover" }} 
/>
      </ul>
    </div>
  );
}


function Contact() {
  
  return (
    
    <div className="page">
      <h2>Данный проект не использует базы данных и не сохраняет пользовательскую информацию.
Все действия происходят в браузере пользователя и не отправляются в интернет.
Мы соблюдаем базовые принципы информационной безопасности и стремимся обеспечить надёжность и защиту при использовании нашего сервиса.</h2>
<p>Если вы обнаружили уязвимость или ошибку, пожалуйста, свяжитесь с нами по email:</p>
<p>Телефон: +7 (708) 622-23-46</p>
      <p>Адрес: Алматы, Казахстан</p>
    
<button onClick={() => alert("Выберите даты и место – город, район, количество гостей.Зайдите на сайт/приложение – например Booking, Ostrovok, Agoda или официальный сайт отеля.Отфильтруйте по бюджету, типу номера, бесплатной отмене и отзывам.Проверьте детали – адрес, фото, условия отмены, включён ли завтрак, налоги и сборы.Забронируйте – введите данные гостей и карту, дождитесь email-подтверждения.Сохраните подтверждение в телефоне или распечатайте.По приезде предъявите паспорт и карту, иногда потребуется депозит.")}>
 <link/>как бронировать отель?<link/>
</button>



   
    </div>
  );
}

 




function Tours() {
    const [city, setCity] = useState("");
    const [dates, setDates] = useState("");
    const [guests, setGuests] = useState(2);
    const [rooms, setRooms] = useState(1);
    const [searchHotel, setSearchHotel] = useState("");
    
  
    const hotels = [
      { id: 1, name: "The Ritz-Carlton", type: "Отель", },
      { id: 2, name: "Four Seasons", type: "Отель" },
      { id: 3, name: "Hilton Garden Inn", type: "Отель" },
      { id: 4, name: "City Hostel", type: "Хостел" },
      { id: 5, name: "Luxury Apartments", type: "Апартаменты" },
      { id: 6, name: "Green Guesthouse", type: "Гостевой дом" },
      { id: 4, name: "Burj Al Arab (Дубай, ОАЭ)", type: "Роскошный парусный отель на острове." },
      { id: 4, name: "Marina Bay Sands (Сингапур)", type: "Отель с панорамным бассейном на крыше." },
      { id: 4, name: "Atlantis The Palm (Дубай, ОАЭ)", type: "Огромный курорт с аквапарком и аквариумом." },
      { id: 4, name: "The Plaza (Нью-Йорк, США)", type: "Легендарный отель возле Central Park." },
      { id: 4, name: "Hotel Ritz (Париж, Франция)", type: "Исторический отель в сердце Парижа." },
      { id: 4, name: "Hilton Maldives Resort & Spa (Мальдивы)", type: "Бунгало над водой, рай для отдыха" },
      { id: 4, name: "Four Seasons Hotel George V (Париж, Франция)", type: "5⭐ с видом на Елисейские поля" },
    ];
    

  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Туры");

  const tours = [
    { country: "Россия",       price: "75 000 тг",   img: "https://travlerpage.ru/adminchik/photo/Park-Voronezhskie-ozera-1россия.jpg" },
    { country: "Турция",       price: "191 761 тг",  img: "https://kuku.travel/wp-content/uploads/2018/05/Турция-первое-фото.jpg" },
    { country: "ОАЭ",          price: "140 590 тг",  img: "https://run4trip.ru/wp-content/uploads/2017/12/shar16.jpg" },
    { country: "Италия",       price: "300 000 тг",  img: "https://luxtripper.co.uk/blog/wp-content/uploads/2023/12/visit-italy-in-summer.jpg" },
    { country: "Франция",      price: "320 000 тг",  img: "https://img.desktopwallpapers.ru/world/pics/wide/1920x1200/e5809ca660e772380e879f98678dda80.jpg" },
    { country: "Испания",      price: "290 000 тг",  img: "https://assets.puzzlefactory.com/puzzle/490/762/original.jpg" },
    { country: "Япония",       price: "350 000 тг",  img: "https://www.webturizm.ru/storage/photos/japan/japan-tokio-24950.jpg" },
    { country: "Греция",       price: "270 000 тг",  img: "https://about-planet.ru/images/evropa/arxitektura/parfenon/afinskij_parfenon.jpg" },
    { country: "Бали",         price: "310 000 тг",  img: "https://thailand-good.ru/wp-content/uploads/9/2/0/920f7f061f6d77dfec2b7422ec3e7700.jpeg" },
    { country: "Мальдивы",     price: "461 069 тг",  img: "https://www.tourmyindia.com/international/wp-content/uploads/2018/04/maldives.jpg" },
    { country: "США",          price: "450 000 тг",  img: "https://i.travel.ru/images2/2013/02/object213646/001_0_ebb28_70cc6430_XL.jpg" },
    { country: "Таиланд",      price: "299 000 тг",  img: "https://kidpassage.com/images/publications/tailand-noyabre-otdyh-pogoda/tailand-noyabre-otdyh-pogoda-photo-1_1042986000.jpg" },
    { country: "Перу",         price: "350 000 тг",  img: "https://tourperu.ru/images/2019/09/20/cusco-large.jpg" },
    { country: "Вьетнам",      price: "230 000 тг",  img: "http://visaget.ru/wp-content/uploads/vietnam.jpg" },
    { country: "Южная Африка", price: "340 000 тг",  img: "https://about-planet.ru/images/afrika/strana/yuar/yuar11.jpg" },
    { country: "Норвегия",     price: "330 000 тг",  img: "https://i.pinimg.com/originals/82/56/f0/8256f0fc33cd06afb4268690ecfd48d3.jpg" },
    { country: "Канада",       price: "360 000 тг",  img: "https://mirplaneta.com/wp-content/uploads/2022/11/nacionalnyj-park-banf.jpg" },
    { country: "Сейшелы",      price: "400 000 тг",  img: "https://gidtravel.com/images/c1_1276437345.jpg" },
    { country: "Филиппины",    price: "270 000 тг",  img: "https://i.pinimg.com/originals/e2/58/f5/e258f53ec8d05fa23fc57f51b99b8636.jpg" },
    { country: "Португалия",   price: "300 000 тг",  img: "https://www.vash-otdyh.by/images/Blog/Portugaliya/Strana_vpeshatleniy/Португалия_на_берегу_океана.jpg" },
    { country: "Индия",        price: "210 000 тг",  img: "https://img.desktopwallpapers.ru/world/pics/wide/1920x1200/0039aaa29a65380edadf1080484e73ae.jpg" },
    { country: "Намибия",      price: "330 000 тг",  img: "https://geoguru.ru/wp-content/uploads/namibia.jpg" },
    { country: "Аргентина",    price: "380 000 тг",  img: "https://s0.rbk.ru/v6_top_pics/media/img/7/87/346929854303877.jpeg" },
    { country: "Маврикий",     price: "370 000 тг",  img: "https://opis-cdn.tinkoffjournal.ru/mercury/faq-mauritius__main_____shutterstock_529775149.o7cnkfbw4gns.jpg" },
    { country: "Чехия",        price: "250 000 тг",  img: "https://saveti.bg/wp-content/uploads/2023/02/zlatna-praga.jpg" },
    { country: "Марокко",      price: "260 000 тг",  img: "https://www.tourdom.ru/upload/iblock/587/587eb86feb4404e6946b294b2396e84d.png" },
    { country: "Монголия",     price: "200 000 тг",  img: "https://cms.enjourney.ru/upload/Jana/Mongolei/monperv.jpg" },
    { country: "Казахстан",    price: "от 60 000 тг",img: "https://s0.rbk.ru/v6_top_pics/media/img/9/87/756642638995879.jpg" },
      {country: "Швейцария", price: "350 000 тг", img: "https://about-planet.ru/images/evropa/strana/shvecaria/shveycaria12.jpg"},
      {country: "Австрия", price: "320 000 тг", img: "https://cdn.getyourguide.com/img/country/546b6d28a6868.jpeg/88.jpg"},
      {country: "Великобритания", price: "400 000 тг", img: "https://avatars.dzeninfra.ru/get-zen_doc/9366213/pub_645166f56bdf6b3113d4b23d_645168c86bdf6b3113d84366/scale_1200"},
      {country: "Германия", price: "330 000 тг", img: "https://s1.1zoom.ru/b5050/380/Germany_Castles_Neuschwanstein_Clouds_Tower_612699_1920x1080.jpg"},
      {country: "Исландия", price: "370 000 тг", img: "https://about-planet.ru/images/evropa/strana/islandia/islandia12.jpg"},
      {country: "Китай", price: "210 000 тг", img: "https://about-planet.ru/images/asia/goroda/shanxay/shanxay7.jpg"},
      {country: "Южная Корея", price: "240 000 тг", img: "https://ic.pics.livejournal.com/dergachev_va/58474394/3546134/3546134_original.jpg"},
      {country: "Сингапур", price: "290 000 тг", img: "https://i.artfile.ru/1920x1080_1151109_[www.ArtFile.ru].jpg"},
      {country: "Малайзия", price: "250 000 тг", img: "https://cdn2.tu-tu.ru/image/pagetree_node_data/1/62b7fa2d89ed5e35f68b620f194cb3cd/"},
      {country: "Индонезия", price: "270 000 тг", img: "https://pohcdn.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/indonesia-6.jpg"},
      {country: "Бразилия", price: "380 000 тг", img: "https://i.pinimg.com/originals/0a/c6/55/0ac655bf7c847a4b383015e717b0feb9.jpg"},
      {country: "Мексика", price: "350 000 тг", img: "http://andrey-eltsov.ru/wp-content/uploads/2020/07/mdj_j-gy_gsd28_j8f-h_6_bhd-4-72-fu_8-3-fhsd-istoricheskij-centr-mehiko.jpg"},
      {country: "Куба", price: "300 000 тг", img: "https://cdn.tripster.ru/photos/ea6049bc-076a-46d8-a706-f53476a9021c.jpg"},
      {country: "Египет", price: "153 000 тг", img: "https://million-wallpapers.ru/wallpapers/4/89/13681478493645806029.jpg"},
      {country: "Кения", price: "270 000 тг", img: "https://www.maasaimarakenyapark.com/wp-content/uploads/2019/08/Webp.net-compress-image-58.jpg"},
      {country: "Танзания", price: "280 000 тг", img: "https://geoguru.ru/wp-content/uploads/tanzania.jpg"},
      {country: "Марокко", price: "260 000 тг", img: "https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2022-10/piqsels.com-id-fqhit.jpg.webp?itok=1wA3qSEL"},
      {country: "Австралия", price: "420 000 тг", img: "https://about-planet.ru/images/avstralia/goroda/kanberra/canberra.jpg"},
      {country: "Новая Зеландия", price: "430 000 тг", img: "https://about-planet.ru/images/avstralia/goroda/oklend/oklend2.jpg"},
      {country: "Фиджи", price: "410 000 тг", img: "https://cms.enjourney.ru/upload/Jana/Fiji/fiperv1.jpg"},
      {country: "Таити", price: "450 000 тг", img: "https://www.tahitilegends.com/images/territories/tahiti.jpg"},
      {country: "Хорватия", price: "270 000 тг", img: "https://pohcdn.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Croatia-4.jpg"},
      {country: "Черногория", price: "240 000 тг", img: "https://34travel.me/media/posts/59352ba347081-Muntenegru.jpg"},
      {country: "Словения", price: "230 000 тг", img: "https://m4.netinfo.bg/media/images/37749/37749809/r-orig-orig-liubliana-sloveniia.jpg"},
      {country: "Ирландия", price: "310 000 тг", img: "https://windows10spotlight.com/wp-content/uploads/2019/06/d01051fe2ff168943fa040e280b863b9.jpg"},
      {country: "Финляндия", price: "280 000 тг", img: "http://tureks.ru/wp-content/uploads/2016/10/71.jpg"},
      {country: "Шотландия", price: "320 000 тг", img: "https://about-planet.ru/images/evropa/goroda/edinburg/edinburg2.jpg"},
      {country: "Польша", price: "220 000 тг", img: "https://i.artfile.ru/1920x1080_1650683_[www.ArtFile.ru].jpg"},
      {country: "Доминиканская Республика", price: "330 000 тг", img: "https://cms.enjourney.ru/upload/Jana/Dominican%20Republic/Dominican-respublic.jpg"},
      {country: "Гавайи", price: "370 000 тг", img: "https://www.zastavki.com/pictures/originals/2015/World___Hawaii_Surf_in_Hawaii_096145_.jpg"},
      {country: "Коста-Рика", price: "340 000 тг", img: "https://cms.enjourney.ru/upload/Jana/Costa%20Rica/KRperv.jpg"},
      {country: "Колумбия", price: "300 000 тг", img: "http://www.fotosselect.ru/wp-content/uploads/2016/09/река_пяти_цветов_самая_красивая_река_в_мире_Колумбия_Каньо_Кристалес.jpg"},
    
  ];

  const filtered = tours.filter(h =>
    h.country.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => setSearch(query);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="max-w-6xl mx-auto p-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Ищите легко <span className="inline-block animate-bounce">🔥</span>
          <br />
          Бронируйте выгодно!
        </h1>
      </header>

      <nav className="flex justify-center gap-6 mt-4">
        {["Туры", "Отели", "Экскурсии"].map(item => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`px-4 py-1 rounded-full shadow font-semibold transition
                ${activeTab === item 
                    ? "bg-blue-900 text-white"  
                    : "bg-white/80 hover:bg-blue-700 hover:text-white"} // обычный — белый, при наведении синий
                  
            `}
          >
            {item}
          </button>
        ))}
      </nav>

      
      {activeTab === "Туры" && (
        <>
          <div className="flex justify-center mt-6">
            <div className="flex w-[90%] md:w-[600px] shadow-xl rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Куда хотите поехать?"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSearch()}
                className="flex-1 px-5 py-3 outline-none text-gray-700"
              />
              <button
  onClick={handleSearch}
  className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition"
>
  Найти
</button>

            </div>
          </div>

          <section className="bg-gray-100 mt-10 py-10">
            <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-8">
              Популярные туры
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
              {filtered.length ? (
                filtered.map(({ country, price, img }) => (
                  <div
                    key={country}
                    className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
                  >
                    <img src={img} alt={country} className="h-40 w-full object-cover" />
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{country}</h3>
                      <p className="text-gray-600 text-sm">от {price}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-600">
                  Ничего не найдено
                </p>
              )}
            </div>
          </section>
        </>
      )}

      
{activeTab === "Отели" && (
  <div style={{ maxWidth: "600px", margin: "20px auto" }}>
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🏨 Поиск отелей</h2>

    <input
      type="Burj Al Arab (Дубай, ОАЭ)t"
      placeholder="Город"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
    />

    <input
      type="text"
      placeholder="Даты"
      value={dates}
      onChange={(e) => setDates(e.target.value)}
      style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
    />

    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
      <input
        type="number"
        placeholder="Гости"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        style={{ flex: 1, padding: "10px", borderRadius: "5px" }}
      />
      <input
        type="number"
        placeholder="Номера"
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
        style={{ flex: 1, padding: "10px", borderRadius: "5px" }}
      />
    </div>

    <input
      type="text"
      placeholder="Поиск отеля..."
      value={searchHotel}
      onChange={(e) => setSearchHotel(e.target.value)}
      style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "5px" }}
    />

    <div>
      {hotels
        .filter((h) => h.name.toLowerCase().includes(searchHotel.toLowerCase()))
        .map((hotel) => (
          <div
            key={hotel.id}
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              alignItems: "center",
            }}
          >
           
            <div>
              <h3 style={{ margin: 0 }}>{hotel.name}</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>{hotel.type}</p>
            </div>
          </div>
        ))}
    </div>

    <button
      onClick={() => alert(`Поиск: ${city}, ${dates}, ${guests} гостей, ${rooms} номер`)}
      style={{
        width: "100%",
        padding: "12px",
        background: "#4caf50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        marginTop: "20px",
      }}
    >
      Найти
    </button>
  </div>
)}



{activeTab === "Экскурсии" && (
  <Excursions />
)}





     
    </div>
  );
}








  



function Country() {
  const { id } = useParams();
  const country = countries.find((c) => c.id === id);

  if (!country) return <h2>nff</h2>;

  return (
    <div className="page">
      <h2>{country.name}</h2>
      <p>{country.desc}</p>
      <img src={country.img} alt={country.name} className="country-img" />
      <h3>Интересные факты:</h3>
      <ul>
        {country.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}




function Profile({ loggedIn }) {
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="page">
      <h2>👤 Профиль</h2>
      <p>Добро пожаловать, путешественник!</p>
      <p>Здесь будет личная информация и сохранённые страны.</p>
    </div>
  );
}


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/countries/:id" element={<Country />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/excursions" element={<Excursions />} />
        <Route
          path="/login"
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/profile"
          element={<Profile loggedIn={loggedIn} />}
        />
      </Routes>
  
      <footer className="bg-gray-800 text-center py-6 mt-10">
        <p className="text-gray-300 text-sm">
          © 2025 <span className="font-semibold text-blue-400">TravelWorld</span>.  
          Ваша безопасность — наш приоритет.
        </p>
      </footer>
    </Router>
  );
  
}




export default App;