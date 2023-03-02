import { Link } from "react-router-dom"

export const GlobalNav = ({ NAV }) => {
    return (
        <ul>
            {
                NAV.map(it => {
                    return (
                        <li key={it.id}><Link to={it.link}>{it.tit}</Link>
                            {it.submenu && <ul>
                                {it.submenu.map((sub, idx) => {
                                    return (
                                        <li key={idx}><Link to={sub.link}>{sub.tit}</Link></li>
                                    )
                                })}
                            </ul>}
                        </li>
                    )
                })
            }
        </ul>
    )
}