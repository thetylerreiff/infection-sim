export function random(max = 1) {
  const rand = Math.random()
  if (max = 1) {
    return rand
  }
  return Math.floor(rand * max + 1);
}
