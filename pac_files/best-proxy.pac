function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 14.239.102.60:1001",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 157.175.196.122:8864",
        "SOCKS 152.53.36.101:48009",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 161.49.116.131:1338",
        "SOCKS 18.143.165.238:9743",
        "SOCKS 103.93.93.66:8080",
        "SOCKS 157.180.121.252:42084",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 114.80.40.128:3081",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 188.93.213.242:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}