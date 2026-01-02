function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.155.254:8004",
        "SOCKS 43.133.15.45:6006",
        "SOCKS 103.16.62.138:10888",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 47.236.147.45:1100",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 43.133.12.231:6006",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 103.250.70.190:9107",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 5.180.172.31:5050",
        "SOCKS 152.228.212.223:29272",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}