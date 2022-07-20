                                                 HOISTING -- only var mới bị
console.log(a)
let/const a = 100
--> will be error

                                                            STRING
USING VARIABLE: let a = `Im ${yearsOld}`
--> console.log(variable.length) -- start 0 <--
#incdex: sites char in string and space 
.split("Thing cần tách")
.to(lower/uper)Case, normal/special text
.startsWith/EndsWith, check thing begin/last -- có start bằng chữ đó ko, reply về boolean
.includes, check thing
.indexOf, check site index of thing
.lastIndexOf, check last site of thing (begin to last) -- take last char
.replace/.repeat(n), thay thé/ lap lai
.slice(begin, end-1),  take new string from margin string -- có thể lấy âm thì phải qua
.trim, remove space 2 bên
.trimStart/TrimEnd, remove space left/right 
.charAt(0), take char theo site index
.substr(index, length), first char to số char -- lấy ra 1 phần string
.substring(start index, end index - 1), take các char 
String(value) --> convert sang string

                                                            NUMBER
.parse(Int/Float) -- convert từ string sang số
Number(value) -- try convert ra số
  ex: undefined --> NaN -- null/false/" " --> 0
Marth.abs() 
Math.floor/cell -- lm tròn xuống or lên
Math.round(value) -- lm tròn gần nhất
Math.random()*10 -- random 1 - 9
Math.max(1, 3, -2) --> reply 3
Math.pow(3, 2) --> 3^2
.toFixed(2) -- 0.3333 --> 0.33
isNaN("asdaj") --> true
Number.isNaN(NaN) --> chỉ cái này mưới true

                                                    OPERATION -- TYPE COERCION
console.log(10 + "10") --> string 1010
console.log(null + "") --> string null
console.log(null + undefined) --> NaN 
--WARNING: nếu ko là + thì sẽ convert sang Num

                                                          OPERATION SS
> < >= <= 
$$ || !:phủ định lại  
== >< != loose equality -- chỉ ss value 
=== >< !== strict equality -- cả type & value
condition ? true : false --> có thể viết liên tiếp nhau được

                                                        DATA TYPES REPLY
BOOLEAN: falsy value --> " ", 0, false, undefined, null 
Boonlean(value falsy) --> false                                                   

                                                  OTHER FUN -- hiện cho client in4 
alert("Annouce") 
prompt("How are you ?") -- appear a box so that we import it
confirm("You are 18yo")

                                                            FUNCTIONS
parameter: tham số
arguments: đối só
function nameval(parameter,.){
  code
  return 
}
CAN: variable = nameFunction
Anonymous function(function expression): let a = function (){} --> Ko bi Hoisting
  --> delcare hàm trc khi xuất ra
IIFE -- immediately invoked function execution: viết hàm phát chạy ngay đc ko cần gọi
(function () {
  console.log("This is a IIFE function")
})
***Warning: can use arrow function to NGẮN gọn

                                                          CLOSURE 
--> tk con can access vào các var của tk cha
--> có thể recall lại đc đối vs CLOSURE

                                                          DATE OBJECT
new Date() --> print now data
new Date(timestamp) --> base on timestamp to print date
new Date(year, month, day, hours, minutes, seconds, miliseconds) 
new Date(date string) -->
.getFullyear() --> print năm sinh 
.set.... --> thiết lập lại các get có sẵn
.toDateString() --> day month ngàymấy year
.toLocaledateString("vi-VI") --> dd/m/yyyy
.toTimeString() --> 00:22:00 GMT+0700 (Indochina time)
setTimeout(..., seconds) --> carry out lệnh after 1 for time defined
setInterval(..., seconds) --> sau for time thì carry out lệnh
050

                                                            EMMET
#thing - id
Alt + directions - move code in a line
Shif + alt + directions - copy similar to
Double click + ctrl D - replace it 
ul>li*10{item$} 
ul>li.item*10 - class item similar to 
Tag.class + tag2.class …
> - create ra son 

