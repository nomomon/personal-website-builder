const PrepDate = (date: Date | String | undefined) => {
    const returnDate = new Date(JSON.stringify(date));

    if (returnDate.toString() === 'Invalid Date') {
        return '';
    }

    return (
        returnDate?.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }) ?? ''
    );
};

export default PrepDate;
