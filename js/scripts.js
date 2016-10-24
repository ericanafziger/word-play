$(document).ready(function() {
  $("form").submit(function(event) {
    var sentenceString = $("input#sentence").val();
    // var sentenceString = "This is a sentence, like any other.";
    var lowerCaseString = sentenceString.toLowerCase();
    var punctuationless = lowerCaseString.replace(/[.,]/g,"");
    var finalString = punctuationless.replace(/\s{2,}/g," ");

    var sentenceArray = finalString.split(" ");
    var newArray = [];
    var newString ="";
    sentenceArray.forEach(function(word){
        var length = word.length;
      if (length >= 3) {
        newArray.push(word);
      }

    });
    newString = newArray.reverse().join([separator = ' ']);
    $("#newSentence").text(newString);
    // sentenceArray.push()
    console.log(sentenceString);
    console.log(sentenceArray);



    event.preventDefault();
    $("#newSentence").show();
  });
});
