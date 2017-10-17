// -----------------------------------------华丽的分割线--------------------------------------------------------------
    //定义模板，和data的key一一对应
    var tpl = "<div class='we-card' id='listid'><a href='link'><div class='weui-row'><div class='weui-col-20'><img src='imgLink' class='img-cricle img-responsive'></div><div class='weui-col-80 shopinfo c-black'><div class='shop-name clearfix'><p class='pull-left'>shopname</p><span class='we-icon icon7 pull-left'>shoptype</span></div><div class='weui-row mt0'><div class='weui-col-66'><p class='shop-intro c-grey biger'>shopintro</p></div><div class='weui-col-33 text-center'><p class='shop-area biger c-grey'>当前<span class='c-red fontbase'>num</span>件</p></div></div></div></div></a></div>"

    //传递url 以获得 json数组
    //var url = "js/shop.json";

    //模拟json 30条数据
    var data =[{"listid":"1","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"2","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"3","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"4","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"5","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"6","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"7","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"8","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"9","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"10","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"11","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"12","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"13","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"14","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"15","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"16","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"17","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"18","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"19","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"20","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"21","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"22","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"23","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"24","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"25","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"26","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"27","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"28","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"29","link":"usershow.html","imgLink":"images/m.jpg","shopname":"小王的店铺","shoptype":"艺","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"},{"listid":"30","link":"usershow.html","imgLink":"images/m.jpg","shopname":"老王的店铺","shoptype":"商","shopintro":"这里是我的店铺签名这里是我的店铺签名...","num":"66"}];
    
    // var shoplist = eval(data); 
    var list = new Array();

    //获取datakey
    var datakey = new Array();
    //获取json key值
    var i = 0;
    for(var key in data[0]){
      datakey[i] = key;
      i += 1;
    }

    function full_tpl_num(data, datakey, page, num){      
      for(j = 0; j < page*num; j++){
        var tmp = tpl;        
        for (i = 0; i < datakey.length; i++){
          var x, L, s;
          x = datakey[i];
          L = x.length;
          s = tmp.indexOf(x);
          tmpbf = tmp.substring(0,s);
          tmpx = tmp.substring(s, (s+L));        
          tmpaf = tmp.substring((s+L));
          tmpx = data[j][''+x+''];
          tmp = tmpbf + tmpx + tmpaf;          
        }        
        list[j] = tmp;        
      }
      return list;
    }

    function fiew_tpl_num(data, datakey, page, num){      
      var x = (page-1)*num;
      var y = page*num;
      console.log("begin = "+ x);
      console.log("end = "+ y);
      for(j = x; j < y; j++){
        var tmp = tpl;        
        for (i = 0; i < datakey.length; i++){
          var x, L, s;
          x = datakey[i];
          L = x.length;
          s = tmp.indexOf(x);
          tmpbf = tmp.substring(0,s);
          tmpx = tmp.substring(s, (s+L));        
          tmpaf = tmp.substring((s+L));
          tmpx = data[j][''+x+''];
          tmp = tmpbf + tmpx + tmpaf;          
        }        
        list[j] = tmp;
      }      
      return list;
    }

    function showList(num, page){
      //定义 or 获取tab1 每页显示数量 n; i < j
      var n = num;
      //定义页数 p
      var p = page;
      //获取M页的N条数据
      var listx ='';
      //通过url,num,page ajax 获取data
      //通过data获取 datakey
      //获取列表
      var list = full_tpl_num(data, datakey, p, n);
      // console.log(list.length);
      for (i = 0; i < list.length; i ++){
        listx += list[i];
      }
      HC += listx;
      // console.log("HC1 = "+HC);
      return listx;
    }

    // var HC = $('.weui_tab').html();
    var HC = $('#tab1 .box').html();

    //获得当前所需要的数据,通用方法可以加上请求参数URL
    function listGet(num, page){
      //定义 or 获取tab1 每页显示数量 n; i < j
      var n = num;
      //定义当前的分页页数 p
      var p = page;
      //获取M页的N条数据
      var listx ='';
      //通过url,num,page ajax 获取data
      //通过data获取 datakey
      //获取列表
      var list = fiew_tpl_num(data, datakey, p, n);
      console.log("list.length = "+list.length);
      if(n*(p-1)+1 <= list.length){
        var x = n*p;
        if(n*p > list.length){
          x = list.length-1;
        }            
        for (i = n*(p-1); i < x; i ++){
          listx += list[i];
        }
      }else{
        $("#tab1").find(".weui-infinite-scroll").html("当前没有更多内容");
        return false ;
      }
      console.log("tab1 获取第"+page+"页的第"+num+"条数据");
      HC += listx;
      p1 += 1;
      // console.log("HC2 = "+HC);
      return listx;   
    }    

    //定义tabN下的页数pN;
    var page = Number(window.sessionStorage.getItem("page"));
    console.log("加载时session页数="+page);
    var p1 = 3;
    if(page != null && page > 3){
      p1 = page;
    }
    console.log("加载时p1="+page);

    //infinite with navbar
    if($("#page-infinite-navbar")[0]) {      
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
          $(self).find('.box').append(listGet(num, page));                    
          self.loading = false;
        }, 2000);   //延迟时间2000
        console.log("#tab1.page = "+ page);
      });
    }
    
    $(function(){
      $(document).on("click",".we-card",function(){
        // window.sessionStorage.setItem('ID', $(this).attr('id'));
        window.sessionStorage.setItem('list', HC);
        window.sessionStorage.setItem('top',$("#tab1").scrollTop());
        if(p1 > 3){
          window.sessionStorage.setItem('page', p1);        
        }else{
          window.sessionStorage.setItem('page', 3);
        }
        // console.log("存入时session页数="+page);
        // alert("roll = "+$("#tab1").scrollTop());
        // alert("缓存数据成功");
      });
    })

    if(window.sessionStorage.getItem("list") != null){
      var page = window.sessionStorage.getItem("page");
      var roll = window.sessionStorage.getItem("top")
      $('#tab1 .box').html(window.sessionStorage.getItem("list"));
      $("#tab1").animate({scrollTop:+roll},1);
      // console.log("session_ID = "+window.sessionStorage.getItem("ID"));
      console.log("读取时session页数="+page);
      HC = window.sessionStorage.getItem("list");
      window.sessionStorage.removeItem('list');
      window.sessionStorage.removeItem('top');
      window.sessionStorage.removeItem('page'); 
      // alert('读取缓存');
    }else{
      $("#tab1").find('.box').append(showList(5, 2));
      // alert('第一次打开');
    }    