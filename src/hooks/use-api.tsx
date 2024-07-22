import { useState, useEffect } from 'react';

export const useApi = (apiCallback: any, params?: string) => {
    const [data, setData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchData = async () => {
        setIsLoading(true)
        try {
            // const response = await axios(url, options);
            const response: any = await apiCallback(params)
            setData(response.data.data)
        } catch (error: any) {
            setError(error);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [params])

    return {
        data,
        isLoading,
        error
    }
}
