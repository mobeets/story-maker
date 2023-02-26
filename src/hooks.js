import { useState } from 'react';

export const useFormQuery = () => {

    const [query, setQuery] = useState('');
    const [caption, setCaptionKey] = useState('');
    const [pageBreak, setPageBreak] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const target = e.target;// as HTMLFormElement;


        const { form } = Object.fromEntries(new FormData(target));

        if (form.toString().trim().length === 0) return;

        setQuery(form.toString());

        const { caption } = Object.fromEntries(new FormData(target));
        setCaptionKey(caption.toString());

        const { page } = Object.fromEntries(new FormData(target));
        setPageBreak(page.toString());

        target.reset();
        target.focus();

    }

    return {
        query, caption, pageBreak, handleSubmit
    }
}

export default useFormQuery;
