/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'entypo\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-phone' : '&#xe000;',
			'icon-export' : '&#xe001;',
			'icon-mobile' : '&#xe002;',
			'icon-mouse' : '&#xe003;',
			'icon-directions' : '&#xe004;',
			'icon-mail' : '&#xe005;',
			'icon-paperplane' : '&#xe006;',
			'icon-pencil' : '&#xe007;',
			'icon-paperclip' : '&#xe009;',
			'icon-drawer' : '&#xe00a;',
			'icon-reply' : '&#xe00b;',
			'icon-reply-all' : '&#xe00c;',
			'icon-forward' : '&#xe00d;',
			'icon-user' : '&#xe00e;',
			'icon-users' : '&#xe00f;',
			'icon-user-add' : '&#xe010;',
			'icon-vcard' : '&#xe011;',
			'icon-quote' : '&#xe012;',
			'icon-comment' : '&#xe013;',
			'icon-chat' : '&#xe014;',
			'icon-thumbs-down' : '&#xe015;',
			'icon-thumbs-up' : '&#xe016;',
			'icon-star' : '&#xe017;',
			'icon-heart' : '&#xe019;',
			'icon-sharable' : '&#xe01b;',
			'icon-share' : '&#xe01c;',
			'icon-map' : '&#xe020;',
			'icon-location' : '&#xe021;',
			'icon-house' : '&#xe022;',
			'icon-briefcase' : '&#xe024;',
			'icon-keyboard' : '&#xe025;',
			'icon-browser' : '&#xe026;',
			'icon-air' : '&#xe027;',
			'icon-popup' : '&#xe029;',
			'icon-search' : '&#xe02a;',
			'icon-printer' : '&#xe02c;',
			'icon-bell' : '&#xe02d;',
			'icon-link' : '&#xe02e;',
			'icon-flag' : '&#xe02f;',
			'icon-cog' : '&#xe030;',
			'icon-tools' : '&#xe031;',
			'icon-trophy' : '&#xe032;',
			'icon-tag' : '&#xe033;',
			'icon-camera' : '&#xe034;',
			'icon-megaphone' : '&#xe035;',
			'icon-moon' : '&#xe036;',
			'icon-cd' : '&#xe039;',
			'icon-earth' : '&#xe03a;',
			'icon-voicemail' : '&#xe03b;',
			'icon-database' : '&#xe03c;',
			'icon-cone' : '&#xe03d;',
			'icon-droplet' : '&#xe03e;',
			'icon-thunder' : '&#xe03f;',
			'icon-bolt' : '&#xe040;',
			'icon-calendar' : '&#xe041;',
			'icon-microphone' : '&#xe042;',
			'icon-clock' : '&#xe043;',
			'icon-eye' : '&#xe044;',
			'icon-lifebuoy' : '&#xe045;',
			'icon-airplane' : '&#xe046;',
			'icon-bag' : '&#xe047;',
			'icon-newspaper' : '&#xe048;',
			'icon-book' : '&#xe049;',
			'icon-graduation' : '&#xe04a;',
			'icon-hourglass' : '&#xe04c;',
			'icon-gauge' : '&#xe04d;',
			'icon-language' : '&#xe04e;',
			'icon-network' : '&#xe04f;',
			'icon-key' : '&#xe050;',
			'icon-battery' : '&#xe051;',
			'icon-bucket' : '&#xe052;',
			'icon-magnet' : '&#xe053;',
			'icon-drive' : '&#xe054;',
			'icon-cup' : '&#xe055;',
			'icon-rocket' : '&#xe056;',
			'icon-brush' : '&#xe057;',
			'icon-suitcase' : '&#xe058;',
			'icon-credit-card' : '&#xe059;',
			'icon-light-bulb' : '&#xe05a;',
			'icon-infinity' : '&#xe05b;',
			'icon-screen' : '&#xe05c;',
			'icon-code' : '&#xe05d;',
			'icon-publish' : '&#xe065;',
			'icon-clipboard' : '&#xe066;',
			'icon-checkmark' : '&#xe067;',
			'icon-cycle' : '&#xe068;',
			'icon-document' : '&#xe069;',
			'icon-book-2' : '&#xe06a;',
			'icon-arrow-right' : '&#xe06c;',
			'icon-github' : '&#xe06e;',
			'icon-linkedin' : '&#xe06f;',
			'icon-skype' : '&#xe070;',
			'icon-ellipsis' : '&#xe074;',
			'icon-arrow-left' : '&#xe075;',
			'icon-play' : '&#xe077;',
			'icon-docs' : '&#xe078;',
			'icon-cw' : '&#xe079;',
			'icon-cross' : '&#xe07a;',
			'icon-cart' : '&#xe07b;',
			'icon-box' : '&#xe07c;',
			'icon-ticket' : '&#xe07d;',
			'icon-rss' : '&#xe07e;',
			'icon-signal' : '&#xe07f;',
			'icon-thermometer' : '&#xe080;',
			'icon-droplets' : '&#xe081;',
			'icon-untitled' : '&#xe082;',
			'icon-statistics' : '&#xe083;',
			'icon-pie' : '&#xe084;',
			'icon-bars' : '&#xe085;',
			'icon-graph' : '&#xe086;',
			'icon-lock' : '&#xe087;',
			'icon-lock-open' : '&#xe088;',
			'icon-logout' : '&#xe089;',
			'icon-login' : '&#xe08a;',
			'icon-warning' : '&#xe08b;',
			'icon-text' : '&#xe08c;',
			'icon-flow-tree' : '&#xe08d;',
			'icon-flattr' : '&#xe092;',
			'icon-evernote' : '&#xe093;',
			'icon-dropbox' : '&#xe094;',
			'icon-instagram' : '&#xe095;',
			'icon-qq' : '&#xe096;',
			'icon-spotify' : '&#xe097;',
			'icon-vk' : '&#xe098;',
			'icon-circles' : '&#xe099;',
			'icon-dribbble' : '&#xe09a;',
			'icon-flickr' : '&#xe09b;',
			'icon-vimeo' : '&#xe09d;',
			'icon-twitter' : '&#xe09f;',
			'icon-facebook' : '&#xe0a1;',
			'icon-facebook-2' : '&#xe0a3;',
			'icon-googleplus' : '&#xe0a4;',
			'icon-pinterest' : '&#xe0a6;',
			'icon-dot' : '&#xe0ac;',
			'icon-stumbleupon' : '&#xe0b1;',
			'icon-lastfm' : '&#xe0b3;',
			'icon-rdio' : '&#xe0b5;',
			'icon-behance' : '&#xe0b7;',
			'icon-paypal' : '&#xe0b8;',
			'icon-flow-branch' : '&#xe072;',
			'icon-bookmarks' : '&#xe073;',
			'icon-bookmark' : '&#xe091;',
			'icon-help' : '&#xe09c;',
			'icon-info' : '&#xe0a0;',
			'icon-info-2' : '&#xe0a2;',
			'icon-question' : '&#xe0a5;',
			'icon-upload' : '&#xe0a7;',
			'icon-cloud' : '&#xe0a8;',
			'icon-install' : '&#xe0b0;',
			'icon-download' : '&#xe0b2;',
			'icon-upload-2' : '&#xe0b4;',
			'icon-folder' : '&#xe0b6;',
			'icon-video' : '&#xe0b9;',
			'icon-pictures' : '&#xe0ba;',
			'icon-pause' : '&#xe0bb;',
			'icon-landscape' : '&#xe0bc;',
			'icon-record' : '&#xe0bd;',
			'icon-stop' : '&#xe0be;',
			'icon-next' : '&#xe0bf;',
			'icon-previous' : '&#xe0c0;',
			'icon-first' : '&#xe0c1;',
			'icon-last' : '&#xe0c2;',
			'icon-resize-enlarge' : '&#xe0c3;',
			'icon-resize-shrink' : '&#xe0c4;',
			'icon-arrow-down' : '&#xe0cb;',
			'icon-arrow-up' : '&#xe0cc;',
			'icon-arrow-right-2' : '&#xe0cd;',
			'icon-shuffle' : '&#xe0c5;',
			'icon-ccw' : '&#xe0c8;',
			'icon-arrow' : '&#xe0c9;',
			'icon-arrow-2' : '&#xe0ca;',
			'icon-retweet' : '&#xe0ce;',
			'icon-loop' : '&#xe0cf;',
			'icon-history' : '&#xe0d0;',
			'icon-list' : '&#xe0d1;',
			'icon-list-2' : '&#xe0d2;',
			'icon-flow-cascade' : '&#xe008;',
			'icon-dots' : '&#xe018;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};