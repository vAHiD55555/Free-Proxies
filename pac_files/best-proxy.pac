function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 35.180.188.216:80",
        "SOCKS 211.171.114.154:3128",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 152.53.171.242:10809",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 154.37.215.142:8080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 152.53.171.242:26147",
        "SOCKS 152.53.171.242:16299",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 202.5.37.104:17382",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 152.53.171.242:30203",
        "SOCKS 41.251.47.46:30023",
        "SOCKS 3.24.178.81:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}