import "./index.css";
import background from "../images/backgroundmain.png";
import arrow from "../images/arrow.png"
import photoAbout from "../images/about.png"
import photoAboutTwo from "../images/aboutTwo.png"
import photoAboutThree from "../images/aboutThree.png"
import mission from "../images/mission.png"
import pathway from "../images/pathway.png"
import educationBack from "../images/educationBack.png"
import educationBetween from "../images/educationBetween.png"
import educationWoman from "../images/educationWoman.png"
import contacts from "../images/contacts.png"
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Main() {
    return (
        <div>
            <div id="main" style={{position: "relative"}}>
                <div className="main">
                    <div className="mainBackground">
                        <img src={background} alt="img" style={{width: "100%"}} />
                    </div>
                    <div className="textOnImageAbout">
                        <h1 className="textMain">ОТКРОЙТЕ ДЛЯ СЕБЯ МИР ВОЗМОЖНОСТЕЙ</h1>
                        <h1 className="textMain" style={{textTransform: "uppercase"}}>Новое начало - новая жизнь</h1>
                        <button className="mainButton" onClick={() => window.location.replace("/#about")}>НАЧАТЬ</button>
                    </div>
                </div>
            </div>

            <div id="about">
                <div className="aboutOne">
                    <div className="textsAbout">
                        <h1 className="firstTextAbout">Мы <br/> команда</h1>
                        <img src={arrow} alt="img" />
                        <h1 className="secondTextAbout">неравнодушных</h1>
                        <p className="thirdTextAbout">Мы начало осознанной жизни в Казахстане.</p>
                    </div>
                    <div className="photoAbout">
                        <img src={photoAbout} alt="img" style={{width: "893px", height: "520px"}}/>
                    </div>
                </div>
                <div className="aboutTwo">
                    <div className="photoAbout">
                        <img src={photoAboutTwo} alt="img" style={{width: "893px", height: "520px"}}/>
                    </div>
                    <div className="textsAboutTwo">
                        <div style={{textAlign: "end"}}>
                            <h1 className="firstTextAbout">Мы строим <br/> будущее</h1>
                            <img src={arrow} alt="img" style={{transform: "rotate(180deg)"}}/>
                        </div>
                        <div className="missionAndPathway">
                            <div className="mission">
                                <div>
                                    <img src={mission} alt="img" style={{marginTop: "20px"}}/>
                                </div>
                                <div className="missionPathwayTexts">
                                    <h1 className="secondTextAboutTwo">Наша миссия </h1>
                                    <p className="thirdTextAbout">Мы хотим видеть образованную молодежь, которая стремится улучшать свою жизнь и страну.</p>
                                </div>
                            </div>
                            <div className="pathway">
                                <div>
                                    <img src={pathway} alt="img" style={{marginTop: "20px"}}/>
                                </div>
                                <div className="missionPathwayTexts">
                                    <h1 className="secondTextAboutTwo">Наш подход</h1>
                                    <p className="thirdTextAbout">Мы устраиваем бесплатные форумы с экспертами для молодежи от 18-35 лет на самые разные темы. Так же есть возможность обучиться чему-то новому в нашей онлайн школе.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutOne">
                    <div className="textsAbout">
                        <h1 className="firstTextAbout">Кто мы?</h1>
                        <img src={arrow} alt="img" />
                        <h1 className="secondTextAbout">проект The начало</h1>
                        <p className="secondTextAbout" style={{color: "black"}}>Образовательный проект, <br /> который готовит к жизни <br /> и обучает молодежь <br /> тому, чего не учат в <br /> школах.</p>
                        <button className="aboutButton" onClick={() => window.location.replace("/#education")}>НАЧАТЬ ОБУЧЕНИЕ</button>
                    </div>
                    <div className="photoAbout">
                        <img src={photoAboutThree} alt="img" style={{width: "893px", height: "520px"}}/>
                    </div>
                </div>
            </div>

            {/* <div id="education">
                <div className="parent" style={{position: "relative", top: 0, left: 0}}>
                    <img src={educationBack} alt="img" style={{position: "relative", bottom: 0, right: 0, width: "100%", height: "70%"}}/>
                    <img src={educationBetween} alt="img" style={{position: "absolute", bottom: 0, right: 0}}/>
                    <img src={educationWoman} alt="img"style={{position: "absolute", bottom: 0, right: 0}}/>
                </div>
            </div> */}

            <div id="contacts" style={{position: "relative"}}>
                <div className="contact">
                    <div className="contactssection">
                        <img src={contacts} alt="img" style={{width: "60%"}} />
                    </div>
                    <div className="contactTexts">
                        <div className="textOnImageContacts">
                            <div>
                                <h1 className="textHi">Привет!</h1>
                                <p className="textSay">Скажи нам что-то</p>
                                <p className="myName">Меня зовут</p>
                                <input placeholder="Имя" />
                                <p className="myNumber">Телефон</p>
                                <input placeholder="+7" />
                                <div>
                                    <button className="sendButton">Отправить</button>
                                </div>
                            </div>
                            <div style={{marginLeft: "140px"}}>
                                <div className="contactInfo">
                                    <h1 className="contactInfoH">Контактная</h1>
                                    <h1 className="contactInfoH">информация</h1>
                                    <p className="contactInfoP" style={{marginTop: "50px"}}>Заполни форму и наши сотрудники </p>
                                    <p className="contactInfoP">свяжутся с вами в течении 24 часов.</p>
                                </div>
                                <div className="contactButtons">
                                    <button onClick={() => window.open("https://www.instagram.com/thenachalo/", "_blank")}>
                                        <InstagramIcon size={58}/>
                                    </button>
                                    <button onClick={() => window.open("mailto:Thenachalo.kz@gmail.com", "_blank")}>
                                        <MailIcon size={58}/>
                                    </button>
                                    <button onClick={() => window.open("https://t.me/+77766732818", "_blank")}>
                                        <TelegramIcon size={50} />
                                    </button>
                                    <button onClick={() => window.open("//wa.me/+77766732818", "_blank")}>
                                        <WhatsAppIcon size={58}/>
                                    </button>
                                    <button onClick={() => window.open("https://youtube.com/@The-zw5jd", "_blank")}>
                                        <YouTubeIcon size={58}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    )
}