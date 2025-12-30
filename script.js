const quiz = [
{q:"سردار شهید حاج قاسم سلیمانی در چه سالی و کجا به دنیا آمد؟", options:["سال ۱۳۳۵ در روستای قنات‌ملک استان کرمان","۱۳۳۰ در تهران","۱۳۴۰ در مشهد","۱۳۳۵ در اصفهان"], answer:0},
{q:"خانواده سردار چه ویژگی داشتند؟", options:["خانواده‌ای ساده، مذهبی و پرتلاش","ثروتمند و سیاسی","ساده و بی‌تفاوت","فرهیخته و هنرمند"], answer:0},
{q:"سردار قبل از سپاه چه کاری می‌کرد؟", options:["کشاورزی و کارگری","دانشگاه و تدریس","شرکت تجاری","سربازی"], answer:0},
{q:"چه چیزی او را به دفاع از کشور کشاند؟", options:["انقلاب اسلامی و احساس مسئولیت دینی","سرگرمی","دوستی با نیروها","علم"], answer:0},
{q:"اولین حضور نظامی کجا بود؟", options:["جنگ ایران و عراق به عنوان بسیجی","مدرسه","سپاه پاسداران","ارتش"], answer:0},
{q:"سردار فرمانده کدام لشکر بود؟", options:["لشکر ۴۱ ثارالله کرمان","لشکر ۲۱ رمضان","لشکر ۱۰ سیدالشهدا","لشکر ۵۷ ولیعصر"], answer:0},
{q:"ویژگی بارز اخلاقی سردار چه بود؟", options:["فروتنی و تواضع","شجاعت","صلح‌طلبی","قدرت‌طلبی"], answer:0},
{q:"چرا رزمندگان او را دوست داشتند؟", options:["احترام و همراهی با نیروها","قدرت نظامی","شهرت","غیرتی بودن"], answer:0},
{q:"سردار چه نقشی در دفاع مقدس داشت؟", options:["فرماندهی و حضور در عملیات‌های مهم","پشتیبانی","مشاوره سیاسی","رصد اطلاعات"], answer:0},
{q:"فرماندهی نیروی قدس سپاه چه مسئولیتی است؟", options:["هدایت مأموریت‌های برون‌مرزی","رصد داخلی","امور فرهنگی","امور اقتصادی"], answer:0},
{q:"سردار چه نقشی در مقابله با داعش داشت؟", options:["هماهنگی و مشاوره به نیروهای مقاومت","نظارت سیاسی","رصد اقتصادی","آموزش"], answer:0},
{q:"چرا به عنوان استراتژیست شناخته می‌شد؟", options:["به دلیل برنامه‌ریزی دقیق عملیات‌ها","قدرت نظامی","شهرت جهانی","تحقیق علمی"], answer:0},
{q:"رفتار او با مردم چگونه بود؟", options:["صمیمی، ساده و محترمانه","خشن","دور از مردم","تنها مشاور"], answer:0},
{q:"چه چیزی باعث اعتماد نیروها شد؟", options:["صداقت و حضور میدانی","قدرت سلاح","شهرت","شایعه"], answer:0},
{q:"سردار چگونه در شرایط سخت تصمیم می‌گرفت؟", options:["با آرامش و تحلیل دقیق","با عجله","با تقلید","با حدس"], answer:0},
{q:"چرا الگوی جوانان است؟", options:["ترکیب شجاعت، اخلاق و ایمان","قدرت و پول","شهرت","تقلید از دیگران"], answer:0},
{q:"سردار چه تأثیری بر روحیه نیروها داشت؟", options:["ایجاد انگیزه و امید","بی‌تفاوتی","ترس","کنترل سخت"], answer:0},
{q:"نقش او در منطقه چه بود؟", options:["تقویت محور مقاومت","کنترل اقتصادی","مدیریت سیاسی","تحقیق نظامی"], answer:0},
{q:"چگونه با فرماندهان دیگر کشورها تعامل داشت؟", options:["با احترام و همکاری","با تهدید","بی‌تفاوت","فقط مشاوره"], answer:0},
{q:"چه چیزی او را متمایز می‌کرد؟", options:["اخلاق در کنار قدرت","قدرت خالص","شهرت","نظارت"], answer:0},
{q:"چگونه آموزش نیروها را انجام می‌داد؟", options:["با آموزش عملی و روحیه‌بخشی","تئوری خالص","کمکی","غیرحضوری"], answer:0},
{q:"چرا حضور میدانی مهم بود؟", options:["اعتماد و هماهنگی بهتر","نظارت اداری","قدرت شخصی","شایعه"], answer:0},
{q:"چگونه با خطر روبه‌رو می‌شد؟", options:["با شجاعت و تدبیر","با ترس","با بی‌تفاوتی","با اجبار دیگران"], answer:0},
{q:"نقش در ایجاد امنیت چه بود؟", options:["جلوگیری از گسترش ناامنی","تحقیق","اقتصاد","مدیریت مالی"], answer:0},
{q:"چرا محبوب مردم شد؟", options:["خدمت بی‌ادعا","شهرت","قدرت","پول"], answer:0},
{q:"نگاه او به قدرت چه بود؟", options:["قدرت ابزار بود نه هدف","قدرت هدف بود","قدرت برای سلطه","بی‌تفاوتی"], answer:0},
{q:"ویژگی مدیریتی او چه بود؟", options:["تصمیم‌گیری دقیق و انسانی","سخت‌گیری","قدرت‌طلبی","بی‌تفاوتی"], answer:0},
{q:"چگونه الهام‌بخش شد؟", options:["با عمل نه فقط با حرف","با شعار","با تبلیغ","با نمایش"], answer:0},
{q:"چه درسی برای جوانان دارد؟", options:["مسئولیت‌پذیری و ایمان","ترس","شهرت","قدرت"], answer:0},
{q:"مهم‌ترین پیام زندگی چیست؟", options:["ترکیب ایمان، شجاعت و اخلاق","قدرت","شهرت","تقلید"], answer:0}
];

let current=0, score=0, lives=3, timer=15, interval;

function showQuestion(){
  if(current>=quiz.length || lives<=0){
    document.getElementById("question").innerText="پایان بازی!";
    document.getElementById("score").innerText="امتیاز شما: "+score;
    document.querySelectorAll("#options button").forEach(b=>b.style.display="none");
    document.getElementById("sound-finish").play();
    return;
  }
  document.getElementById("question").innerText=quiz[current].q;
  for(let i=0;i<4;i++){
    let btn=document.getElementById("btn"+i);
    btn.innerText=quiz[current].options[i];
    btn.onclick=function(){
      clearInterval(interval);
      if(i===quiz[current].answer){
        document.getElementById("sound-correct").play();
        score+=10;
        document.getElementById("message").innerText="✅ درست است!";
      }else{
        document.getElementById("sound-wrong").play();
        lives--;
        document.getElementById("message").innerText="❌ غلط است!";
        document.getElementById("lives").innerText=lives;
      }
      current++;
      setTimeout(()=>{
        document.getElementById("message").innerText="";
        timer=15;
        startTimer();
        showQuestion();
      },700);
    }
  }
  document.getElementById("score").innerText=score;
}

function startTimer(){
  document.getElementById("timer").innerText="⏱ "+timer;
  interval=setInterval(()=>{
    timer--;
    document.getElementById("timer").innerText="⏱ "+timer;
    if(timer<=0){
      clearInterval(interval);
      lives--;
      document.getElementById("lives").innerText=lives;
      current++;
      showQuestion();
      timer=15;
      startTimer();
    }
  },1000);
}

showQuestion();
startTimer();
