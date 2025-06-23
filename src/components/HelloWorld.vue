<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});
function generateRandomString(length = 11) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * chars.length);
    result += chars[randIndex];
  }
  return result;
}

console.log(generateRandomString()); // 範例輸出：Tm_bZazwKQe

const count = ref(0);
</script>

<template>
  <div class="flex w-full justify-center gap-2 py-2">
    <div role="alert" class="alert">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-info h-6 w-6 shrink-0"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span> https://daisyui.com/</span>
    </div>
    <span class="loading loading-spinner text-primary"></span>
    <span class="loading loading-spinner text-secondary"></span>
    <span class="loading loading-spinner text-accent"></span>
    <span class="loading loading-spinner text-neutral"></span>
    <span class="loading loading-spinner text-info"></span>
    <span class="loading loading-spinner text-success"></span>
    <span class="loading loading-spinner text-warning"></span>
    <span class="loading loading-spinner text-error"></span>
    <!--
* Import Cally web component from CDN
<script type="module" src="https://unpkg.com/cally"></script>

* Or install as a dependency:
npm i cally
* and import it in JS
import "cally";
-->

    <calendar-date
      class="cally bg-base-100 border border-base-300 shadow-lg rounded-box"
    >
      <svg
        aria-label="Previous"
        class="fill-current size-4"
        slot="previous"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
      </svg>
      <svg
        aria-label="Next"
        class="fill-current size-4"
        slot="next"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
      </svg>
      <calendar-month></calendar-month>
    </calendar-date>
    <span class="indicator-item badge badge-secondary">12</span>
    <a href="#item1" class="btn btn-xs">1</a>
    <a href="#item2" class="btn btn-xs">2</a>
    <a href="#item3" class="btn btn-xs">3</a>
    <a href="#item4" class="btn btn-xs">4</a>
  </div>
  <div class="carousel w-33">
    <div id="item1" class="carousel-item w-full">
      <img
        src="https://raw.githubusercontent.com/abuhg17/abuhg17.github.io/refs/heads/main/21c67f20-84c2-4646-bec3-b9fa233b8b0b.png"
        class="w-full"
      />
    </div>
    <div id="item2" class="carousel-item w-full">
      <img
        src="https://raw.githubusercontent.com/abuhg17/abuhg17.github.io/refs/heads/main/41debbc7-e26c-402d-8d29-7fa1b06441b7.png"
        class="w-full"
      />
    </div>
    <div id="item3" class="carousel-item w-full">
      <img
        src="https://raw.githubusercontent.com/abuhg17/abuhg17.github.io/refs/heads/main/63cc7480-d6a0-4504-9a35-89b83d254198.png"
        class="w-full"
      />
    </div>
    <div id="item4" class="carousel-item w-full">
      <img
        src="https://raw.githubusercontent.com/abuhg17/abuhg17.github.io/refs/heads/main/ec6a52ef-397a-481d-a1c2-4336dabc2eb5.png"
        class="w-full"
      />
    </div>
  </div>
  <div class="card bg-base-100 w-96 shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Card Title</h2>
      <p>
        A card component has a figure, a body part, and inside body there are
        title and actions parts
      </p>
    </div>
    <figure>
      <img
        class="mask mask-heart"
        src="https://raw.githubusercontent.com/abuhg17/create20250705vue0418/refs/heads/main/public/MyVideoImage/%E3%81%84%E3%81%8D%E3%81%A5%E3%82%89%E3%81%84%E9%83%A8%EF%BC%81%E3%80%8CWhat%20is%20my%20LIFE_%E3%80%8D%E3%83%AA%E3%83%AA%E3%83%83%E3%82%AF%E3%83%93%E3%83%87%E3%82%AA%E3%80%90%E3%82%A4%E3%82%AD%E3%83%85%E3%83%A9%E3%82%A4%E3%83%96%EF%BC%81%20LOVELIVE!%20BLUEBIRD%E3%80%91.webp"
        alt="Shoes"
      />
    </figure>
  </div>
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        class="mask mask-star-2"
        src="https://raw.githubusercontent.com/abuhg17/create20250705vue0418/refs/heads/main/public/MyVideoImage/%E3%81%84%E3%81%8D%E3%81%A5%E3%82%89%E3%81%84%E9%83%A8%EF%BC%81%20%E9%AB%98%E6%A9%8B%E3%83%9D%E3%83%AB%E3%82%AB%20Solo%20Song%E3%80%8C%E6%B5%85%E8%8D%89Guilty%20Girl%E3%81%AE%E6%AD%8C%E3%80%8D%E3%83%AA%E3%83%AA%E3%83%83%E3%82%AF%E3%83%93%E3%83%87%E3%82%AA%E3%80%90%E3%82%A4%E3%82%AD%E3%83%85%E3%83%A9%E3%82%A4%E3%83%96%EF%BC%81%20LOVELIVE!%20BLUEBIRD%E3%80%91.webp"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Card Title</h2>
      <p>
        A card component has a figure, a body part, and inside body there are
        title and actions parts
      </p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  <div class="badge badge-soft badge-primary">Primary</div>
  <div class="badge badge-soft badge-secondary">Secondary</div>
  <div class="badge badge-soft badge-accent">Accent</div>
  <div class="badge badge-soft badge-info">Info</div>
  <div class="badge badge-soft badge-success">Success</div>
  <div class="badge badge-soft badge-warning">Warning</div>
  <div class="badge badge-soft badge-error">Error</div>
  <button class="btn btn-dash">Default</button>
  <button class="btn btn-dash btn-primary">Primary</button>
  <button class="btn btn-dash btn-secondary">Secondary</button>
  <button class="btn btn-dash btn-accent">Accent</button>
  <button class="btn btn-dash btn-info">Info</button>
  <button class="btn btn-dash btn-success">Success</button>
  <button class="btn btn-dash btn-warning">Warning</button>
  <button class="btn btn-dash btn-error">Error</button>
  <div class="collapse bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-1" checked="checked" />
    <div class="collapse-title font-semibold">How do I create an account?</div>
    <div class="collapse-content text-sm">
      Click the "Sign Up" button in the top right corner and follow the
      registration process.
    </div>
  </div>
  <div class="collapse bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title font-semibold">
      I forgot my password. What should I do?
    </div>
    <div class="collapse-content text-sm">
      Click on "Forgot Password" on the login page and follow the instructions
      sent to your email.
    </div>
  </div>
  <div class="collapse bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title font-semibold">
      How do I update my profile information?
    </div>
    <div class="collapse-content text-sm">
      Go to "My Account" settings and select "Edit Profile" to make changes.
    </div>
  </div>
  <input type="checkbox" value="synthwave" class="toggle theme-controller" />
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" />

    <!-- sun icon -->
    <svg
      class="swap-on h-10 w-10 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
      />
    </svg>

    <!-- moon icon -->
    <svg
      class="swap-off h-10 w-10 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
      />
    </svg>
  </label>
  <button class="btn" onclick="my_modal_3.showModal()">open modal</button>
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click on ✕ button to close</p>
    </div>
  </dialog>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div v-for="num in 10">{{ generateRandomString() }}</div>
  <div class="tooltip">
    <button class="btn">33</button>
    <div class="tooltip-content">
      <div
        class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black"
      >
        2021年<br />33歲
      </div>
    </div>
  </div>
  <div class="tooltip">
    <button class="btn">5 12</button>
    <div class="tooltip-content">
      <div
        class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black"
      >
        委任第五職等<br />簡任第十二職等
      </div>
    </div>
  </div>
  <div class="tooltip">
    <button class="btn">12 18</button>
    <div class="tooltip-content">
      <div
        class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black"
      >
        臺北市第12屆市長<br />臺北市議會第18屆議員選舉選舉公報
      </div>
    </div>
  </div>
  <div class="tooltip">
    <button class="btn">18 23</button>
    <div class="tooltip-content">
      <div
        class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black"
      >
        第18屆立法委員選舉選舉公報<br />第23任總統副總統選舉選舉公報
      </div>
    </div>
  </div>
  <div class="tooltip">
    <button class="btn">5 23</button>
    <div class="tooltip-content">
      <div
        class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black"
      >
        女<br />5班23號<br />國中補習班同學
      </div>
    </div>
  </div>
  <div class="tooltip">
    <button class="btn">座號和</button>
    <div class="tooltip-content">
      <div
        class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black"
      >
        男<br />1號<br />女<br />32號<br />國中同班同學
      </div>
    </div>
  </div>
  <div class="mockup-browser border border-base-300 w-full">
    <div class="mockup-browser-toolbar">
      <div class="input">https://daisyui.com</div>
    </div>
    <div class="grid place-content-center h-80">Hello!</div>
  </div>
  <div class="mockup-code w-full">
    <pre data-prefix="$"><code>npm i daisyui</code></pre>
  </div>
  <div class="mockup-phone border-primary">
    <div class="mockup-phone-camera"></div>
    <div class="mockup-phone-display">
      <img
        alt="wallpaper"
        src="https://raw.githubusercontent.com/abuhg17/create20250705vue0418/refs/heads/main/public/MyVideoImage/%E3%81%84%E3%81%8D%E3%81%A5%E3%82%89%E3%81%84%E9%83%A8%EF%BC%81%20%E9%AB%98%E6%A9%8B%E3%83%9D%E3%83%AB%E3%82%AB%20Solo%20Song%E3%80%8C%E6%B5%85%E8%8D%89Guilty%20Girl%E3%81%AE%E6%AD%8C%E3%80%8D%E3%83%AA%E3%83%AA%E3%83%83%E3%82%AF%E3%83%93%E3%83%87%E3%82%AA%E3%80%90%E3%82%A4%E3%82%AD%E3%83%85%E3%83%A9%E3%82%A4%E3%83%96%EF%BC%81%20LOVELIVE!%20BLUEBIRD%E3%80%91.webp"
      />
    </div>
  </div>
  <div class="mockup-phone border-primary">
    <div class="mockup-phone-camera"></div>
    <div class="mockup-phone-display">
      <img
        alt="wallpaper"
        src="https://raw.githubusercontent.com/abuhg17/create20250705vue0418/refs/heads/main/public/MyVideoImage/%E3%81%84%E3%81%8D%E3%81%A5%E3%82%89%E3%81%84%E9%83%A8%EF%BC%81%E3%80%8CWhat%20is%20my%20LIFE_%E3%80%8D%E3%83%AA%E3%83%AA%E3%83%83%E3%82%AF%E3%83%93%E3%83%87%E3%82%AA%E3%80%90%E3%82%A4%E3%82%AD%E3%83%85%E3%83%A9%E3%82%A4%E3%83%96%EF%BC%81%20LOVELIVE!%20BLUEBIRD%E3%80%91.webp"
      />
    </div>
  </div>
  <div class="bg-orange-600">div</div>
  <ul class="steps">
    <li class="step step-primary">草包鋒兄</li>
    <li class="step step-primary">國中畢業紀念冊簽名101位</li>
    <li class="step step-primary">一般替代役入營第111梯</li>
    <li class="step step-primary">33歲</li>
    <li class="step step-primary">高考三級資訊處理榜首</li>
    <li class="step">臺北市第12屆市長(候選人)</li>
  </ul>
  <ul class="steps steps-vertical">
    <li class="step step-primary">草包鋒兄</li>
    <li class="step step-primary">國中畢業紀念冊簽名101位</li>
    <li class="step step-primary">一般替代役入營第111梯</li>
    <li class="step step-primary">33歲</li>
    <li class="step step-primary">高考三級資訊處理榜首</li>
    <li class="step">臺北市第12屆市長(候選人)</li>
  </ul>
  <div class="navbar bg-base-100 shadow-sm">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
