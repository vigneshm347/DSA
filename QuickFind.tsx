class QuickFind {
public id: number[]
 constructor(size: number) {
   this.id = Array.from({ length: size }, (_, index) => index);
 }
 
 find(p: number, q: number): boolean {
 	 return this.id[p] === this.id[q]
 }
 
 union(p: number, q: nummber): void {
  // get the id's first
  const id_p = this.id[p];
	const id_q = this.id[q];
  
  // now you have the id, we can iterate and start looping the array and change the connections
  for (let i = 0; i <= this.id.length; i++) {
  	if(this.id[i] == id_p) {
    	this.id[i] = id_q
    }
  }
 }
} 

const qf = new QuickFind(10)
console.log(`0 and 9 is connected? ${qf.find(0,9)}`)
qf.union(0,9)
console.log(`0 and 9 is connected? ${qf.find(0,9)}`)

console.log(`2 and 5 is connected? ${qf.find(2,5)}`)
qf.union(2,5)
console.log(`2 and 5 is connected? ${qf.find(2,5)}`)

console.log(`0 and 5 is connected? ${qf.find(0,5)}`)
qf.union(0,5)
console.log(`0 and 5 is connected? ${qf.find(0,5)}`)

console.log(`2 and 9 is connected? ${qf.find(2,9)}`)
