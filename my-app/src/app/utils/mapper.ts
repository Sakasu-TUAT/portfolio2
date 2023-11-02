import {
    FaTwitch,
    FaLink,
    FaYoutube,
    FaSearch,
    FaGithub,
    FaPython,
    FaHtml5,
    FaCss3,
    FaReact,
    FaRust,
} from 'react-icons/fa'

import {
    BiLogoCPlusPlus,
    BiLogoJavascript,
    BiLogoPostgresql,
} from 'react-icons/bi'

import {
    TbBrandNextjs,
} from 'react-icons/tb'

import {
    MdCatchingPokemon,
} from 'react-icons/md'

import {
    RiTwitterXFill,
} from 'react-icons/ri'

import {
    BsNintendoSwitch,
} from 'react-icons/bs'

export const iconMapper: Record<string, React.ComponentType> = {
    twitter: RiTwitterXFill,
    twitch: FaTwitch,
    link: FaLink,
    youtube: FaYoutube,
    search: FaSearch,
    github: FaGithub,
    python: FaPython,
    html5: FaHtml5,
    css3: FaCss3,
    javascript: BiLogoJavascript,
    react: FaReact,
    nextjs: TbBrandNextjs,
    cplusplus: BiLogoCPlusPlus,
    postgresql: BiLogoPostgresql,
    rust: FaRust,
    pokemon: MdCatchingPokemon,
    switch: BsNintendoSwitch,
}
