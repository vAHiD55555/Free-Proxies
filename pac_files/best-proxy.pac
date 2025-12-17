function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.244.208.195:23699",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 157.180.52.134:60001",
        "SOCKS 167.71.8.215:3128",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 52.87.167.25:80",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 78.12.220.164:32090",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 91.98.161.148:9191",
        "SOCKS 128.140.76.145:10000",
        "SOCKS 202.47.185.181:8085",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 72.10.160.91:13103",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 157.66.16.52:8080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 114.236.93.203:15800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}