export function colorNormalization(red: number, green: number, blue: number, alpha: number = 1): [number, number, number, number] {
  if (red < 0 || red > 255) {
    console.warn('red的参数范围为0-255', '当前值为', red)
    return
  }
  if (green < 0 || green > 255) {
    console.warn('green的参数范围为0-255', '当前值为', green)
    return
  }

  if (blue < 0 || blue > 255) {
    console.warn('blue的参数范围为0-255', '当前值为', blue)
    return
  }

  if (alpha < 0 || alpha > 1) {
    console.warn('alpha的参数范围为0-1', '当前值为', alpha)
    return
  }
  return [red / 255, green / 255, blue / 255, alpha]
}

export function clearExtension(filename: string) {
  return filename.replace(/\.[^.]+$/, '')
}