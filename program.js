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

////////////////
let nums=[5,6,5,2,4,6,9,8,1];
let uniquenums=[new Set(nums)];//ازالة التكرار
uniquenums.sort((a,b)=>a-b);//تصاعدي
let sum=uniquenums.reduce((total,num)=>total+num,0);//حساب المجموع
console.log("المصفوفة قبل ازالة اتكرار و الترتيب",uniquenums);
console.log("sum=",sum);
//////////////////
let arr=[[1,2],[3,4],[5,6],[7,8]];
let newarr=arr.flat();
console.log(newarr);

