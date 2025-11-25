function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.154.43.198:39522",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 171.238.88.111:1081",
        "SOCKS 37.187.92.9:1028",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 8.219.234.213:1011",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 137.59.48.130:5566",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 120.77.203.0:443",
        "SOCKS 157.180.121.252:32564",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 61.9.34.118:58765",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 72.10.160.94:2261",
        "SOCKS 112.201.241.84:8082",
        "SOCKS 200.48.35.124:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}