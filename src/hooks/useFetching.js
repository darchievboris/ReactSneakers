import React, {useState} from 'react';

export const useFetching = (cb) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = () => {
        try {
            setLoading(true)
            cb()
        } catch (e) {
            setError(e.massage)
        } finally {
            setLoading(false)
        }
    }

    return [fetching, loading, error]
}


