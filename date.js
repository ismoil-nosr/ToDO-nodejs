module.exports.getDate = function() {
    let date = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    return date.toLocaleDateString('ru-RU', options); // don't forget to install full-icu to make locale work
};