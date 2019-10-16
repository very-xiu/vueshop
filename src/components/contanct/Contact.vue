<template>

  <div class="contact-container">
    <div class="contact-border">
      <div class="contact">
        <h3>通过以下方式联系我们</h3>
        <a href="#"><img src="" alt=""></a>
      </div>
    </div>
    <div class="tupian">
      <div class="qqtupian1" v-for="item in tupian" :key="item.id">
        <p>{{item.name}}</p>
        <a href="#"><img :src="item.src" alt=""></a>
      </div>
    </div>

  </div>

</template>

<script>

export default {
    data(){
        return {
          tupian:[
            {name:'QQ联系',id:0,src:'../../images/QQ.png'},
            {name:'微信联系',id:1,src:'../../images/微信.png'},
            {name:'QQ邮箱联系',id:2,src:'../../images/QQ邮箱.png'}
          ]
        }
    },
  methods: {

  }
};

</script>

<style lang="scss" scped>
.contact-border{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 100px;
  margin: 10px 0 0 5%;
  border: 2px solid rgb(252, 238, 233);
}
.contact{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 93%;
  height: 80px;
  margin: auto;
  background-color: #eee;
  h3{
    font-size: 20px;
    text-align: center;
    margin-top: 25px;
    color: #2684ff;
  }
}
.tupian{
  width: 90%;
  height: 600px;
  margin: 0 0 10px 5%;
  border: 2px solid rgb(252, 238, 233);
  border-top:none;
  background: radial-gradient(circle at center, #eeeeee, #dddddd);
  box-sizing: border-box;
  padding-top: 20px;
  .qqtupian1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 42%;
    padding-top: 20px;
    p{
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 0;
    }
    img{
      margin-left: 6%;
      width: 25px;
      height: 25px;
    }
  }
}
</style>
