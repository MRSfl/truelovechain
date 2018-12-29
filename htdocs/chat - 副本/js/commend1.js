var imgUrl = 'http://tlcimg.quanxiankaibo.com'
function buildHtmlItem(str){
	if (str == null) {
		return
	}
	result = str;
	var html = '';
	if (result!=null) {
		switch(result.type){
			case "text":html+=buildText(result,imgUrl,currentId);
			break;
			case "image":html+=buildImage(result,imgUrl,currentId);
			break;
		}
	}
	return html;
}

function buildText(result,url,currentId){
	var html = '';
	if (!result.content) {
		return
	}
	var $eleEmotion = AnalyticEmotion(result.content)
	if (result.user_id == currentId) {
		html+="<div class='chat_content_group self'>\
			<img class='chat_content_avatar' src='"+url+result.appUser.avatar+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
			<p class='chat_content'>"+$eleEmotion+"</p>\
		</div>"
	}else{
		html+="<div class='chat_content_group buddy'>\
			<img class='chat_content_avatar' src='"+url+result.appUser.avatar+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
			<p class='chat_content'>"+$eleEmotion+"</p>\
		</div>"
	}
	return html
}

function buildImage(result,url,currentId){
	var html = '';
	if (result.user_id == currentId) {
		html+="<div class='chat_content_group self'>\
			<img class='chat_content_avatar' src='"+url+result.appUser.avatar+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
			<p class='chat_content chat_content_img'>\
				<img onload='initRefresh()' class='previewImg' src='"+url+result.attachment.path+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
			</p>\
		</div>"
	}else{
		html+="<div class='chat_content_group buddy'>\
			<img class='chat_content_avatar' src='"+url+result.appUser.avatar+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
			<p class='chat_content chat_content_img'>\
				<img onload='initRefresh()' class='previewImg' src='"+url+result.attachment.path+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
			</p>\
		</div>"
	}
	return html
}
// 获取token
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var q = window.location.pathname.substr(1).match(reg_rewrite);
    if (r != null) {
        return unescape(r[2]);
    } else if (q != null) {
        return unescape(q[2]);
    } else {
        return null;
    }
} 

//获取聊天list
function initBuildHistotyList(result){
	var judeTime = 10*60*1000;
    var currentTime = new Date().getTime();
	var html = '';
	
	result.forEach(function(item){
		
		if (item.isBan == 1) {
			switch(item.type){
				case "text":
					if (!item.content) {
						break
					}
					
					var str = isShowTime(item.modified,currentTime,judeTime)
					var $eleEmotion = AnalyticEmotion(item.content)
					html+=str+"<div class='chat_content_group self'>\
										<img class='chat_content_avatar' src='"+imgUrl+item.appUser.avatar+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
										<p class='chat_content'>"+$eleEmotion+"</p>\
									</div>";
									break;
				case "image":
					var str = isShowTime(item.modified,currentTime,judeTime)
					html+=str+"<div class='chat_content_group self'>\
										<img class='chat_content_avatar' src='"+imgUrl+item.appUser.avatar+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
										<p class='chat_content chat_content_img'>\
											<img class='previewImg' onload='initRefresh()' src='"+imgUrl+item.attachment.path+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
										</p>\
									</div>";
									break
			}
			
		}else{
			switch(item.type){
				case "text":
					if (!item.content) {
						break
					}
					var str = isShowTime(item.modified,currentTime,judeTime)
					var $eleEmotion = AnalyticEmotion(item.content)
					html+=str+"<div class='chat_content_group buddy'>\
										<img class='chat_content_avatar' src='"+imgUrl+item.appUser.avatar+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
										<p class='chat_content'>"+$eleEmotion+"</p>\
									</div>";
									break;
				case "image":
					var str = isShowTime(item.modified,currentTime,judeTime)
					html+=str+"<div class='chat_content_group buddy'>\
										<img class='chat_content_avatar' src='"+imgUrl+item.appUser.avatar+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
										<p class='chat_content chat_content_img'>\
											<img class='previewImg' onload='initRefresh()' src='"+imgUrl+item.attachment.path+"?x-oss-process=image/resize,w_100/auto-orient,1'>\
										</p>\
									</div>";
									break
			}
		}
	})
	// for(var i = 0;i<result.length;i++){
	// 	if (result[i]) {}
	// }
	return html
}
/*ajax请求封装*/
function getAjax(url,data,callback){
	$.ajax({
		url:url,
		data:data,
		type:'get',
		success:function(res){
			if (callback) {
				callback(res)
			}
		},
		error:function(){
			
		}
	})
}
/*TEXT 发送成功*/
function sendSuccess(){
  	$('.chat_textarea').val('')
}
/*文本框失去焦点*/
function loseFocus(ele){
	ele.blur()
}
/*滚动条到底部*/
function refreshScroll(ele){
	var scrollHeight = ele.prop('scrollHeight');
	var clientHeight = ele.height();
	var scrollTop = scrollHeight-clientHeight;
	ele.scrollTop(scrollTop)
}
function initRefresh(){
	refreshScroll($('#chat-list'))
}
function initHeight(ele,h){
	ele.height(h)
}
function setLocalstorage(target,kil){
	if (window.localStorage) {
		window.localStorage.setItem(target,imgUrl+kil)
	}
}
function getLocalstorage(target){
	if (window.localStorage.hasOwnProperty(target)) {
		return window.localStorage.getItem(target)
	}else{
		return ''
	}
}
function setSessionstorage(target,kil){
	if (window.sessionStorage) {
		window.sessionStorage.setItem(target,kil)
	}
}
function getSessionstorage(target){
	if (window.sessionStorage.hasOwnProperty(target)) {
		return window.sessionStorage.getItem(target)
	}else{
		return ''
	}
}
function setSkin(url){
	$('.skin').css({
		'background':'url('+url+') no-repeat center center',
		'background-size':'cover'
	})
}

