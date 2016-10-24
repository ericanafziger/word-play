$(document).ready(function() {
  $("form").submit(function(event) {
    // var sentenceString = $("input#sentence").val();
    var sentenceString = "This is a sentence, like any other.";
    var sentenceArray = sentenceString.split(" ");
    var newArray = [];
    sentenceArray.forEach(function(word){
        var length = word.length;
      if (length >= 3) {
        newArray.push(word);
      }
    });
    // sentenceArray.push()
    console.log(sentenceString);
    console.log(sentenceArray);



    event.preventDefault();
    $("#newSentence").show();
  });
});
