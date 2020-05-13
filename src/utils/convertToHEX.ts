type RGB = [number, number, number]

function generateHEXUnit(rgbUnit: number): string {
  const hex = Number(rgbUnit).toString(16)
  return hex.length < 2 ? `0${hex}` : hex
}

function generateRGB(str: string): RGB {
  let sum = 0
  for (let i = 0, {length} = str; i < length; i++) {
    sum += str.charCodeAt(i)
  }

  const rgb: number[] = []
  let i = 1
  while (i <= 3) {
    rgb.push(Math.floor(Number('0.' + Math.sin(sum + i).toString().substr(6)) * 256))
    i++
  }

  return rgb as RGB
}

export function convertToHEX(str: string): string {
  return generateRGB(str).reduce((hex, rgbUnit) => hex.concat(generateHEXUnit(rgbUnit)), '#')
}
