!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).watermark=t()}(this,(function(){"use strict";var e={};var t={w_width:240,w_height:140,w_top:"0px",w_left:"0px",w_rotateDeg:25,w_font:"1.2rem Vedana",w_color:"#666",w_opacity:"0.1",w_zIndex:"100000"};return e.setWaterMark=t=>{var o=e.loadWatermark(t);null===document.getElementById(o)&&(o=e.loadWatermark(t))},e.removeWatermark=()=>{var t="w_vm_id_3.14159";null!==document.getElementById(t)&&(e.Observer.disconnect(),setTimeout(()=>{document.body.removeChild(document.getElementById(t))},0))},e.loadWatermark=o=>{var n={};n=o.w_options&&"[object Object]"===Object.prototype.toString.call(o.w_options)?Object.assign({},t,o.w_options):t;var r="w_vm_id_3.14159";null!==document.getElementById(r)&&document.body.removeChild(document.getElementById(r));var d=document.createElement("canvas");d.width=n.w_width,d.height=n.w_height;var a=d.getContext("2d");if(a.rotate(-n.w_rotateDeg*Math.PI/180),a.font=n.w_font,a.fillStyle=n.w_color,a.textAlign="center",a.textBaseline="Middle",o.w_texts&&"[object Array]"===Object.prototype.toString.call(o.w_texts))for(var l=o.w_texts,i=0;i<l.length;i++)a.fillText(l[i]?l[i]:"",d.width/2,d.height+25*i);var s=document.createElement("div");return s.id=r,s.style.pointerEvents="none",s.style.top=n.w_top,s.style.left=n.w_left,s.style.opacity=n.w_opacity,s.style.position="fixed",s.style.zIndex=n.w_zIndex,s.style.width="100%",s.style.height="100%",s.style.background="url("+d.toDataURL("image/png")+") left top repeat",document.body.appendChild(s),setTimeout(()=>{e.observeDomChange(s,o)},0),r},e.observeDomChange=(t,o)=>{const n=document.querySelector("body");e.Observer=new MutationObserver((function(n,r){for(let d of n)d.target===t&&(d.target.remove(),e.loadWatermark(o),r.disconnect()),d.removedNodes.length&&d.removedNodes[0]===t&&(e.loadWatermark(o),r.disconnect())})),e.Observer.observe(n,{attributes:!0,childList:!0,subtree:!0})},e}));
watermark.setWaterMark(
    {
      w_texts: ['数字孪生(ThingJS-X)','zhangguang@uino.com'],
      w_options: {
           w_width: 250,
           w_height: 120,
           w_top: '0px',
           w_left: '0px',
           w_rotateDeg: 28,
           w_font: '1.0rem Vedana',
           w_color: '#666',
           w_opacity: '0.1',
           w_zIndex: '100000',
       }
    }
 )