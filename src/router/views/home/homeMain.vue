<script>
import Layout from '../../layouts/main';

/**
 * Carousel component
 */
export default {
  components: { Layout },
  data() {
    return {
      
    }
  },
}
</script>

<template>
  <Layout>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body" style="text-align:center;">
            <h1 >와인에 오신것을 환영합니다</h1>
            <p class="card-title-desc">
              새로운 그룹에 참여하여 일정을 관리하고 기록을 남겨보세요.
            </p>
            <b-carousel style="text-shadow: 0px 0px 2px #000" controls indicators>
              <b-carousel-slide :img-src="require('@/assets/images/small/img-3.jpg')"></b-carousel-slide>
              <b-carousel-slide :img-src="require('@/assets/images/small/img-2.jpg')"></b-carousel-slide>
              <b-carousel-slide :img-src="require('@/assets/images/small/img-1.jpg')"></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
    
  </Layout>
</template>