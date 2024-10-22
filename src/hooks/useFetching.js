import React, {useState} from 'react';

export const useFetching = (cb) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = async () => {
        try {
            setLoading(true)
            await cb()
        } catch (e) {
            console.error(e)
            setError(e.massage)
        } finally {
            setLoading(false)
        }
    }

    return [fetching, loading, error]
}


