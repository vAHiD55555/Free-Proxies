function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 34.236.148.220:10081",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 143.208.57.162:999",
        "SOCKS 208.87.243.199:7878",
        "SOCKS 120.77.203.0:443",
        "SOCKS 8.213.222.157:9091",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 186.97.138.69:999",
        "SOCKS 104.238.100.115:45314",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 103.82.23.118:6174",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 91.238.105.64:2024",
        "SOCKS 103.172.42.175:8084",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 103.143.197.41:8080",
        "SOCKS 40.192.14.136:9292",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}