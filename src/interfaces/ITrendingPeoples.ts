export interface ITrendingPeoples {
	page: number
	results: ITrendingPeoplesResult[]
	total_pages: number
	total_results: number
}

export interface ITrendingPeoplesResult {
	adult: boolean
	id: number
	name: string
	original_name: string
	media_type: string
	popularity: number
	gender: number
	known_for_department: string
	profile_path?: string
	known_for: Knownfor[]
}

interface Knownfor {
	adult: boolean
	backdrop_path?: string | string
	id: number
	title?: string
	original_language: string
	original_title?: string
	overview: string
	poster_path?: string | string
	media_type: string
	genre_ids: number[]
	popularity: number
	release_date?: string
	video?: boolean
	vote_average: number
	vote_count: number
	name?: string
	original_name?: string
	first_air_date?: string
	origin_country?: string[]
}
