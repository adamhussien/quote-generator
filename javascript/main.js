function generate(){
  var quotes = {
   "- emily henry" : '"But most of us are too scared to even ask what we want, in case we can not have it "',
   "- robert green" : '"Do not accept the roles that society foists on you. Re-create yourself by forging a new identity"',
   "- mark manson" : '"Being wrong opens us up to the possibility of change. Being wrong brings the opportunity for growth."',
    "- colleen hoover" : '"“Sometimes life is very hard. Sometimes it demands so much of you that you start losing pieces of yourself as you stretch out to give what the world wants to take.”"',
    "- sylvya day" : '" i did not know i was looking for anything until i saw you"'
  };

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes [author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
};