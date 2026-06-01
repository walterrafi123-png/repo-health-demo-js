export function greet(name = "world") {
  const trimmed = String(name).trim();
  const target = trimmed.length > 0 ? trimmed : "world";
  return `Hello, ${target}!`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet(process.argv[2]));
}
