function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.192.133.82:1080",
        "SOCKS 102.68.87.48:8888",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 147.93.31.99:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 157.180.121.252:25251",
        "SOCKS 165.227.104.238:8118",
        "SOCKS 116.12.157.199:33333",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 147.75.68.200:10008",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 109.196.140.199:1080",
        "SOCKS 116.12.157.195:33333",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}