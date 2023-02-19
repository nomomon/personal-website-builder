/**
 * This is so ugly, but it works.
 */

function TimeSince(date: string) {
    let seconds = Math.floor(
        (Number(new Date()) - Number(new Date(date))) / 1000
    );

    let interval = seconds / 31536000;

    if (interval > 1) {
        const n = Math.floor(interval);
        return n + ' year' + addS(n) + ' ago';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        const n = Math.floor(interval);
        return n + ' month' + addS(n) + ' ago';
    }
    interval = seconds / 86400;
    if (interval > 1) {
        const n = Math.floor(interval);
        return n + ' day' + addS(n) + ' ago';
    }
    interval = seconds / 3600;
    if (interval > 1) {
        const n = Math.floor(interval);
        return n + ' hour' + addS(n) + ' ago';
    }
    interval = seconds / 60;
    if (interval > 1) {
        const n = Math.floor(interval);
        return n + ' minute' + addS(n) + ' ago';
    }
    return Math.floor(seconds) + ' seconds ago';
}

function addS(num: number) {
    return Math.floor(num) > 1 ? 's' : '';
}

export default TimeSince;
