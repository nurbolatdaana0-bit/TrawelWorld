import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

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
        <Link to="/about">Про нас </Link>
        <Link to="/contact">🔒Служба безопасности</Link>
        <Link to="/tours">Туры</Link>
        <Link to="/"></Link>
        <Link to="/">Home</Link>
        
      
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
<p>Если вы обнаружили уязвимость или ошибку, пожалуйста, свяжитесь с нами по email: <strong>TravelWorld@gmail.com</strong></p>

      <p>Телефон: +7 (708) 622-23-46</p>
      <p>Адрес: Алматы, Казахстан</p>
      <button onClick={() => alert("Форма отправки пока в разработке")}>
  Сообщить о проблеме безопасности
</button>

    </div>
  );
}
function tours (){
  const { id } = useParams();
  const country = countries.find((c) => c.id === id);

  if (!country) return <h2>Страна не найдена</h2>;

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
  



function Country() {
  const { id } = useParams();
  const country = countries.find((c) => c.id === id);

  if (!country) return <h2>Страна не найдена</h2>;

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


function Login({ loggedIn, setLoggedIn }) {
  if (loggedIn) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="page">
      <h2>🔐 Login</h2>
      <p>Введи свои данные, чтобы войти.</p>
      <button className="login-btn" onClick={() => setLoggedIn(true)}>
        Войти
      </button>
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
        <Route path="/about" element={<About />} /> {}
        <Route path="/tours" element={<tours />} /> {}
        <Route path="/contact" element={<Contact />} /> {}
        <Route path="/countries/:id" element={<Country />} /> {}
        <Route
          path="/login"
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />{" "}
        {}
        <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />{" "}
        {}
      </Routes>
      <footer className="footer"> © 2025 TravelWorld. Ваша безопасность — наш приоритет.</footer>
    </Router>
  );
}



export default App;