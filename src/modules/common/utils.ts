/**
 * Get Short String for Time
 * @param timeString
 */
export const getShortTime = (timeString: string): string => {
    if (Number.isNaN(Date.parse(timeString))) return '00:00 AM';
    return new Date(timeString).toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
}


