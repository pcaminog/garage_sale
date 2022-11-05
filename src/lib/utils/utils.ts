export function conCoord(coord: string) {
	let arrayco: number[];
	let reg = /(.*),(.*)/;
	let m = coord.match(reg);
	if (m != null) {
		arrayco = [Number(m[1]), Number(m[2])];
        console.log(arrayco)
		return arrayco;
	}
}
