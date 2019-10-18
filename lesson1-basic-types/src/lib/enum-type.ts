// Enum

enum ColorEnum1 {Red, Green, Blue}
let c1: ColorEnum1 = ColorEnum1.Green;
//=> c1 = 1

enum ColorEnum2 {Red=1, Green=10, Blue}
let c2: ColorEnum2 = ColorEnum2.Blue
//=> c2 = 11

enum ColorEnum3 {Red = 1, Green, Blue}
let colorName: string = ColorEnum3[2];
//=> colorName = 'Green'

enum ColorEnum4 {Red = "Red", Green="Green", Blue="Blue"}
let c3:ColorEnum4 = ColorEnum4.Blue;
//=> c3 = 'Blue'


