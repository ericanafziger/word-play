$(document).ready(function() {
  $("form").submit(function(event) {
    var sentenceString = $("input#sentence").val();
    // var sentenceString = "This is a sentence, like any other.";
    var lowerCaseString = sentenceString.toLowerCase();
    var punctuationless = lowerCaseString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
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
    alert("to uppercase next");
    var capFirst = newString.charAt(0).toUpperCase();
    alert(capFirst);
    var capitalizedString = newString.replace(newString.charAt(0),capFirst);
    $("#newSentence").text(capitalizedString+".");
    // sentenceArray.push()
    console.log(sentenceString);
    console.log(sentenceArray);



    event.preventDefault();
    $("#newSentence").show();
  });
});
