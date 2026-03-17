let text=prompt(":ادخل الجملة");
let words= text.trim().split("");
//عدد الكلمات
let wordcount=words.length;
//عدد الحروف بدون مسافات
let charcount=text.replace("").length;
//حساب تكرار الكلمات
let frequency={};

for(let word of words){
    word=word.toLocaleUpperCase();
    if(frequency[word]){
        frequency[word]++;
    } else{
        frequency[word]=1;

    }

}
//ايجاد اكثر كلمه تكرار
let maxword="";
let maxcount=0;

for (let word in frequency){
    if (frequency[word]>maxcount){
        maxcount=frequency[word];
        maxword=word;
    }
}
console.log("عدد الكلمات:",wordcount);
console.log("عدد الحروف بدون مسافات:",charcount);
console.log("اكثر كلمة تكرارا:",maxword);
