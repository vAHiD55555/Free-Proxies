function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.9.238.173:47679",
        "SOCKS 93.182.26.66:1080",
        "SOCKS 58.22.18.168:8118",
        "SOCKS 202.181.16.45:52929",
        "SOCKS 147.93.43.7:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 144.124.227.90:10808",
        "SOCKS 152.53.171.242:34133",
        "SOCKS 103.156.75.132:8181",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 171.238.102.99:1081",
        "SOCKS 152.53.171.242:14465",
        "SOCKS 152.53.171.242:57775",
        "SOCKS 171.238.103.65:1088",
        "SOCKS 15.229.16.205:40001",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 152.53.171.242:57167",
        "SOCKS 82.223.165.28:4733",
        "SOCKS 8.210.89.96:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}