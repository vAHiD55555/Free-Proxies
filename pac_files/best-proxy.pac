function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.198:5566",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 152.53.36.101:48248",
        "SOCKS 137.184.152.66:20256",
        "SOCKS 15.160.186.74:521",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 103.210.22.17:3128",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 113.11.64.177:8446",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 125.227.225.157:3389",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}