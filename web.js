console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")
alert("Hello, Welcome to my Website!");

const FirstName = prompt("Siapa nama depanmu?");
const LastName = prompt("Siapa nama belakangmu?");
const Language = prompt("bisa berbahasa apa?");

const user = {
    name: {
        first: FirstName,
        last: LastName,
    },
    language: Language
};

if (user.language === "English") {
    alert("Nice to meet you" + user.name.first+""+user.name.last+"!");
}else if(user.language === "French"){
    alert("Ravi de vous rencontrer" +user.name.first+""+user.name.last+"!");
}else if(user.language === "Japanes"){
    alert("Hajimemashite," +user.name.first+""+user.name.last+"!");
}else{
    alert("senang bertemu dengan anda" +user.name.first+""+user.name.last+"!");
}    

