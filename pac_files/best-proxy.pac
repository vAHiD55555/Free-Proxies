function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 14.172.146.226:20399",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 117.161.170.163:9408",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 171.228.142.176:1001",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 104.244.74.206:38118",
        "SOCKS 115.72.4.45:10002",
        "SOCKS 27.147.129.26:58080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 115.77.129.20:10002",
        "SOCKS 103.16.62.138:10888",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 43.134.31.159:1111",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 111.4.220.2:808",
        "SOCKS 43.224.10.43:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}