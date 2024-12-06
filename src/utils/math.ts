export function proportionalityRule(a: number, b: number, x: number): number {
	if (a === 0) throw new Error("'a' can't be zero");

	return (b * x) / a;
}
