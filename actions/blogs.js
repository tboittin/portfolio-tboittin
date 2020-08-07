
import axios from 'axios';
import {useApiHandler} from '@/actions'
import useSWR from "swr"
import {fetcher} from '@/actions'

const createBlog = (data) => axios.post('/api/v1/blogs', data);


export const useCreateBlog = () => useApiHandler(createBlog);

export const useGetBlog = (id) => {
    const { data, error, ...rest} = useSWR(id ? '/api/v1/blogs/'+id : null, fetcher);
    return { data, error, loading: !data && !error, ...rest}
}