function setTime(currt,server,times){
	var serverTime = new Date(server).getTime();
	var currentTime = currt;
	if (currentTime-serverTime>times) {
		return true
	}else{
		return false
	}
}

function isShowTime(item,currentTime,judeTime){
	var str = '';
	if (!!item) {
		str = '<div class="chat-time"><span>'+item+'</span></div>'
	}
	return str
}
/*pic 压缩*/
//对图片旋转处理 added by lzk
function rotateImg(img, direction,canvas) {  
		//alert(img);
        //最小与最大旋转方向，图片旋转4次后回到原方向  
        var min_step = 0;  
        var max_step = 3;  
        //var img = document.getElementById(pid);  
        if (img == null)return;  
        //img的高度和宽度不能在img元素隐藏后获取，否则会出错  
        var height = img.height;  
        var width = img.width;  
        //var step = img.getAttribute('step');  
        var step = 2;  
        if (step == null) {  
            step = min_step;  
        }  
        if (direction == 'right') {  
            step++;  
            //旋转到原位置，即超过最大值  
            step > max_step && (step = min_step);  
        } else {  
            step--;  
            step < min_step && (step = max_step);  
        }  
        //img.setAttribute('step', step);  
        /*var canvas = document.getElementById('pic_' + pid);  
        if (canvas == null) {  
            img.style.display = 'none';  
            canvas = document.createElement('canvas');  
            canvas.setAttribute('id', 'pic_' + pid);  
            img.parentNode.appendChild(canvas);  
        }  */
        //旋转角度以弧度值为参数  
        var degree = step * 90 * Math.PI / 180;  
        var ctx = canvas.getContext('2d');  
        switch (step) {  
            case 0:  
                canvas.width = width;  
                canvas.height = height;  
                ctx.drawImage(img, 0, 0);  
                break;  
            case 1:  
                canvas.width = height;  
                canvas.height = width;  
                ctx.rotate(degree);  
                ctx.drawImage(img, 0, -height);  
                break;  
            case 2:  
                canvas.width = width;  
                canvas.height = height;  
                ctx.rotate(degree);  
                ctx.drawImage(img, -width, -height);  
                break;  
            case 3:  
                canvas.width = height;  
                canvas.height = width;  
                ctx.rotate(degree);  
                ctx.drawImage(img, -width, 0);  
                break;  
        }  
    } 

 function photoCompress(file,w,objDiv){
 	console.log(file)
    var ready=new FileReader();
        /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
        ready.readAsDataURL(file);
        ready.onload=function(){
            var re=this.result;
            canvasDataURL(re,w,objDiv,file)
        }
}
function canvasDataURL(path, obj, callback,file){
     var img = new Image();
     img.src = path;
     img.onload = function(){
      var that = this;
      // 默认按比例压缩
      var w = that.width,
       h = that.height,
       scale = w / h;
       w = obj.width || w;
       h = obj.height || (w / scale);
      var quality = 0.7;  // 默认图片质量为0.7
      //生成canvas
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      // 创建属性节点
      var anw = document.createAttribute("width");
      anw.nodeValue = w;
      var anh = document.createAttribute("height");
      anh.nodeValue = h;
      canvas.setAttributeNode(anw);
      canvas.setAttributeNode(anh); 
      if (file.exifdata.Orientation) {
      	switch(file.exifdata.Orientation){
      		case 6:
	      		rotateImg(this,'left',canvas);
	      		break;
	      	case 8:
	      		rotateImg(this,'right',canvas);
	      		break;
      		case 3:
	      		rotateImg(this,'right',canvas);
	      		rotateImg(this,'right',canvas);
	      		break

      	}
      }
      ctx.drawImage(that, 0, 0, w, h);
      // 图像质量
      if(obj.quality && obj.quality <= 1 && obj.quality > 0){
       quality = obj.quality;
      }
      // quality值越小，所绘制出的图像越模糊
      var base64 = canvas.toDataURL('image/jpeg', quality);
      // 回调函数返回base64的值
      callback(base64);
    }
}
/**  
 * 将以base64的图片url数据转换为Blob  
 * @param urlData  
 *            用url方式表示的base64图片数据  
 */  
