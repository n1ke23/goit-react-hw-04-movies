import React from "react"
import { Switch, Route, NavLink, useLocation, useRouteMatch } from "react-router-dom"
import { moviesLinks } from "./../../../../Options/moviesLinks"
import { v4 as uuidv4 } from "uuid"

const MoviesLink = ({ id }) => {
	const match = useRouteMatch()
	return (
		<>
			<ul>
				{moviesLinks.map((link) => (
					<li key={uuidv4()}>
						<NavLink exact={link.exact ? true : false} to={`/movies/${id}${link.to}`}>
							{link.name}
						</NavLink>
					</li>
				))}
			</ul>
		</>
	)
}

export default MoviesLink
