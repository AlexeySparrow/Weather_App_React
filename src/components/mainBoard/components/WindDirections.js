export const WindDirections = ({deg}) => {
    const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ']

    if ((deg >= 0 && deg <= 20) || (deg >= 340 && deg <= 360)) return directions[0]
    if (deg > 20 && deg < 70) return directions[1]
    if (deg >= 70 && deg <= 110) return directions[2]
    if (deg > 110 && deg < 160) return directions[3]
    if (deg >= 160 && deg <= 200) return directions[4]
    if (deg > 200 && deg < 250) return directions[5]
    if (deg >= 250 && deg <= 290) return directions[6]
    if (deg > 290 && deg < 340) return directions[7]
}