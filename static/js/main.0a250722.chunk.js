(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{123:function(e,a,t){e.exports=t(247)},128:function(e,a,t){},208:function(e,a){},246:function(e,a,t){},247:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(18),l=t.n(r),o=(t(128),t(38)),s=t(3),i=t.n(s),m=t(122);t(201),t(245),t(246);var u=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(null),s=Object(o.a)(l,2),u=s[0],d=s[1],h=Object(n.useState)(null),p=Object(o.a)(h,2),E=p[0],b=p[1],v=Object(n.useState)("startDate"),f=Object(o.a)(v,2),k=f[0],D=f[1];return c.a.createElement("div",{className:"calendar-parent"},c.a.createElement("div",{className:"calendar-center"},c.a.createElement("h2",null,"Date Picker"),c.a.createElement("div",{className:"checkbox-wrapper"},c.a.createElement("div",{onClick:function(){return r(!t)},className:"checkbox",style:{background:t?"#72c7b6":"none"}},c.a.createElement("div",{style:{display:t?"block":"none"},className:"tick"})),c.a.createElement("p",null,"Compare dates")),c.a.createElement("div",{className:"date-input"},c.a.createElement("div",{className:"date-selected"},c.a.createElement("p",null,"Pick Date"),c.a.createElement("div",{className:"date-text"},c.a.createElement("span",null,u&&i()(u).format("Do, MMM YYYY")),c.a.createElement("span",null,">"),c.a.createElement("span",null,E&&i()(E).format("Do, MMM YYYY"))))),c.a.createElement("div",{className:"calendar-wrapper"},c.a.createElement(m.DayPickerRangeController,{startDate:u,endDate:E,numberOfMonths:2,focusedInput:k,onDatesChange:function(e){var a=e.startDate,t=e.endDate;d(a),b(t)},minimumNights:0,onFocusChange:function(e){D(e||"startDate")},hideKeyboardShortcutsPanel:!0,initialVisibleMonth:function(){return i()().add(2,"MM")},noBorder:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.0a250722.chunk.js.map