const formatDate = (date) => {
    return new Date(date).toLocaleString();
};

const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toISOString();
};

module.exports = {
    formatDate,
    formatTimestamp
};