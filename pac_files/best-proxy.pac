function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.115:57114",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 128.140.76.145:10773",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 67.201.58.190:4145",
        "SOCKS 93.113.63.73:33100",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 89.104.71.36:1080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 203.189.152.142:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 68.71.251.134:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}