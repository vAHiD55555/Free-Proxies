function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 192.169.140.98:45739",
        "SOCKS 47.82.150.123:1080",
        "SOCKS 47.79.253.101:1080",
        "SOCKS 192.9.241.51:26568",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 195.161.132.86:7778",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 47.82.178.111:1080",
        "SOCKS 43.135.164.115:9050",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 47.238.60.156:1080",
        "SOCKS 103.151.74.5:2025",
        "SOCKS 157.245.155.242:50130",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 47.82.180.115:1080",
        "SOCKS 45.10.70.151:8888",
        "SOCKS 103.157.78.22:8199",
        "SOCKS 47.82.164.70:1080",
        "SOCKS 47.82.177.42:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}