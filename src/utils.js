export const fetcher = (url) => fetch(url).then((res) => res.json());

export const capitalFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
