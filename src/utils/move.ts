export function move<T>(array: T[], oldIndex: number, newIndex: number): T[] {
  const copy = [...array]
  const item = copy.splice(oldIndex, 1)[0]
  copy.splice(newIndex, 0, item)
  return copy
}
