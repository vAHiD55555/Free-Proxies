function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.211.142.115:8192",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 159.65.230.91:20613",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 94.159.112.138:3129",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 213.155.220.174:1080",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 13.229.107.106:80",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 95.216.95.185:8888",
        "SOCKS 61.72.221.64:3128",
        "SOCKS 14.56.118.164:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}