function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 15.160.181.77:8889",
        "SOCKS 72.195.101.99:4145",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 157.180.121.252:20889",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 47.88.104.126:3344",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}