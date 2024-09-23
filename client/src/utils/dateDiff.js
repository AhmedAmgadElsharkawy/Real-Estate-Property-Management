const dateDiff = (date) => {
    const storedDate = new Date(date)
    const currentDate = new Date()
    let yearsDiff = currentDate.getFullYear() - storedDate.getFullYear();
    let monthsDiff = currentDate.getMonth() - storedDate.getMonth();
    let daysDiff = currentDate.getDate() - storedDate.getDate();
    let hoursDiff = currentDate.getHours() - storedDate.getHours();
    let minutesDiff = currentDate.getMinutes() - storedDate.getMinutes();
    let result;
    if (yearsDiff) {
        if (yearsDiff == 1)
            result = `1 year ago`;
        else
            result = `${yearsDiff} years ago`;
    }
    else if (monthsDiff) {
        if (monthsDiff == 1)
            result = `1 month ago`;
        else
            result = `${monthsDiff} months ago`;
    }
    else if (daysDiff) {
        if (daysDiff == 1)
            result = `1 day ago`;
        else
            result = `${daysDiff} days ago`;
    }
    else if (hoursDiff) {
        if (hoursDiff == 1)
            result = `1 hour ago`;
        else
            result = `${hoursDiff} hours ago`;
    }
    else if (minutesDiff) {
        if (minutesDiff == 1)
            result = `1 minute ago`;
        else
            result = `${minutesDiff} minutes ago`;
    }
    else
        result = "just now";
    return result
}

export default dateDiff;