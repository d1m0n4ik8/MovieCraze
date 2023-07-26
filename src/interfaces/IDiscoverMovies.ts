import { IResult } from './IUpcomingMovie'

export interface IDiscoverMovies {
	page: number
	results: IResult[]
	total_pages: number
	total_results: number
}
