/*
    Javascript Sets
    A set is a collection of unique values. Each value can only occur one in a set.
    The values can be of any data type
*/
// Creating a set
const points = new Set([1, 2, 3]);
// Adding values to a set
points.add(4)
points.add(3)
points.add(5)
console.log(points)

// Deleting from a set
points.delete(3)
console.log(points)
// Get the size of a set
console.log(points.size)
// We can check for an element in a set
console.log(points.has(3))
console.log(points.has(4))

for(let point of points){
    console.log(point);
}

// Javascript Maps
// A map holds key-value pairs where the keys can be of any datatype, A map remembers the original insertion order of the keys.

// Creating a map
const map1 = new Map([
    ['a', 1000], 
    ['b', 2],
]);
// Adding items to the map
map1.set('c', 3);
map1.set('d', 4);
map1.set(5, 4);

// Checking for an item
console.log(map1.has('c'))
map1.delete('b')

// Get an item from the map
console.log(map1.get('a'))

// To get the number of items in a map
console.log("The Size of the map is", map1.size)

console.log(map1)
for(const [key, value] of map1){
    console.table(`${key} : ${value}`)
}
// To clear a map
map1.clear()