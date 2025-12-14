function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.222.191.35:33333",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 67.43.228.253:1551",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 141.94.195.25:22558",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 159.65.11.208:8080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 15.206.25.229:80",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 128.140.76.145:24402",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 185.6.9.176:8072",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}