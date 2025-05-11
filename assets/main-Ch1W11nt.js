import"./tailwind-Biu5Z5Ce.js";let c=(...n)=>{n.forEach(e=>{document.querySelector("#root").insertAdjacentHTML("beforeend",e)})},i=`<div class="flax justify-center items-center h-screen ">
        <div>
          <h1 class="sm:text-[60px] md:text-[80px]  sm:w-full lg:w-full  text-white text-center p-4">
            السلام علیک یا ابا عبدالله
          </h1>
        </div>

        <div>
          <img
            class="w-[250px] m-auto pb-4"
            src="../../image/logo.svg"
            alt="/>
        </div>
        <div class="">
          <div class="sm:w-[300px] md:w-[400px] lg:w-[600px] xl:w-[800px]  sm:m-auto pt-4 h-[100px]" id="Countdown  ">
            <div
              class="xl:w-[800px] bg-white p-8 rounded-2xl shadow-xl text-center space-y-4"
            >
              <h1 class="text-2xl font-bold text-gray-700"></h1>
              <div id="countdown" class="text-4xl font-mono text-red-600">
                --:--:--:--
              </div>
              <p class="text-2xl text-gray-500">
                تاریخ شروع ثبت نام:20 تیر 1403, مصادف با 15 محرم
              </p>
             
            </div>
          </div>
        </div>
      </div>`;const x=()=>{const n=new Date("2025-07-11T00:00:00"),e=document.getElementById("countdown"),o=()=>{const t=n-new Date;if(t<=0){e.textContent="00:00:00:00",clearInterval(s),window.location.href="./test.html";return}const a=Math.floor(t/(1e3*60*60*24)),d=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),l=Math.floor(t%(1e3*60*60)/(1e3*60)),r=Math.floor(t%(1e3*60)/1e3);e.textContent=String(a).padStart(2,"0")+":"+String(d).padStart(2,"0")+":"+String(l).padStart(2,"0")+":"+String(r).padStart(2,"0")},s=setInterval(o,1e3);o()};c(i);x();
