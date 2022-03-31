(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{538:function(e,r,s){"use strict";s.r(r);var t=s(1),a=Object(t.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[e._v("#")]),e._v(" 定义")]),e._v(" "),s("p",[e._v("定义对象间的一种一对多依赖关系，使得每当一个对象状态发生改变时，其相关依赖对象皆得到通知并被自动更新。观察者模式又叫做发布-订阅（Publish/Subscribe）模式、模型-视图（Model/View）模式、源-监听器（Source/Listener）模式。")]),e._v(" "),s("h2",{attrs:{id:"理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解"}},[e._v("#")]),e._v(" 理解")]),e._v(" "),s("p",[e._v("被观察者实现IObservable接口，包含基本的Add(),Remove(),Notify()方法用于注册观察者，移除观察者，和在状态发生变化时，通知观察者。Notify()实际上是调用了观察者的Update()方法。观察者IObserver接口中只要一个方法Update()，用于响应被观察者发生的变化。")]),e._v(" "),s("p",[e._v("一个比较好的实践为，在IObserver的具体实现类中，保存一个IObservable的引用。")]),e._v(" "),s("h2",{attrs:{id:"类图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类图"}},[e._v("#")]),e._v(" 类图")]),e._v(" "),s("Mermaid",{attrs:{id:"mermaid-382ee14d","data-code":"classDiagram%0A%20%20%20%20direction%20BT%0A%20%20%20%20IObservable%20--%3E%20%22many%22%20IObserver%0A%20%20%20%20ConcreteObservable%20..%7C%3E%20IObservable%0A%20%20%20%20ConcreteObserver%20..%7C%3E%20IObserver%0A%20%20%20%20ConcreteObserver%20--%3E%20ConcreteObservable%0A%0A%20%20%20%20class%20IObservable%20%7B%0A%20%20%20%20%20%20%20%20%3C%3Cinterface%3E%3E%0A%20%20%20%20%20%20%20%20%2B%20AddObserver()%20void%0A%20%20%20%20%20%20%20%20%2B%20RemoveObserver()%20void%0A%20%20%20%20%20%20%20%20%2B%20Notify()%20void%0A%20%20%20%20%7D%0A%0A%20%20%20%20class%20IObserver%20%7B%0A%20%20%20%20%20%20%20%20%3C%3Cinterface%3E%3E%0A%20%20%20%20%20%20%20%20%2B%20Update()%20void%0A%20%20%20%20%7D%0A%0A%20%20%20%20class%20ConcreteObservable%20%7B%0A%20%20%20%20%20%20%20%20-%20Set~T~%20observers%0A%0A%20%20%20%20%20%20%20%20%2B%20AddObserver()%20void%0A%20%20%20%20%20%20%20%20%2B%20RemoveObserver()%20void%0A%20%20%20%20%20%20%20%20%2B%20Notify()%20void%0A%20%20%20%20%7D%0A%0A%20%20%20%20class%20ConcreteObserver%20%7B%0A%20%20%20%20%20%20%20%20-%20IObservable%20ob%0A%0A%20%20%20%20%20%20%20%20%2B%20Update()%20void%0A%20%20%20%20%7D%0A%0A"}})],1)}),[],!1,null,null,null);r.default=a.exports}}]);