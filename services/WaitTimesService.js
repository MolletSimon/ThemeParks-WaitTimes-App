import {APIService} from "./APIService";

export const WaitTimesSerices =  {
    GET_WAITTIMES_PARK: `${APIService.URL_API}wait-times/disney-park-paris`,
    GET_WAITTIMES_STUDIOS: `${APIService.URL_API}wait-times/disney-studio-paris`,
    GET_FAVRIDES: `${APIService.URL_API}fav-rides`,
    ADD_FAVRIDES: `${APIService.URL_API}fav-rides/add`
}
