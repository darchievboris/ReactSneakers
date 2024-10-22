export function convertMsToDate(ms) {

    const date = new Date(ms);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate

}