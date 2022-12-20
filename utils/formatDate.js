const formattedDate = (timestamp) => {
    const dateObj = new Date (timestamp);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December']
    return months[dateObj.getMonth()] + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear();
}

module.exports = formattedDate;