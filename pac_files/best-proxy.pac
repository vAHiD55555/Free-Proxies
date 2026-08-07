function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.236.124.166:3128",
        "SOCKS 150.241.115.251:1080",
        "SOCKS 194.163.174.78:1080",
        "SOCKS 13.140.164.179:3598",
        "SOCKS 187.63.9.62:63253",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 128.127.145.110:1080",
        "SOCKS 176.99.134.183:8090",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 54.46.6.234:3129",
        "SOCKS 194.177.28.66:10808",
        "SOCKS 8.211.51.115:88",
        "SOCKS 8.213.156.191:443",
        "SOCKS 176.65.140.215:1081",
        "SOCKS 47.75.116.41:10800",
        "SOCKS 13.140.164.179:3540",
        "SOCKS 38.76.180.241:3128",
        "SOCKS 195.19.52.187:1080",
        "SOCKS 185.93.104.246:1080",
        "SOCKS 146.235.227.201:9150",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}