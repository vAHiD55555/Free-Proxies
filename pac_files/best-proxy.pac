function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.17.62.152:8881",
        "SOCKS 47.84.36.108:33333",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 89.58.45.94:48293",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 15.160.181.77:8331",
        "SOCKS 15.168.235.57:407",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 181.78.75.84:999",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 159.223.164.184:20201",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 89.58.45.94:36857",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 65.109.27.32:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}