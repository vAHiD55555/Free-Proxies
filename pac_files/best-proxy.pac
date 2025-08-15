function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 114.99.200.41:3000",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 65.108.251.40:57575",
        "SOCKS 45.91.201.100:8081",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 38.194.251.246:999",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 72.10.160.92:3709",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}