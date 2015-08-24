//   //
//   //
//   // $(document).on('ready', function() {
//   //
//   // });
// //
// function arrShuffle(shuffleArr){
//   var length = shuffleArr.length;
//   var newShuffleArr = [];
//   for (var i = length; i > 0; i--) {
//     var rand = Math.floor(Math.random() * i);
//     var transfer = shuffleArr.splice(rand,1);
//     newShuffleArr.push(transfer[0]);
//   }
//   return newShuffleArr;
// }
// function arrChunk(arr, chunks){
//   var chunkArr = arr.slice(0);
//   var newChunkArr = [];
//   var size = Math.floor(chunkArr.length / chunks);
//   var leftOvers = chunkArr.length % chunks;
//   for (var i = 0; i < chunks; i++) {
//     newChunkArr.push(chunkArr.splice(0,size));
//   }
//   for (var i = 0; i < leftOvers; i++) {
//     if(newChunkArr[i].length === size){
//       newChunkArr[i].push(chunkArr.splice(0,1)[0]);
//     }
//   }
//   return newChunkArr;
// }
// var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var shuffledArray = shuffle(inputArray);
// var chunked = chunk(shuffledArray,4);
