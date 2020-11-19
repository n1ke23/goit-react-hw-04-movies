import React, { Suspense, useEffect, useState } from "react"
import { Switch, Route, NavLink, useHistory, useLocation, useParams } from "react-router-dom"
import MoviesLink from "./MoviesLinks/MoviesLinks"
import { moviesRouts } from "./../../../Options/Options"
// import { useRouteMatch } from 'react-router-dom';
import { searchFilm, request } from "./../../../helpers/request"
import "./Id.css"

const Id = () => {
	// const match = useRouteMatch()
	const history = useHistory()
	const [from, setFrom] = useState("")
	const [film, setFilm] = useState({})
	const [search, setSearch] = useState("")
	const location = useLocation()
	const id = useParams().id
	useEffect(() => {
		if (location.state) {
			setSearch(location.state.search)
			setFrom(location.state.from)
		} else {
			setSearch("")
		}
		const url = searchFilm(id)
		request("get", url).then((res) => setFilm(res))
	}, [])

	const goBack = () => {
		if (from) {
			return history.push({
				pathname: from,
				search: `query=${search}`,
				query: search,
			})
		} else history.push("/")
	}
	return (
		<>
			<button type="button" onClick={goBack}>
				Go back
			</button>
			<div className="movie-flex">
				{film.id && (
					<div>
						<div>
							{!!film.poster_path && (
								<img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
							)}
						</div>
						<div>
							<h1>{film.title}</h1>
							<p>User Score: {film.runtime}%</p>
							<h2>Genre</h2>
							<ul>
								{film.genres.map((genre) => (
									<li key={genre.id}>
										<p>{genre.name}</p>
									</li>
								))}
							</ul>
							<h3>{film.tagline}</h3>
							<h2>Overview</h2>
							<p>{film.overview ? film.overview : "The resource you requested could not be found."}</p>
						</div>
					</div>
				)}
			</div>

			<MoviesLink id={film.id} />
			{/*<ul>
         <li><NavLink to={`/movies/${film.id}/cast`}>cast</NavLink></li>
        <li><NavLink to={`/movies/${film.id}/reviev`}>reviev</NavLink></li> 
      </ul>*/}
			<Suspense fallback={<h2>Load...</h2>}>
				<Switch>
					{moviesRouts.map((route) => (
						<Route key={route.path} path={route.path} component={route.component} exact={route.exact ? true : false} />
					))}
				</Switch>
			</Suspense>
		</>
	)
}

export default Id
