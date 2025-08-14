function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.93.173.58:9050",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 27.71.139.254:16000",
        "SOCKS 27.79.197.243:16000",
        "SOCKS 154.57.15.155:8080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 27.79.153.152:16000",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 47.251.43.115:33333",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 45.230.170.30:999",
        "SOCKS 64.176.6.165:13920",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 27.79.235.78:16000",
        "SOCKS 80.75.213.22:3128",
        "SOCKS 222.129.37.77:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}