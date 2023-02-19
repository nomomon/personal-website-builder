const PrepDate = (date: Date | String | undefined) => {
    if (!date) return '';
    if (typeof date === 'string') {
        date = new Date(date);

        if (date.toString() === 'Invalid Date') {
            return '';
        }
    }
    date = date as Date;

    return (
        date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }) ?? ''
    );
};

export default PrepDate;
