$(document).ready(function(){
    var html=$.get('../template/headLinks.art',function (data) {
         var render = template.compile(data);
         var str = render({
            links:['小米官网','小米商城','MIUI','IoT','云服务','天星数科','有品','小爱开放平台','企业团购','资质证照','协议规则','下载app','Select Location'],
         });
         console.log(document.querySelector('#head-links'),'str');

         document.querySelector('#head-links').innerHTML = str
    })
  });
