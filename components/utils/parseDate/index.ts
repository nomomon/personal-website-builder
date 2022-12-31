const parseDate = (date: string) => {
    const dateObj = new Date(date);

    return dateObj.toLocaleDateString(
        'en-US',
        {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }
    )
}

export default parseDate;