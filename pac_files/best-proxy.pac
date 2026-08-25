function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.145.141.251:44163",
        "SOCKS 193.233.218.213:1080",
        "SOCKS 195.19.51.20:1080",
        "SOCKS 195.46.183.181:1080",
        "SOCKS 46.146.242.142:1080",
        "SOCKS 45.32.121.119:10808",
        "SOCKS 118.145.141.251:44235",
        "SOCKS 8.219.97.248:80",
        "SOCKS 37.59.110.73:80",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 134.209.18.113:1088",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 103.210.161.8:1080",
        "SOCKS 118.145.141.251:44035",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 43.165.126.68:10808",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 13.215.27.14:1080",
        "SOCKS 45.84.13.153:1080",
        "SOCKS 118.145.141.251:44066",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}