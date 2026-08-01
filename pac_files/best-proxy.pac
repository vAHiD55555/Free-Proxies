function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.38.217.179:39170",
        "SOCKS 185.121.13.73:1080",
        "SOCKS 203.189.150.44:1080",
        "SOCKS 185.175.229.58:1080",
        "SOCKS 176.65.140.216:1085",
        "SOCKS 77.239.108.24:3128",
        "SOCKS 107.151.148.153:1080",
        "SOCKS 205.164.192.115:999",
        "SOCKS 51.222.13.193:10084",
        "SOCKS 113.160.188.21:1080",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 47.82.123.15:1011",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 77.247.178.20:3129",
        "SOCKS 85.234.100.149:1080",
        "SOCKS 181.78.82.211:999",
        "SOCKS 80.90.188.187:24530",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 103.239.52.100:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}