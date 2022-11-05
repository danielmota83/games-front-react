import SnesBackground from '../img/snes-background.jpg'
import SnesWallpaper from '../img/snes-wallpaper.png'
import BackIcon from '../icon/Voltar.svg'
import coolBackground from '../img/cool-background.png'
import AddGames from '../icon/add_game.svg'
import Category from '../icon/category.svg'
import Standard from '../img/standard.png'
import background from "../../assets/img/background.jpg";
import background2 from "../../assets/img/snesbackground2.jpg";

export const constants = {
    logoFontFamily: 'Roboto, sans-serif',
    logoFontSize: '3rem',
    logoLineHeight: '140%',

    subTitleFontFamily: 'Roboto Mono, monospace, sans-serif',
    subTitleFontSize: '1.6rem',
    subTitleFontHeight: '140%',

    bodyFontFamily: 'Share Tech Mono, monospace',
    bodyFontSize: '1.5rem',
    bodyLineHeight: '140%',

    SnesBackground: `url(${SnesBackground})`,
    SnesWallpaper: `url(${SnesWallpaper})`,
    SnesPlayGameBackground: `url(${Standard})`,
    backIcon: `url(${BackIcon})`,

    loginBackground: `url(${background})`,
    signupBackground: `url(${background2})`,
    homepageBackground: `url(${coolBackground})`,
    createGamesIcon: `url(${AddGames})`,
    createGenresIcon: `url(${Category})`,

    transitionEvents: 'all ease-in-out .6s',
    transformeScale: 'scale(1.2)'
}