function getFileTypeByName(fileName){
	var fileType = "unknown";
	if(fileName){
	    var ext = fileName.split(".").pop();
	    if(ext){
		if($.inArray(ext,["txt", "text", "wml", "xml", "yaml", "dtd", "odt", "odm"]) !== -1)
		    fileType = "text";
		else if($.inArray(ext,["jpg", "jpeg", "jpm", "gif", "bmp", "tiff", "psd", "ico", "png", "pnm", "pbm", "ppm", "svg", "rgb"]) !== -1)
		    fileType = "image";
		else if($.inArray(ext,["pdf", "pdfx", "xfdf"]) !== -1)
		    fileType = "pdf";
		else if($.inArray(ext,["doc", "docx", "docm", "mdi", "xps", "dotx", "oda", "odc", "odb", "odf", "odft"]) !== -1)
		    fileType = "doc";
		else if($.inArray(ext,["ppt", "pptx", "sldx", "ppsx", "potx", "odp"]) !== -1)
		    fileType = "ppt";
		else if($.inArray(ext,["xls", "xlsx", "xltx", "ods", "ots"]) !== -1)
		    fileType = "xls";
		else if($.inArray(ext,["avi", "mpeg", "mpg", "mp4", "mp5", "mkv", "mov", "3gp", "3g2", "flv", "m4v", "wmx", "wmv", "webm"]) !== -1)
		    fileType = "video";
		else if($.inArray(ext,["mp3", "mp2", "wma", "aac", "m3u", "mid", "mp4a", "oga", "ram", "rmp", "au", "wav"]) !== -1)
		    fileType = "music";
		else if($.inArray(ext,["xhtml", "html", "xhtm", "htm", "html5"]) !== -1)
		    fileType = "html";
		else if($.inArray(ext,["css", "css2", "css3"]) !== -1)
		    fileType = "css";
		else if($.inArray(ext,["php", "sh", "java", "c", "cc", "py", "js", "pl", "vbs", "vbe", "vb", "cpp"]) !== -1)
		    fileType = "code";
		else if($.inArray(ext,["zip", "tar", "gz", "tgz", "7zip"]) !== -1)
		    fileType = "zip";
		else if($.inArray(ext,["exe", "jar", "xap", "dll", "shs", "lnk", "air", "msi", "appx", "fmx", "odex", "tcp", "dex", "bas", "jse", "wiz", "com", "ndr", "bat", "deb", "debian", "app", "hta", "pyd", "pif", "rtl", "osx", "msp", "apk", "exe1", "cmd", "xip", "msc", "widget", "rpm", "pe", "prg", "app", "btm", "jax", "run", "bin", "pyzw", "ijc"]) !== -1)
		    fileType = "exe";
	    }
	}
	return fileType;
}
