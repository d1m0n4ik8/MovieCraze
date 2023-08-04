import { IResponse } from './IAdditionalInfo'
import { IMovie } from './IMovie'
import { ITv } from './ITv'

interface IDiscoverMovie extends IResponse {
	results: IMovie[]
}

interface IDiscoverTV extends IResponse {
	results: ITv[]
}

export type IDiscoverData = IDiscoverMovie | IDiscoverTV
