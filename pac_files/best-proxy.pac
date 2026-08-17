function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.21.39.252:1080",
        "SOCKS 72.18.53.189:9119",
        "SOCKS 202.62.42.167:1080",
        "SOCKS 172.171.83.26:8080",
        "SOCKS 118.145.141.251:44171",
        "SOCKS 164.52.216.148:8080",
        "SOCKS 95.211.190.26:9100",
        "SOCKS 65.21.252.66:10808",
        "SOCKS 8.210.17.35:80",
        "SOCKS 195.91.129.101:1337",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 8.210.17.35:5060",
        "SOCKS 5.249.165.195:20000",
        "SOCKS 103.239.201.49:58765",
        "SOCKS 103.106.190.58:1080",
        "SOCKS 202.79.27.12:1080",
        "SOCKS 216.22.13.244:1084",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}