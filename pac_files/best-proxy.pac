function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:41491",
        "SOCKS 46.146.220.247:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 170.64.233.94:8080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 75.235.248.44:80",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 91.121.48.221:38711",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}