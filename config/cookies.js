
const daysToMiliseconds = (days) =>
    days * 24 * 60 * 60 * 1000;

export const prodCookie = {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: daysToMiliseconds(7)
}

export const devCookie = {
    httpOnly: true,
    sameSite: 'None',
    maxAge: daysToMiliseconds(7)
}