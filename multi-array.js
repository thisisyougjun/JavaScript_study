var arr = new Array(3); 		// 3개의 요소를 가지는 배열을 생성함.
for (var row = 0; row < 3; row++) {
    arr[row] = new Array(4); 	// 각각의 요소마다 또다시 4개의 요소를 가지는 배열을 생성함.
    for (var column = 0; column < 4; column++) {
        arr[row][column] = "[" + row + "," + column + "]"; 	// 각각의 배열 요소를 생성함.
       console.log(arr[row][column] + " "); 			// 각 배열 요소에 접근함.
    }
    console.log("<br>")
}