function convertBase64UrlToBlob(urlData){  
    var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
} 
function UpladFile(fileObj,uploadComplete,url) {
	EXIF.getData(fileObj,function(){
		EXIF.getAllTags(this);
		var exif = EXIF.getTag(this, 'Orientation')
	})
    var xhr;
    //var fileObj = document.getElementById("file").files[0]; // js 获取文件对象
    var url = url+"/portal/attachment/upload"; // 接收上传文件的后台地址 
    	// console.log(fileObj)
    var form = new FormData(); // FormData 对象

    if(fileObj.size/1024 > 512) { //大于1M，进行压缩上传
        photoCompress(fileObj, {
            quality: 0.4
        }, function(base64Codes){
            // console.log("压缩后：" + base64Codes.length / 1024 );
            var bl = convertBase64UrlToBlob(base64Codes);
            form.append("file", bl, "file_"+Date.parse(new Date())+".jpg"); // 文件对象
            xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
            xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
            xhr.onload = uploadComplete; //请求完成
            // xhr.onerror =  uploadFailed; //请求失败
            xhr.send(form); //开始上传，发送form数据
        });
    }else{ //小于等于1M 原图上传
        // form.append("file", fileObj); // 文件对象
        // xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
        // xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
        // xhr.onload = uploadComplete; //请求完成
        // // xhr.onerror =  uploadFailed; //请求失败
        // xhr.send(form); //开始上传，发送form数据
        photoCompress(fileObj, {
            quality: 0.8
        }, function(base64Codes){
            // console.log("压缩后：" + base64Codes.length / 1024 + " " + base64Codes);
            var bl = convertBase64UrlToBlob(base64Codes);
            form.append("file", bl, "file_"+Date.parse(new Date())+".jpg"); // 文件对象
            xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
            xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
            xhr.onload = uploadComplete; //请求完成
            // xhr.onerror =  uploadFailed; //请求失败
            xhr.send(form); //开始上传，发送form数据
        });
    }
}
function getNowFormatDate() {
    var date = new Date();
    var seperator2 = ":";
    var getHours = date.getHours();
    var getMinutes = date.getMinutes();
    var getSeconds = date.getSeconds()
    var strDate = date.getDate();
    if (getHours >= 1 && getHours <= 9) {
        getHours = "0" + getHours;
    }
    if (getMinutes >= 0 && getMinutes <= 9) {
        getMinutes = "0" + getMinutes;
    }
     if (getSeconds >= 0 && getSeconds <= 9) {
        getSeconds = "0" + getSeconds;
    }
    var currentdate = getHours + seperator2 + getMinutes
            + seperator2 + getSeconds;
    return currentdate;
}