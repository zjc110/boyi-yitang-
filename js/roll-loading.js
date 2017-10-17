//模拟ajax请求到的 tab1分页数据 list1
var list1 = new Array();
for (i = 1; i <= 22; i ++){
  list1[i] = "<div class='we-card'><a href='usershow.html'><div class='weui-row'><div class='weui-col-20'><img src='images/m.jpg' class='img-cricle img-responsive'></div><div class='weui-col-80 shopinfo c-black'><div class='shop-name clearfix'><p class='pull-left'>tab1小王的店铺"+i+"</p><span class='we-icon icon7 pull-left'>签约艺术家</span></div><div class='weui-row mt0'><div class='weui-col-66'><p class='shop-intro c-grey biger'>这里是我的店铺签名这里是我的店铺签名...</p></div><div class='weui-col-33 text-center'><p class='shop-area biger c-grey'>当前<span class='c-red fontbase'>66</span>件</p></div></div></div></div></a></div>";
}

//获取tab2分页数据
var list2 = new Array();
for (i = 1; i <= 30; i ++){
  list2[i] = "<div class='we-card'><a href='usershow.html'><div class='weui-row'><div class='weui-col-20'><img src='images/m.jpg' class='img-cricle img-responsive'></div><div class='weui-col-80 shopinfo c-black'><div class='shop-name clearfix'><p class='pull-left'>tab2小王的店铺"+i+"</p><span class='we-icon icon7 pull-left'>签约艺术家</span></div><div class='weui-row mt0'><div class='weui-col-66'><p class='shop-intro c-grey biger'>这里是我的店铺签名这里是我的店铺签名...</p></div><div class='weui-col-33 text-center'><p class='shop-area biger c-grey'>当前<span class='c-red fontbase'>66</span>件</p></div></div></div></div></a></div>";
}

//获得当前所需要的数据,通用方法可以加上请求参数URL
function listGet(num, page, tab, list){
  //定义 or 获取tab1 每页显示数量 n; i < j
  var n = num;
  //定义当前的分页页数 p
  var p = page;
  //获取M页的N条数据
  var listx ='';
  switch(tab){
    case tab1:
      if(n*(p-1)+1 <= list.length){
        var x = n*p;
        if(n*p > list.length){
          x = list.length-1;
        }            
        for (i = n*(p-1)+1; i <= x; i ++){
          listx += list[i];
        }
      }else{
        $("#tab1").find(".weui-infinite-scroll").html("当前没有更多内容");
        return false ;
      }
      console.log("tab1 获取第"+page+"页的第"+num+"条数据");
      return listx;
    break;
    case tab2:
      if(n*(p-1)+1 <= list.length){
        var x = n*p;
        if(n*p > list.length){
          x = list.length-1;
        }            
        for (i = n*(p-1)+1; i <= x; i ++){
          listx += list[i];
        }
      }else{
        $("#tab2").find(".weui-infinite-scroll").html("当前没有更多内容");
        return false ;
      }
      console.log("tab2 获取第"+page+"页的第"+num+"条数据");
      return listx;
    break;
  }      
}

//infinite with navbar
if($("#page-infinite-navbar")[0]) {
  //定义tabN下的页数pN;
  var p1 = 3,p2 = 3;
  //申明 tab1 roll-loading
  $("#tab1").infinite().on("infinite", function() {
    var num = 5;  //每页数据条数
    var page = p1;//加载第几页的数据
    var self = this;
    if(self.loading) return;
    self.loading = true;
    console.log(self);
    setTimeout(function() {
      //添加分页
      $(self).find('.box').append(listGet(num, page, tab1, list1));
      p1 += 1;
      self.loading = false;
    }, 2000);   //延迟时间2000
    console.log("#tab1.page = "+ page);
  });

  //申明 tab2 roll-loading
  $("#tab2").infinite().on("infinite", function() {
    var num = 5;
    var page = p2;
    var self = this;
    if(self.loading) return;
    self.loading = true;
    console.log(self);
    setTimeout(function() {
      //添加分页
      $(self).find('.box').append(listGet(num, page, tab2, list2));
       p2 += 1;
      self.loading = false;
    }, 2000);   //延迟时间2000
    console.log("#tab2.page = "+ page);
  });
}