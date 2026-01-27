function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.163:5455",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 62.60.131.194:11746",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 121.230.9.228:1080",
        "SOCKS 36.255.98.163:5293",
        "SOCKS 27.147.215.56:13457",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 36.255.98.169:8586",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 51.11.240.222:8085",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 103.133.27.179:8080",
        "SOCKS 200.48.35.126:999",
        "SOCKS 119.81.71.27:80",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 185.123.143.251:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}