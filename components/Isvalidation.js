export const isValidEmpty = (stringUsername)  => {
    return (
        stringUsername.length > 0
    )
}

export const isValidPhone = (stringUsername)  => {
    return (
        stringUsername.length == 10
    )
}

export const isValidPass= (stringUsername)  => {
    return (
        stringUsername.length > 7
    )
}