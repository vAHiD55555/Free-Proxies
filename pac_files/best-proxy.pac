function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.148.112.69:8199",
        "SOCKS 135.181.203.208:80",
        "SOCKS 67.43.228.253:20411",
        "SOCKS 157.20.253.43:8989",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 31.15.169.77:808",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 128.140.76.145:15311",
        "SOCKS 213.250.198.146:7777",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 8.211.49.86:119",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}