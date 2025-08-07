function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.165.233.121:9151",
        "SOCKS 8.220.204.215:9098",
        "SOCKS 41.33.252.209:80",
        "SOCKS 192.177.139.214:8000",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 27.79.237.228:16000",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 149.129.255.179:4002",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 202.137.14.57:8085",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 173.209.63.69:8111",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 161.35.70.249:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}