(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d11d434"],{"1df9":function(e,t,n){"use strict";var a=n("d8c8"),i=n.n(a);i.a},"4fd3":function(e){e.exports=JSON.parse('{"profession":[{"id":1,"name":"建筑设计"},{"id":2,"name":"网页设计"},{"id":3,"name":"UI设计"},{"id":4,"name":"WEB前端开发"},{"id":5,"name":".NET开发"},{"id":6,"name":"JAVA开发"},{"id":7,"name":"PHP开发"},{"id":8,"name":"其他专业"}],"job":[{"id":1,"name":"管理"},{"id":2,"name":"设计"},{"id":3,"name":"开发"},{"id":8,"name":"其他"}],"expressCompany":[{"id":1,"name":"顺丰速运"},{"id":2,"name":"EMS邮政特快"},{"id":3,"name":"申通快递"},{"id":4,"name":"圆通快递"},{"id":5,"name":"中通快递"},{"id":6,"name":"韵达快递"},{"id":7,"name":"百世快递"},{"id":8,"name":"中国邮政"},{"id":9,"name":"天天快递"},{"id":10,"name":"宅急送"},{"id":11,"name":"德邦快递"}],"companyName":[{"id":1,"name":"xLong设计工作室"},{"id":2,"name":"华蓝集团"},{"id":3,"name":"百度网络有限公司"},{"id":4,"name":"上海建筑设计有限公司"},{"id":5,"name":"设计通有限责任公司"},{"id":6,"name":"爱美达设计公司"},{"id":7,"name":"康众畅想信息科技有限公司"},{"id":8,"name":"华建信息科技有限公司"},{"id":9,"name":"杭州雁行信息科技有限公司"},{"id":10,"name":"南宁云海风网络科技有限公司"},{"id":11,"name":"南宁风生水传媒有限公司"}],"articleTags":[{"id":1,"name":"设计"},{"id":2,"name":"IT技术"},{"id":3,"name":"故事"},{"id":4,"name":"星座"},{"id":5,"name":"其他"},{"id":6,"name":"科学"}],"consultList":[{"face":"https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar","userName":"张三","userId":"10001","content":"为啥一定要 nuxt.js 呢，隐藏 modal 的 footer 有个属性","time":"2016-06-25","num":1},{"face":"https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar","userName":"张三","userId":"10002","content":"哪位大神有nuxt.js+iview的demo，搞了N久没搞定，各种问题","time":"2016-06-25","num":0},{"face":"https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar","userName":"李四","userId":"10003","content":"用modal对话框自定义内容组件,出现这个报错,并没有自定义Type属性,是不是vue版本导致的哈.貌似Vue后来的版本只能单向数据流","time":"2016-06-25","num":3},{"face":"https://avatars1.githubusercontent.com/acmeid?v=3&s=30","userName":"赵五","userId":"10004","content":"iview select控件怎么设置选中？除了数据绑定的方法，设置selected属性为啥不可以","time":"2016-06-25","num":0},{"face":"https://avatars0.githubusercontent.com/MarvinWilliam?v=3&s=30","userName":"大六子","userId":"10005","content":"iview官网是用iview写的吗","time":"2016-06-25","num":0},{"face":"https://avatars1.githubusercontent.com/lovesmilesha?v=3&s=30","userName":"小六子","userId":"10006","content":"有人知道怎么调整Table的行高吗？不render的情况下","time":"2016-06-25","num":2},{"face":"https://avatars1.githubusercontent.com/airclear?v=4&s=30","userName":"小五子","userId":"10007","content":"请问上传图片Upload 里带参数怎么传 它是有一个data的 但不知道怎么写进去","time":"2016-06-25","num":1},{"face":"https://avatars0.githubusercontent.com/maxid?v=3&s=30","userName":"小凳子","userId":"10008","content":"modal底部的按钮有什么办法可以去掉吗？","time":"2016-06-25","num":0},{"face":"https://avatars2.githubusercontent.com/jiayeZhu?v=3&s=30","userName":"小桌子","userId":"10009","content":"请问为什么表单验证的时候如果有时间，并且打开页面动态加载了时间，表单验证就会报Uncaught TypeError: t.getTime is not a function错误 是什么问题啊？？？急急急","time":"2016-06-25","num":3},{"face":"https://avatars1.githubusercontent.com/byends?v=3&s=30","userName":"小四子","userId":"10010","content":"ivew 表格怎么实行表格列的最小宽度设置","time":"2016-06-25","num":0},{"face":"https://avatars0.githubusercontent.com/seekwe?v=3&s=30","userName":"小三子","userId":"10011","content":"为什么我的ivew官网打开这么多久,没有《vue实战》书籍出售的提示,今天重启了机器,打开了就有了,签名的都没有了,纪念的页没有了","time":"2016-06-25","num":0},{"face":"https://avatars1.githubusercontent.com/u/5109966?v=4&s=30","userName":"小二","userId":"10012","content":"请问在table的render函数中怎么对checkbox实现单选功能呢？","time":"2016-06-25","num":2}]}')},cdbc:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"g-content"},[e.pageLoading?n("Loading"):n("div",[n("Form",{ref:"infoForm",attrs:{model:e.infoForm,rules:e.validate,"label-width":100}},[n("Form-item",{attrs:{label:"文章标题：",prop:"title"}},[n("Input",{attrs:{placeholder:"请输入文章标题"},model:{value:e.infoForm.title,callback:function(t){e.$set(e.infoForm,"title",t)},expression:"infoForm.title"}})],1),n("Form-item",{attrs:{label:"文章标签：",prop:"tags"}},[n("Select",{attrs:{multiple:"",placeholder:"请选择文章标签(可多选)"},model:{value:e.infoForm.tags,callback:function(t){e.$set(e.infoForm,"tags",t)},expression:"infoForm.tags"}},e._l(e.tagList,(function(t){return n("Option",{key:t.id,attrs:{value:t.name}},[e._v(e._s(t.name))])})),1)],1),n("Form-item",{attrs:{label:"文章内容：",prop:"content"}},[n("Tinymce",{attrs:{height:"500"},model:{value:e.infoForm.content,callback:function(t){e.$set(e.infoForm,"content",t)},expression:"infoForm.content"}})],1),n("div",{staticClass:"m-operation"},["edit"==e.pageType?n("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:function(t){return e.submit("infoForm")}}},[e._v("确认修改")]):n("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:function(t){return e.submit("infoForm")}}},[e._v("确认新增")]),n("Button",{staticClass:"fr",attrs:{type:"default"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")]),n("div",{staticClass:"clearfix"})],1)],1)],1)],1)},i=[],r=n("be51"),o=n("557c"),s=n("ed08"),c=n("d687"),m=n("4fd3"),u={components:{Loading:r["a"],Tinymce:o["a"]},data:function(){return{pageLoading:!1,pageType:"add",tagList:[],articleId:"",infoForm:{title:"",tags:[],content:""},validate:{title:[{required:!0,message:"文章标题不能为空",trigger:"blur"}],content:[{required:!0,message:"文章内容不能为空",trigger:"blur"}]}}},created:function(){var e=Object(s["j"])("id");this.tagList=m.articleTags,e?(this.articleId=e,this.$store.commit("SET_BREADCRUMB",[{name:"首页",path:"/Home"},{name:"文章列表",path:"/Examples/ArticleManage/List"},{name:"文章详情",path:""}]),this.getDetail(),this.pageType="edit"):(this.pageLoading=!1,this.$store.commit("SET_BREADCRUMB",[{name:"首页",path:"/Home"},{name:"文章列表",path:"/Examples/ArticleManage/List"},{name:"新增文章",path:""}]))},methods:{submit:function(e){var t=this;this.$refs[e].validate((function(e){e?(t.pageLoading=!0,"add"==t.pageType?c["a"].AddArticle(t.infoForm).then((function(e){t.pageLoading=!1,200==e.code?t.$Message.success({content:"新增文章成功!",onClose:function(){t.$router.push({name:"ArticleList"})}}):console.log(e)})).catch((function(e){return t.$Message.warning(e.message)})):c["a"].EditArticle(t.infoForm,t.articleId).then((function(e){t.pageLoading=!1,200==e.code?(t.$Message.success("文章修改成功!"),t.getDetail()):t.$Message.warning(e.msg)})).catch((function(e){return console.log(e)}))):t.$Message.error("提交失败！填写有误")}))},getDetail:function(){var e=this;this.pageLoading=!0,c["a"].GetArtcDetail(this.articleId).then((function(t){e.pageLoading=!1;var n=t.data;200==t.code?e.infoForm=n:e.$Message.warning(t.msg)})).catch((function(e){return console.log(e)}))}}},d=u,l=(n("1df9"),n("2877")),f=Object(l["a"])(d,a,i,!1,null,null,null);t["default"]=f.exports},d687:function(e,t,n){"use strict";n("ac6a"),n("456d");var a=n("56c6");t["a"]={GetArtcList:function(e,t,n){var i=a["a"].GetQuery("Article");return e&&Object.keys(e).length&&(e.id&&i.equalTo("objectId","==",e.id),e.sTime&&i.equalTo("createdAt",">=",e.sTime),e.eTime&&i.equalTo("createdAt","<=",e.eTime)),new Promise((function(e,r){a["a"].GetListData(i,t,n).then((function(t){return e(t)})).catch((function(e){return r(e)}))}))},DeleteArtc:function(e){return new Promise((function(t,n){a["a"].DelMore("Article",e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))},GetArtcDetail:function(e){return new Promise((function(t,n){a["a"].GetOne("Article",e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))},AddArticle:function(e){return new Promise((function(t,n){a["a"].AddOne("Article",e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))},EditArticle:function(e,t){return new Promise((function(n,i){a["a"].EditOne("Article",t,e).then((function(e){return n(e)})).catch((function(e){return i(e)}))}))}}},d8c8:function(e,t,n){}}]);