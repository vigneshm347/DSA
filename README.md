# DSA
## Topics covered
- Dynamic connectivity
	- [Quick find](https://jsfiddle.net/vicky519/16mey4jp/28/): Two items are connected if they have the same `value`
    - As the name suggests the `find` operation is quick
    - The `union` is expensive as it needs to change the `id[p]` to `id[q]`.
  - [Quick Union](https://jsfiddle.net/vicky519/sk6L51d8/11/): Two items are connected if they both have the same `root` 
    - This is slightly faster than Quick Find as it does not iterate over every element in the list
    - The `find` operation is expensive where it will try to find the `root` of a given element
    - The `connected` operation is fast as it needs to compare only the `roots` of the given numbers
    - The `union` is also quick as all it needs to do is to assign the `root(q)` to `root(p)`
