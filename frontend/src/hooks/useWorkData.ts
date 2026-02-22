import axios, {type AxiosPromise} from "axios";
import type {WorkData} from '../interface/workData.ts'
import {useQuery} from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<WorkData[]> => {
    const response = axios.get(API_URL + '/work');
    return response;
}

export function useWorkData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['work-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }

}