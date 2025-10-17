import { format, parseISO, isValid, differenceInCalendarDays } from 'date-fns'

export function formatDate(value: string) {
    const date = parseISO(value);
    if (!isValid(date)) return value;
    return format(date, 'dd.MM.yyyy');
}

export function diffDays(from: string, till: string) {
    const fromDate = parseISO(from);
    const tillDate = parseISO(till);
    if (!isValid(fromDate) || !isValid(tillDate)) return 0;

    return Math.max(1, differenceInCalendarDays(tillDate, fromDate));
}