// .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")

export function numberComma(val) {
    return (val+"").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}