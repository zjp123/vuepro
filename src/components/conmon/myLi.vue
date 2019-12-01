<template >
    <li class="zjp">
        <slot></slot>
    </li>
</template>

<script>
export default {
    name:'myLi',
    
}
</script>
<style lang="less" >
        .zjp {
            a{
                text-decoration: none;
                color:#000;
                .back-news,.back-tuwen,.back-lianxi,.back-shopshow,.back-search,.back-liuyan{
                    background-image: url('../../assets/news.png');
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    // width: 30%;
                    // height: 60px;
                }
                .back-tuwen{
                    background-image: url('../../assets/picShare.png');

                }
                .back-lianxi{
                    background-image: url('../../assets/callme.png');

                }
                .back-tuwen{
                    background-image: url('../../assets/picShare.png');

                }
                .back-search{
                    background-image: url('../../assets/search.png');

                }
                .back-liuyan{
                    background-image: url('../../assets/feedback.png');

                }
                .back-shopshow{
                    background-image: url('../../assets/goodsShow.png');

                }
            }
            
            
        }
       
    
</style>
