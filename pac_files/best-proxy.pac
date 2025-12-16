function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 162.251.108.145:3128",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 128.140.76.145:11295",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 202.93.247.51:8090",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 152.67.203.7:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}