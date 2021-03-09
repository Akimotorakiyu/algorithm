function pailie(num: number[]): number[][] {
  if (num.length === 1) {
    return [num];
  } else {
    const remain = num
      .map((e, index) => {
        const l = [...num];
        l.splice(index, 1);

        const r = pailie(l);

        const a = r.map((row) => {
          return [e].concat(row);
        });

        return a;
      })
      .flat();
    return remain;
  }
}

const a = pailie([5, 4, 3, 2, 1]);
console.log(a, a.length);
