function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.219.148.250:1011",
        "SOCKS 117.74.65.207:443",
        "SOCKS 18.179.20.228:8181",
        "SOCKS 185.249.225.238:8081",
        "SOCKS 128.140.76.145:19633",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 203.202.243.196:1088",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 115.190.24.138:8080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 162.243.5.191:80",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 51.250.108.153:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 67.43.228.253:1551",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 128.140.76.145:17923",
        "SOCKS 144.91.95.238:58237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}