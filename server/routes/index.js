var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enter some shit' });
});

router.post('/', function(req, res, next){
  var shuffle  = arrShuffle(req.body.shuffleArr.split(','));
  var chunks  = arrChunk(shuffle, req.body.chunks);
  console.log(chunks);
  var output = '';
  for (var i = 0; i < chunks.length; i++) {
    output += 'Chunk #'+ (i+1) + ': ' + chunks[i] + '  \n';
  }
  res.render('index', {title: 'Shuffled and Chunked!', shuffleChunk: output});
});


function arrShuffle(shuffleArr){
  var length = shuffleArr.length;
  var newShuffleArr = [];
  for (var i = length; i > 0; i--) {
    var rand = Math.floor(Math.random() * i);
    var transfer = shuffleArr.splice(rand,1);
    newShuffleArr.push(transfer[0]);
  }
  return newShuffleArr;
}
function arrChunk(arr, chunks){
  var chunkArr = arr.slice(0);
  var newChunkArr = [];
  var size = Math.floor(chunkArr.length / chunks);
  var leftOvers = chunkArr.length % chunks;
  for (var i = 0; i < chunks; i++) {
    newChunkArr.push(chunkArr.splice(0,size));
  }
  for (var i = 0; i < leftOvers; i++) {
    if(newChunkArr[i].length === size){
      newChunkArr[i].push(chunkArr.splice(0,1)[0]);
    }
  }
  return newChunkArr;
}
module.exports = router;
