function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.59.38:80",
        "SOCKS 27.147.245.189:7735",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 103.166.124.249:8199",
        "SOCKS 146.235.19.84:10850",
        "SOCKS 152.53.171.242:19421",
        "SOCKS 47.91.121.127:6379",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 121.230.9.217:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 186.215.43.39:3128",
        "SOCKS 152.53.171.242:10022",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 146.235.19.84:10872",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 13.229.107.106:80",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 85.192.56.4:48716",
        "SOCKS 113.195.224.222:9999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}