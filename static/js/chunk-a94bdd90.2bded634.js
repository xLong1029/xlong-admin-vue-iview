(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a94bdd90"],{"408a":function(e,t,n){var i=n("e330");e.exports=i(1..valueOf)},"6cb9":function(e,t,n){},"6dc1":function(e,t,n){"use strict";n("72f2")},7148:function(e,t,n){"use strict";n("6cb9")},"72f2":function(e,t,n){},a9e3:function(e,t,n){"use strict";var i=n("83ab"),a=n("da84"),s=n("e330"),c=n("94ca"),r=n("cb2d"),u=n("1a2d"),o=n("7156"),l=n("3a9b"),m=n("d9b5"),v=n("c04e"),f=n("d039"),h=n("241c").f,d=n("06cf").f,b=n("9bf2").f,x=n("408a"),_=n("58a8").trim,p="Number",I=a[p],S=I.prototype,g=a.TypeError,A=s("".slice),y=s("".charCodeAt),w=function(e){var t=v(e,"number");return"bigint"==typeof t?t:C(t)},C=function(e){var t,n,i,a,s,c,r,u,o=v(e,"number");if(m(o))throw g("Cannot convert a Symbol value to a number");if("string"==typeof o&&o.length>2)if(o=_(o),t=y(o,0),43===t||45===t){if(n=y(o,2),88===n||120===n)return NaN}else if(48===t){switch(y(o,1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+o}for(s=A(o,2),c=s.length,r=0;r<c;r++)if(u=y(s,r),u<48||u>a)return NaN;return parseInt(s,i)}return+o};if(c(p,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var O,N=function(e){var t=arguments.length<1?0:I(w(e)),n=this;return l(S,n)&&f((function(){x(n)}))?o(Object(t),n,N):t},E=i?h(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;E.length>j;j++)u(I,O=E[j])&&!u(N,O)&&b(N,O,d(I,O));N.prototype=S,S.constructor=N,r(a,p,N)}},f40b:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"g-content"},[n("h2",{staticClass:"m-title"},[e._v("侧边栏")]),n("div",{staticClass:"m-content"},[n("Row",{staticClass:"m-sidebar-cont"},[n("Col",{attrs:{span:"4"}},[n("Sidebar",{attrs:{"active-name":e.activeName,"menu-list":e.menuList}})],1),n("Col",{attrs:{span:"20"}},[n("router-view")],1)],1),n("div",{staticClass:"m-desc"},[n("p",{staticClass:"m-hint"},[e._v("*由于在实际项目开发过程中，发现iView里自带的Menu 导航菜单用作侧边栏时，2个不同父级的页面相互跳转，会导致侧边栏无法准确定位对应菜单并且高亮显示，所以我便重写了一个自定义侧边栏组件。")]),n("p",[e._v(" ")]),n("p",[e._v("属性：")]),e._m(0),e._m(1),e._m(2),e._m(3),n("pre",[e._v("            [\n                {\n                    "),n("font",{attrs:{color:"#00c5a3"}},[e._v("// menu-item对应的路由name")]),e._v("\n                    name: 'AccountManage',\n                    "),n("font",{attrs:{color:"#00c5a3"}},[e._v("// iView的Icon图标的type属性")]),e._v("\n                    icon: 'navicon-round',\n                    "),n("font",{attrs:{color:"#00c5a3"}},[e._v("// menu-title显示文本")]),e._v("\n                    text: '账户管理',\n                    "),n("font",{attrs:{color:"#00c5a3"}},[e._v("// 是否为标题菜单，标题菜单则不显示Icon，只在spanWidth有值且侧边栏跨距小于spanWidth才显示")]),e._v("\n                    isTitle: false,\n                    "),n("font",{attrs:{color:"#00c5a3"}},[e._v("// submenu列表")]),e._v("\n                    children: [\n                        {\n                            "),n("font",{attrs:{color:"#00c5a3"}},[e._v("// submenu-item对应的路由name")]),e._v("\n                            name: 'AccountList',\n                            "),n("font",{attrs:{color:"#00c5a3"}},[e._v("// submenu-title显示文本")]),e._v("\n                            text: '账户列表',\n                        },\n                    ]\n                },\n            ]\n            ")],1)])],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("span",{staticClass:"attr-text"},[e._v("spanWidth")]),e._v("：侧边栏跨距大小，-1表示无跨距，正值表示跨距大小。Number类型，默认值为-1")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("span",{staticClass:"attr-text"},[e._v("accordion")]),e._v("：是否开启手风琴模式，开启后至多展开一个子菜单。Boolean类型，默认值为false")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("span",{staticClass:"attr-text"},[e._v("activeName")]),e._v('：第一次加载激活的一级菜单对应路由name。String类型，默认值为"Home"')])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("span",{staticClass:"attr-text"},[e._v("menuList")]),e._v('：菜单列表数据。Array类型，默认值对应路由为"Home"。数据格式如下：')])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"m-xl-menu-list",class:{"sidebar-hide-text":e.sidebarSpan<e.spanWidth&&e.spanWidth>0}},e._l(e.menuList,(function(t,i){return n("li",{key:i,ref:"menuItem",refInFor:!0,staticClass:"xl-menu-item",class:{"xl-submenu":t.children,"xl-menu-active":e.activeName==t.name,"xl-submenu-expand":!e.accordion}},[t.children?[n("div",{staticClass:"xl-menu-title",on:{click:function(t){return e.selectMenu(i)}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.isTitle,expression:"!menu.isTitle"}],staticClass:"xl-submenu-title__icon",attrs:{type:t.icon,size:e.iconSize}}),n("span",{staticClass:"xl-submenu-title__text sidebar-text"},[e._v(e._s(t.text))]),n("Icon",{staticClass:"xl-submenu-title__arrow",attrs:{type:"ios-arrow-down"}})],1),n("ul",{staticClass:"m-xl-submenu-list"},e._l(t.children,(function(t,a){return n("li",{key:a,ref:"submenuMenuItem",refInFor:!0,staticClass:"xl-submenu-item"},[n("div",{staticClass:"xl-submenu-title",on:{click:function(t){return e.selectSubmenu(i,a)}}},[n("router-link",{attrs:{to:{name:t.name}}},[e._v(e._s(t.text))])],1)])})),0)]:n("div",{staticClass:"xl-menu-title",class:{"title-menu":t.isTitle},on:{click:function(t){return e.selectMenu(i)}}},[n("router-link",{attrs:{to:{name:t.name}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.isTitle,expression:"!menu.isTitle"}],staticClass:"xl-menu-title__icon",attrs:{type:t.icon,size:e.iconSize}}),n("Icon",{directives:[{name:"show",rawName:"v-show",value:t.isTitle&&e.sidebarSpan<e.spanWidth,expression:"menu.isTitle && sidebarSpan < spanWidth"}],staticClass:"xl-menu-title__icon",attrs:{type:t.icon,size:e.iconSize}}),n("span",{staticClass:"xl-menu-title__text sidebar-text"},[e._v(e._s(t.text))])],1)],1)],2)})),0)},c=[],r=n("5530"),u=(n("a9e3"),n("b0c0"),n("d3b7"),n("159b"),n("ed08")),o=n("2f62"),l={name:"sidebar",computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["sidebarSpan"])),{},{iconSize:function(){return this.sidebarSpan===this.spanWidth&&this.spanWidth>0?14:24}}),props:{spanWidth:{type:Number,default:-1},accordion:{type:Boolean,default:!1},activeName:{type:String,default:""},menuList:{type:Array,default:function(){return[{name:"Home",icon:"navicon-round",text:"一级菜单",isTitle:!1,children:[{name:"Home",text:"二级菜单"}]}]}}},data:function(){return{active:{name:"",mIndex:0,subIndex:0}}},mounted:function(){this.setSideBar()},methods:{setSideBar:function(){for(var e=!1,t="",n=this.menuList,i=0;i<n.length;i++){if(e)break;if(n[i].children)for(var a=0;a<n[i].children.length;a++){if(t=n[i].children[a].name,-1!=window.location.href.indexOf(t)){this.active={name:t,mIndex:i,subIndex:a},this.setActive(i,a),e=!0;break}this.active={name:"Home",mIndex:0,subIndex:0},this.setActive(0,0)}else{if(t=n[i].name,-1!=window.location.href.indexOf(t)){this.active={name:t,mIndex:i,subIndex:0},this.setActive(i,0),e=!0;break}this.active={name:"Home",mIndex:0,subIndex:0},this.setActive(0,0)}}},setActive:function(e,t){var n=this,i=this.$refs.menuItem[e];this.activeMenu(i);var a=Object(u["r"])(i),s=i.querySelector(".m-xl-submenu-list");if(s){var c=s.querySelectorAll(".xl-submenu-title")[t];if(Object(u["m"])(c,"xl-submenu-active"))return;Object(u["c"])(c,"xl-submenu-active");var r=s.children;Object(u["s"])(s,r[0].offsetHeight*r.length,350),a.forEach((function(e){return n.inActiveMenu(e)}))}else a.forEach((function(e){var t=e.querySelector(".m-xl-submenu-list");t&&n.accordion&&(t.style.height=0);e.querySelectorAll(".xl-submenu-title");n.inActiveSubmenu(e)}))},selectMenu:function(e){var t=this,n=this.$refs.menuItem[e];this.active.mIndex=e;var i=Object(u["r"])(n),a=n.querySelector(".m-xl-submenu-list");if(a){var s=a.children;if(!this.accordion)return a.offsetHeight>0?Object(u["t"])(a,s[0].offsetHeight*s.length,350):Object(u["s"])(a,s[0].offsetHeight*s.length,350),void Object(u["v"])(n,"xl-submenu-expand");Object(u["m"])(n,"xl-menu-active")?(Object(u["n"])(n,"xl-menu-active"),a.style.height=0):(this.activeMenu(n),Object(u["s"])(a,s[0].offsetHeight*s.length,350),i.forEach((function(e){return t.inActiveMenu(e)})))}else this.activeMenu(n),i.forEach((function(e){return t.inActiveMenu(e)}))},inActiveMenu:function(e){Object(u["n"])(e,"xl-menu-active");var t=e.querySelector(".m-xl-submenu-list");t&&this.accordion&&(t.style.height=0);var n=this.$refs.menuItem[this.active.mIndex];if(n!=e){var i=e.querySelectorAll(".xl-submenu-title");this.inActiveSubmenu(i)}},activeMenu:function(e){var t=Object(u["r"])(e);t.forEach((function(e){Object(u["n"])(e,"xl-menu-active")})),Object(u["c"])(e,"xl-menu-active");var n=e.querySelector(".m-xl-submenu-list");if(n){var i=n.children;Object(u["s"])(n,i[0].offsetHeight*i.length,350)}},selectSubmenu:function(e,t){var n=this;this.active.mIndex=e,this.active.subIndex=t;var i=this.$refs.menuItem[e];this.activeMenu(i);var a=Object(u["r"])(i);a.forEach((function(e){n.inActiveMenu(e)}));var s=i.querySelectorAll(".xl-submenu-title");this.inActiveSubmenu(s),Object(u["c"])(s[t],"xl-submenu-active")},inActiveSubmenu:function(e){e&&e.length&&e.forEach((function(e){Object(u["n"])(e,"xl-submenu-active")}))}},watch:{$route:function(e,t){this.setSideBar()}}},m=l,v=(n("7148"),n("2877")),f=Object(v["a"])(m,s,c,!1,null,"7a9a08be",null),h=f.exports,d={components:{Sidebar:h},data:function(){return{activeName:"PageA",menuList:[{name:"PageA",icon:"navicon-round",text:"一级菜单-1"},{name:"TestTwo",icon:"navicon-round",text:"一级菜单-2",children:[{name:"PageB",text:"二级菜单-2.1"},{name:"PageC",text:"二级菜单-2.2"}]},{name:"TestThree",icon:"navicon-round",text:"一级菜单-3",children:[{name:"PageD",text:"二级菜单-3.1"}]}]}},created:function(){this.$store.commit("SET_BREADCRUMB",[{name:"首页",path:"/Home"},{name:"侧边栏",path:"/Components/Sidebar"}])}},b=d,x=(n("6dc1"),Object(v["a"])(b,i,a,!1,null,"17bb5260",null));t["default"]=x.exports}}]);