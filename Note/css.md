                                            CSS
    background-image: url(); -- img nền
    background-position: center center; -- img focus center
    background-size: cover;
    background-attachment: fixed; -- flat = fixed cố định img althouth scroll vẫn đứng ảnh
    overflow: hidden; -- nếu tràng text thì hide/scroll/...

                                        MODE SHORT: 
    background: color url("htpp..") no-repeat center center / cover;

                                        CHANGE SIZE
font-size: 62.5%;
/* 1rem = 10px*/
because: 100% in page 16px
           ?%   -->   10px
        --> ? = 62.5%  

                                        BORDER -- VIỀN
border: 2px solid red;
border-radius: 50%; --> bo góc

                            MARGIN --  OUTER SPACING VS PADDING -- INER SPACING
margin: top right bottom left;
margin-left: auto; --> block change left
If margin-right: auto; MIX margin-left: auto; ==> center chỉ acitive đối vs tag block
margin: 5rem auto --> ddep
MARGIN COLLAPSE: 2 block top><.bottom có các space khác nhau --> lấy size to nhất
  --> take 1 value when top or bot, right or left
CAN USE số âm để drag block

                                        SHOULD USE: 
* { box-sizing: border-box; }

            DISPLAY -- INLINE TAG will limited for CSS (border/padding), ko hiển thị đúng size
display: block -- transform block

                                        FONT AND TEXT
font-weight: normal; --> độ mỏng word
line-height: ; --> space giữ word trên các dòng khác nhau
text-align: ; --> control position for word
letter/word-spacing: ; --> space giữa các từ/chữ
white-space: nowrap; --> ko cho drop line
*/3 chấm nếu tràn in a line*/   white-space: nowrap;   overflow: hidden;    text-overflow: ellipsis;
*/n dòng mới 3 chấm*/   display: -webkit-box;   -webkit-box-orient: vertical;   -webkit-line-clamp: n;
                                  overflow: hidden;    text-overflow: ellipsis;
word-break: break-word; --> longer nên drop line theo từ có nghĩa

                                            IMAGE
display: block; --> ko class nên trasform 
max-width: 100%; full khung
object-fit: cover;  --> cover in block ko bị méo ảnh
object-position: ; --> focus điểm img 
text-align: center; ra giữa nhưng phải bao bởi div class  

PSEUDO - rê mouse vào thì có hiệu ứng đổi màu
class: hover{color} --> rê mouse vào sẽ đổi màu
class: active{color} --> nhấn giữ đổi màu
class: visited{color} --> nhấn vào đổi

                                            GRADIENT
background-image: linear-gradient( to right bottom/ to left top.., color1, color2);
USING WITH TEXT:
  display: inline-block;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
BACKGROUND OVERLAY GRADIENT: use 1 bg khác mờ đề lên layer -- tk nào nằm trên tk đó code trc
CANIUSE.com --> web check các thuộc tính có hổ trợ cho các web ko
@supports (not) (thuộc tính đó ex: -webkit-background-clip: text){
  carryout code
} --> mean is nếu có support thì thực hiện/ nếu ko thì...
cursor: pointer; --> hover vào thì hiển thị pointer
opacity: 0; --> mất block but chiếm space + pointer
visibility: hidden; --> just space, non pointer
display: none; --> mất luôn, use nhanh

                                                  SHADOW
box-shadow: x y blur(độ nhạt) scale color --> đối vs box nên use tool at ggChrom
text-shadow: x y blur color

                                            VARIABLE -- in HTML
:root {
  --primary-color: color
} --> globle var
.class{
  --primary-color: ...
} --> local var uu tien use 

SPECIFICITY -- độ ưu tiên
Tags < Class < ID < Inline(in HTML) < !important

                                                  CHILD
(tags cần sửa):first-child {color,...} --> fix tags đầu
(tags cần sửa):nth-child(n site tag cần fix) --> fix tag theo n
(tags cần sửa):nth-last-child(n từ dưới lên)
(tags cần sửa):not(:first-child) --> all trừ site đầu
(tags cần sửa):nth-child(even/odd) --> fix chẵn lẻ
NÊN CHECK CÙNG LOẠI THẺ 
(tags cần sửa):first-of-child {color,...}
                            *LƯU Ý: khi có thêm tag con trong thì phải:
  (cha):first-of-child (con) {...}
COMBINATOR - chỏ liên tục
ex: h3 + .title {} --> đổi màu tk .title nhưng 2 tk này phải đúng kề nhau
    h3 ~ .title {} --> đổi màu tk .title but ko cần liền kề

                                  ADVACNE SELECTER - CHỎ ĐẾN
Ex: trong thẻ a chỏ đến có href để sửa
      a[href^="htpp"] {color,..} --> trỏ đến a nào có href đầu tiên là htpp
      a[href$=".vn"] {color,..} --> ... đuôi cuối là .vn
      a[href*="www"] {color,..} --> ... có chứa www
Ex: <div data="value">abx</div>
      div[data = "value"] {color,...} --> trỏ chính xác đến thẻ div có data = "value"

KÍ TỰ/DÒNG ĐẦU VIẾT HOA:
p :: first-letter/line {...}