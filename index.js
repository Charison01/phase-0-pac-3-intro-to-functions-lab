function shout(string){
    return string.toUpperCase();
}
//Whisper function
function whisper(string){
    return string.toLowerCase();
}
//logshout function
function logShout(string){
    console.log(string.toUpperCase());
}
//logwhisper function
function logWhisper(string){
    console.log(string.toLowerCase());
}
//Hi to roomate function
function sayHiToHeadphonedRoommate(string){
   if (string.toUpperCase() === string){
    return `YES INDEED!`;
   } else if (string.toLowerCase() === string) {
    return `I can't hear you!`;
   } else if (string === `Let\'s have dinner together!`){
    return "I would love to!"
   }
   
}