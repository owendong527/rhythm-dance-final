<template>
  <main class="py-9 px-xl-10">
    <section class="my-3">
      <div class="container">
        <p style="font-size: 36px; text-align: left">
          <span>詩翩舞集</span>
        </p>
        <h4>品牌介紹</h4>
        <p style="font-size: 22px;">
          詩翩舞集，是一個致力於傳遞舞蹈藝術與文化的專業舞蹈教室。名稱靈感來自於《聖經》的詩篇，我們相信舞蹈如同詩歌，能夠傳遞美好與感動，讓每個學員在舞動中找到內心的平靜與力量。
<br/>
在詩翩舞集，我們提供多樣化的舞蹈課程，包括民族舞、中國舞、芭蕾舞以及成人瑜伽，適合不同年齡層和需求的學員。
<br/>
我們的教學團隊由資深的舞蹈專業人士組成，他們不僅擁有豐富的教學經驗，還充滿熱情和創意，致力於引導每一位學員發現自己的潛能，並在舞蹈中表現自我。
<br/>
<br/>
我們相信，舞蹈不僅是一種藝術形式，更是一種生活方式。透過舞蹈訓練，學員不僅能夠提升身體的柔韌性和協調性，更能增強自信心，釋放壓力，找到內心的平衡。
每一次舞動，都是對自我的探索與突破，每一堂課程，都是一次身心的昇華與成長。
<br/>
詩翩舞集的設施齊全，環境優美，提供一個舒適、安全且充滿藝術氛圍的學習空間。我們希望，每一位來到詩翩舞集的學員，都能感受到家的溫暖與關懷，在這裡找到屬於自己的舞蹈天地。
<br/>
加入詩翩舞集，讓我們一起舞動生命的美好，共同創造無限的可能。無論你是初學者還是有經驗的舞者，詩翩舞集都將是你實現舞蹈夢想的最佳夥伴。
        </p>
      </div>
    </section>
    <section class="mt-6 ">
      <div class="container">
        <ul class="row">
          <li class="col-8 col-md-4">
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1529038578964-1a563e9a15e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" >
            </div>
            <div class="title-text">
              <h3 class="mt-3">owen老師</h3>
              <p>舞台創意總監</p>
            </div>
          </li>
          <li class="col-8 col-md-4">
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1519688581790-17c0c4508294?w=800&505=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="" >
            </div>
            <div class="title-text">
              <h3 class="mt-3">Lulu 老師</h3>
              <p>民族舞＆瑜伽老師</p>
            </div>
          </li>
          <li class="col-8 col-md-4">
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1528415784548-1850e0fc8c57?w=800&505=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRhbmNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" >
            </div>
            <div class="title-text">
              <h3 class="mt-3" >Candy老師</h3>
              <p>芭蕾舞首席導師</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 400px; /* 你可以調整這個高度 */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 322px;
  height: 100%;
  object-fit: cover;
}

ul.row {
  display: flex;
}

ul.row > li {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* height: 400px; 你可以調整這個高度 */
  padding: 0.5rem
}

.col-8.col-md-4 {
  padding: 0.5rem; /* 這個間距可以根據你的需要調整 */
}
.title-text {
  text-align: center;
}
</style>
