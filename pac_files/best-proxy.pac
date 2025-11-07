function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.38.155.24:46069",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 37.221.193.221:54635",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 157.180.121.252:55135",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 157.180.121.252:30756",
        "SOCKS 147.78.66.83:1080",
        "SOCKS 74.48.187.179:3128",
        "SOCKS 113.212.109.40:1080",
        "SOCKS 152.53.171.242:20405",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 222.129.35.9:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}