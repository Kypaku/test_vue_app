export const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const customRound = (num, length) => {
  return Math.round((num)*Math.pow(10,length))/Math.pow(10,length)
}

export const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}