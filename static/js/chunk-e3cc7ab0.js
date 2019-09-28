(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3cc7ab0"],{"0c3e":function(t,e,a){"use strict";var i=a("f4b7"),l=a.n(i);l.a},6053:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"g-content"},[a("h2",{staticClass:"m-title"},[t._v("树形筛选组件")]),a("div",{staticClass:"m-content"},[a("div",{staticClass:"m-compo-part"},[a("FilterTree",{attrs:{height:400,"origin-title":"权限列表","origin-data":t.tree,"filter-title":"已拥有权限列表"},on:{"on-select":t.getSelectData,"on-change":t.getCheckData,"on-toggle-expand":t.getToggleExpandData}}),t._m(0),t._m(1)],1),t._m(2)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-desc"},[a("p",[t._v("属性：")]),a("p",[a("span",{staticClass:"attr-text"},[t._v("height")]),t._v("：列表高度。Number类型，默认值为210")]),a("p",[a("span",{staticClass:"attr-text"},[t._v("originTitle")]),t._v('：源树形列表名称。String类型，默认值为"源列表"')]),a("p",[a("span",{staticClass:"attr-text"},[t._v("originData")]),t._v("：源树形数据。Array类型，同iView中Tree数据格式，默认值为空数组")]),a("p",[a("span",{staticClass:"attr-text"},[t._v("filterTitle")]),t._v('：筛选树形列表名称。String类型，默认值为"勾选列表"')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-desc"},[a("p",[t._v("事件：")]),a("p",[a("span",{staticClass:"attr-text"},[t._v("on-select")]),t._v("：点击复选框时触发，返回源树形已勾选的节点数组、当前项")]),a("p",[a("span",{staticClass:"attr-text"},[t._v("on-change")]),t._v("：点击树节点时触发，返回源树形已选中的节点数组、当前项")]),a("p",[a("span",{staticClass:"attr-text"},[t._v("on-toggle-expand")]),t._v("：展开和收起子列表时触发, 返回当前节点数据")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-test-part"},[a("p",{staticClass:"g-mb10"},[t._v("事件测试请看控制台输出信息")])])}],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xl-filter-tree",attrs:{id:"filterTree"}},[a("div",{staticClass:"xl-filter-tree-list g-mr10",style:{height:t.height+"px"}},[a("div",{staticClass:"xl-filter-tree-list-header"},[a("span",{staticClass:"xl-filter-tree-list-header__title"},[t._v(t._s(t.originTitle))])]),a("div",{staticClass:"xl-filter-tree-list-body"},[a("div",{staticClass:"xl-filter-tree-list-content"},[a("Tree",{attrs:{data:t.originData,"show-checkbox":""},on:{"on-check-change":t.getFilterData,"on-select-change":t.getSelectData,"on-toggle-expand":t.getToggleExpandData}})],1)])]),a("div",{staticClass:"xl-filter-tree-list",style:{height:t.height+"px"}},[a("div",{staticClass:"xl-filter-tree-list-header"},[a("span",{staticClass:"xl-filter-tree-list-header__title"},[t._v(t._s(t.filterTitle))])]),a("div",{staticClass:"xl-filter-tree-list-body"},[a("div",{staticClass:"xl-filter-tree-list-content"},[a("Tree",{attrs:{data:t.filterData}})],1)])])])},s=[],r=(a("ac6a"),a("c5f6"),a("ed08")),c={name:"filterTree",props:{height:{type:Number,default:210},originTitle:{type:String,default:"源列表"},originData:{type:Array,default:function(){return[]}},filterTitle:{type:String,default:"勾选列表"}},data:function(){return{filterData:[],nowCheck:null}},created:function(){},methods:{getFilterData:function(t,e){this.originData.length&&(this.filterData=this.filterCheckData(Object(r["c"])(this.originData)),this.$emit("on-change",this.filterData,e))},filterCheckData:function(t){var e=this;if(t.length){var a=[];return t.forEach((function(t){if(t.checked)a.push(t);else if(t.children&&t.indeterminate){var i=e.filterCheckData(t.children);a.push({title:t.title,value:t.value,expand:t.expand,children:i})}})),a}return t},getSelectData:function(t,e){this.$emit("on-select",t,e)},getToggleExpandData:function(t){this.$emit("on-toggle-expand",t)}}},o=c,g=(a("da5a"),a("2877")),f=Object(g["a"])(o,n,s,!1,null,"409779fc",null),h=f.exports,u={components:{FilterTree:h},data:function(){return{tree:[{title:"一级页面",value:1,expand:!0,children:[{title:"二级页面 1.1",value:11,expand:!0,children:[{title:"查看",value:111},{title:"新增",value:112},{title:"编辑",value:113},{title:"删除",value:114}]},{title:"二级页面 1.2",value:12,expand:!0,children:[{title:"查看",value:121},{title:"新增",value:122},{title:"编辑",value:123},{title:"删除",value:124}]}]}]}},created:function(){this.$store.commit("SET_BREADCRUMB",[{name:"首页",path:"/Home"},{name:"树形组件",path:"/Components/Tree"}])},methods:{getCheckData:function(t,e){console.log("已勾选节点数组："),console.log(t),console.log("已勾选的当前项："),console.log(e)},getSelectData:function(t,e){console.log("已选中的节点数组："),console.log(t),console.log("已选中的当前项："),console.log(e)},getToggleExpandData:function(t){console.log("展开或收起的当前项："),console.log(t)}}},d=u,v=(a("0c3e"),Object(g["a"])(d,i,l,!1,null,"6bbcf5ca",null));e["default"]=v.exports},a5c4:function(t,e,a){},da5a:function(t,e,a){"use strict";var i=a("a5c4"),l=a.n(i);l.a},f4b7:function(t,e,a){}}]);