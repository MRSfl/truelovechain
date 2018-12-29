function Hashtable(){
	this._hash = {};
	this.put = function(key,value){
		if (typeof key != 'undefined') {
			if (!this.containsKey(key)) {
				this._hash[key] = typeof value == 'undefined'?null:value;
				return true
			}else{
				return false
			}
		}else{
			return false
		}
	}
	this.containsKey = function(key){
		return typeof (this._hash[key])!='undefined'
	}
	this.get = function(key) { 
		return this._hash[key]; 
	}
}
var uSinaEmotionsHt = new Hashtable();
var emotionArr = [{
	"phrase":"[坏笑]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/pcmoren_huaixiao_thumb.gif",
	"value":"[坏笑]"
},{
	"phrase":"[舔屏]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/pcmoren_tian_thumb.gif",
	"value":"[舔屏]"
},{
	"phrase":"[泪崩]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/pcmoren_wu_thumb.gif",
	"value":"[泪崩]"
},{
	"phrase":"[微笑]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/huanglianwx_thumb.gif",
	"value":"[微笑]"
},{
	"phrase":"[嘻嘻]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/tootha_thumb.gif",
	"value":"[嘻嘻]"
},{
	"phrase":"[哈哈]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/laugh.gif",
	"value":"[哈哈]"
},{
	"phrase":"[可爱]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/tza_thumb.gif",
	"value":"[可爱]"
},{
	"phrase":"[可怜]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/kl_thumb.gif",
	"value":"[可怜]"
},{
	"phrase":"[挖鼻]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/wabi_thumb.gif",
	"value":"[挖鼻]"
},{
	"phrase":"[吃惊]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/cj_thumb.gif",
	"value":"[吃惊]"
},{
	"phrase":"[害羞]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/shamea_thumb.gif",
	"value":"[害羞]"
},{
	"phrase":"[挤眼]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/zy_thumb.gif",
	"value":"[挤眼]"
},{
	"phrase":"[闭嘴]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/bz_thumb.gif",
	"value":"[闭嘴]"
},{
	"phrase":"[鄙视]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/bs2_thumb.gif",
	"value":"[鄙视]"
},{
	"phrase":"[爱你]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/lovea_thumb.gif",
	"value":"[爱你]"
},{
	"phrase":"[泪]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/sada_thumb.gif",
	"value":"[泪]"
},{
	"phrase":"[偷笑]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/heia_thumb.gif",
	"value":"[偷笑]"
},{
	"phrase":"[亲亲]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/qq_thumb.gif",
	"value":"[亲亲]"
},{
	"phrase":"[生病]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/sb_thumb.gif",
	"value":"[生病]"
},{
	"phrase":"[太开心]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/mb_thumb.gif",
	"value":"[太开心]"
},{
	"phrase":"[惊讶]",
	"type":"face",
	"icon":"http://tlcimg.quanxiankaibo.com/h5/chat/faced/landeln_thumb.gif",
	"value":"[惊讶]"
},{
	"phrase" : "[右哼哼]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/yhh_thumb.gif",
	"value" : "[右哼哼]"
},{
	"phrase" : "[左哼哼]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/zhh_thumb.gif",
	"value" : "[左哼哼]"
},{
	"phrase" : "[嘘]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/x_thumb.gif",
	"value" : "[嘘]"
},{
	"phrase" : "[衰]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/cry.gif",
	"value" : "[衰]"
},{
	"phrase" : "[委屈]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/wq_thumb.gif",
	"value" : "[委屈]"
},{
	"phrase" : "[吐]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/t_thumb.gif",
	"value" : "[吐]"
},{
	"phrase" : "[哈欠]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/haqianv2_thumb.gif",
	"value" : "[哈欠]"
},{
	"phrase" : "[抱抱_旧]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/bba_thumb.gif",
	"value" : "[抱抱_旧]"
},{
	"phrase" : "[怒]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/angrya_thumb.gif",
	"value" : "[怒]"
},{
	"phrase" : "[疑问]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/yw_thumb.gif",
	"value" : "[疑问]"
}, {
	"phrase" : "[馋嘴]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/cza_thumb.gif",
	"value" : "[馋嘴]"
}, {
	"phrase" : "[拜拜]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/88_thumb.gif",
	"value" : "[拜拜]"
}, {
	"phrase" : "[笑哭]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/sk_thumb.gif",
	"value" : "[笑哭]"
}, {
	"phrase" : "[汗]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/sweata_thumb.gif",
	"value" : "[汗]"
}, {
	"phrase" : "[困]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/kunv2_thumb.gif",
	"value" : "[困]"
}, {
	"phrase" : "[睡]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/huangliansj_thumb.gif",
	"value" : "[睡]"
}, {
	"phrase" : "[钱]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/money_thumb.gif",
	"value" : "[钱]"
}, {
	"phrase" : "[失望]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/sw_thumb.gif",
	"value" : "[失望]"
}, {
	"phrase" : "[酷]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/cool_thumb.gif",
	"value" : "[酷]"
}, {
	"phrase" : "[色]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/huanglianse_thumb.gif",
	"value" : "[色]"
}, {
	"phrase" : "[哼]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/hatea_thumb.gif",
	"value" : "[哼]"
}, {
	"phrase" : "[鼓掌]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/gza_thumb.gif",
	"value" : "[鼓掌]"
}, {
	"phrase" : "[晕]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/dizzya_thumb.gif",
	"value" : "[晕]"
}, {
	"phrase" : "[悲伤]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/bs_thumb.gif",
	"value" : "[悲伤]"
}, {
	"phrase" : "[抓狂]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/crazya_thumb.gif",
	"value" : "[抓狂]"
}, {
	"phrase" : "[黑线]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/h_thumb.gif",
	"value" : "[黑线]"
}, {
	"phrase" : "[阴险]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/yx_thumb.gif",
	"value" : "[阴险]"
}, {
	"phrase" : "[怒骂]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/numav2_thumb.gif",
	"value" : "[怒骂]"
}, {
	"phrase" : "[互粉]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/hufen_thumb.gif",
	"value" : "[互粉]"
}, {
	"phrase" : "[心]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/hearta_thumb.gif",
	"value" : "[心]"
}, {
	"phrase" : "[伤心]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/unheart.gif",
	"value" : "[伤心]"
}, {
	"phrase" : "[猪头]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/pig.gif",
	"value" : "[猪头]"
}, {
	"phrase" : "[熊猫]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/panda_thumb.gif",
	"value" : "[熊猫]"
}, {
	"phrase" : "[大闸蟹]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/rabbit_thumb.gif",
	"value" : "[大闸蟹]"
}, {
	"phrase" : "[ok]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/ok_thumb.gif",
	"value" : "[ok]"
}, {
	"phrase" : "[耶]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/ye_thumb.gif",
	"value" : "[耶]"
}, {
	"phrase" : "[good]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/good_thumb.gif",
	"value" : "[good]"
}, {
	"phrase" : "[NO]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/buyao_org.gif",
	"value" : "[NO]"
}, {
	"phrase" : "[赞]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/z2_thumb.gif",
	"value" : "[赞]"
}, {
	"phrase" : "[来]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/come_thumb.gif",
	"value" : "[来]"
}, {
	"phrase" : "[弱]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/sad_thumb.gif",
	"value" : "[弱]"
}, {
	"phrase" : "[喵咪]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/shenshou_thumb.gif",
	"value" : "[喵咪]"
}, {
	"phrase" : "[神马]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/horse2_thumb.gif",
	"value" : "[神马]"
}, {
	"phrase" : "[囧]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/j_thumb.gif",
	"value" : "[囧]"
}, {
	"phrase" : "[浮云]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/fuyun_thumb.gif",
	"value" : "[浮云]"
}, {
	"phrase" : "[给力]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/geiliv2_thumb.gif",
	"value" : "[给力]"
}, {
	"phrase" : "[邮件]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/wg_thumb.gif",
	"value" : "[邮件]"
}, {
	"phrase" : "[發]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/vw_thumb.gif",
	"value" : "[發]"
}, {
	"phrase" : "[话筒]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/huatongv2_thumb.gif",
	"value" : "[话筒]"
}, {
	"phrase" : "[蜡烛]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/lazhuv2_thumb.gif",
	"value" : "[蜡烛]"
}, {
	"phrase" : "[蛋糕]",
	"type" : "face",
	"icon" : "http://tlcimg.quanxiankaibo.com/h5/chat/faced/cakev2_thumb.gif",
	"value" : "[蛋糕]"
}];

for(var i in emotionArr){
	uSinaEmotionsHt.put(emotionArr[i].phrase, emotionArr[i].icon);
}

console.log(uSinaEmotionsHt)
function initEmotions(){
	var str = ''
	var flag = true;
	if (flag) {
		emotionArr.forEach(function(items){
			str+="<li title='"+items.value+"'>\
				<img  alt='"+items.value+"' src='"+items.icon+"'>\
			</li>"
		})
		flag = false
	}
	$('.face_conatiner').append(str);
}

function AnalyticEmotion(s){
	if (!!s) {
		var sArr = s.match(/\[.*?\]/g);
		if (sArr!=null) {
			for(var i = 0; i<sArr.length;i++){
				if (uSinaEmotionsHt.containsKey(sArr[i])) {
					var reStr = '<img style="width:25px;height:25px" src="'+uSinaEmotionsHt.get(sArr[i])+'">'
					s = s.replace(sArr[i], reStr);
				}
			}
		}
	}
	return s
}