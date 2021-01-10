
'use strict';function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function YouTubeToHtml5(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};for(var b in this.options)b in a&&(this.options[b]=a[b]);this.options.autoload&&this.load()}YouTubeToHtml5.prototype.options={selector:"video[data-yt2html5]",attribute:"data-yt2html5",formats:["1080p","720p","360p"],autoload:!0},YouTubeToHtml5.prototype.hooks={filters:[],actions:[]},YouTubeToHtml5.prototype.getHooks=function(a,b){if(a in this.hooks){var c=this.hooks[a].sort(function(c,a){return c.priority-a.priority});return c.filter(function(a){return a.name===b})}return[]},YouTubeToHtml5.prototype.addAction=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:10;this.hooks.actions.push({name:a,callback:b,priority:c})},YouTubeToHtml5.prototype.doAction=function(a){for(var b=this.getHooks("actions",a),c=arguments.length,d=Array(1<c?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];for(var f=0;f<b.length;f++){var g;(g=b[f]).callback.apply(g,d)}},YouTubeToHtml5.prototype.addFilter=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:10;this.hooks.filters.push({name:a,callback:b,priority:c})},YouTubeToHtml5.prototype.applyFilters=function(a,b){for(var c=this.getHooks("filters",a),d=arguments.length,e=Array(2<d?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];for(var g=0;g<c.length;g++){var h;b=(h=c[g]).callback.apply(h,[b].concat(e))}return b},YouTubeToHtml5.prototype.itagMap={18:"360p",22:"720p",37:"1080p",38:"3072p",82:"360p3d",83:"480p3d",84:"720p3d",85:"1080p3d",133:"240pna",134:"360pna",135:"480pna",136:"720pna",137:"1080pna",264:"1440pna",298:"720p60",299:"1080p60na",160:"144pna",139:"48kbps",140:"128kbps",141:"256kbps"},YouTubeToHtml5.prototype.urlToId=function(a){var b=a.match(/^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|(?:(?:youtube-nocookie\.com\/|youtube\.com\/)(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/)))([a-zA-Z0-9\-_]*)/);return Array.isArray(b)&&b[1]?b[1]:a},YouTubeToHtml5.prototype.fetch=function(a){return new Promise(function(b,c){var d=new XMLHttpRequest;d.open("GET",a,!0),d.onreadystatechange=function(){4===this.readyState&&(200<=this.status&&400>this.status?b(this.responseText):c(this))},d.send(),d=null})},YouTubeToHtml5.prototype.getElements=function(a){var b=null;return a&&(NodeList.prototype.isPrototypeOf(a)||HTMLCollection.prototype.isPrototypeOf(a)?b=a:"object"===_typeof(a)&&"nodeType"in a&&a.nodeType?b=[a]:b=document.querySelectorAll(this.options.selector)),b=Array.from(b||""),this.applyFilters("elements",b)},YouTubeToHtml5.prototype.youtubeDataApiEndpoint=function(a){var b=~~(33*Math.random()),c="https://images".concat(b,"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D").concat(a);return this.applyFilters("youtube.api.endpoint",c,a,b)},YouTubeToHtml5.prototype.parseUriString=function(a){return a.split("&").reduce(function(a,b){var c=b.split("=").map(function(a){return decodeURIComponent(a.replace("+"," "))});return a[c[0]]=c[1],a},{})},YouTubeToHtml5.prototype.parseYoutubeMeta=function(a){var b=this,c=[],d={},e=this.parseUriString(a);return e.player_response=JSON.parse(e.player_response),e.fflags=this.parseUriString(e.fflags),e=this.applyFilters("youtube.meta",e,a),e.hasOwnProperty("url_encoded_fmt_stream_map")?c=c.concat(e.url_encoded_fmt_stream_map.split(",").map(function(a){return b.parseUriString(a)})):e.player_response.streamingData&&e.player_response.streamingData.formats?c=c.concat(e.player_response.streamingData.formats):e.hasOwnProperty("adaptive_fmts")?c=c.concat(e.adaptive_fmts.split(",").map(function(a){return b.parseUriString(a)})):e.player_response.streamingData&&e.player_response.streamingData.adaptiveFormats&&(c=c.concat(e.player_response.streamingData.adaptiveFormats)),c.forEach(function(a){b.itagMap[a.itag]&&a.url&&(d[b.itagMap[a.itag]]=a.url)}),d},YouTubeToHtml5.prototype.load=function(){var a=this,b=this.getElements(this.options.selector);b&&b.length&&b.forEach(function(b){a.loadSingle(b)})},YouTubeToHtml5.prototype.loadSingle=function(a){var b=this,c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null,d=c||this.options.attribute;if(a.getAttribute(d)){var e=this.urlToId(a.getAttribute(d)),f=this.youtubeDataApiEndpoint(e);this.doAction("api.before",a),this.fetch(f).then(function(c){if(c){var d=b.parseYoutubeMeta(c);if(d&&b.options.formats)for(var e,f=0;f<b.options.formats.length;f++)if(e=b.options.formats[f],e in d){a.src=b.applyFilters("video.source",d[e],a,e,d);break}}})["finally"](function(c){b.doAction("api.after",a,c)})}},"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)&&(module.exports=YouTubeToHtml5);

