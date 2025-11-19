function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:36857",
        "SOCKS 89.58.45.94:42777",
        "SOCKS 89.58.45.94:20589",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 161.49.91.13:1337",
        "SOCKS 185.105.230.45:3128",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 89.58.45.94:32519",
        "SOCKS 157.180.121.252:17242",
        "SOCKS 89.58.45.94:25853",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 47.74.226.8:5001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}