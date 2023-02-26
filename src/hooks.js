import { useState } from 'react';

export const useFormQuery = () => {

    const [query, setQuery] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const target = e.target;// as HTMLFormElement;

        const { form } = Object.fromEntries(new FormData(target))

        if (form.toString().trim().length === 0) return

        setQuery(form.toString())

        target.reset()
        target.focus()
    }

    return {
        query, handleSubmit
    }
}

export default useFormQuery;
