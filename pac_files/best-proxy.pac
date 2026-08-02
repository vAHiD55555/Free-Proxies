function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 146.56.185.39:10800",
        "SOCKS 45.84.13.153:1080",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 212.33.250.53:1080",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 37.16.25.108:1080",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 43.161.253.240:1080",
        "SOCKS 103.197.188.63:1080",
        "SOCKS 160.202.46.149:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 91.209.71.84:9118",
        "SOCKS 43.160.219.223:1080",
        "SOCKS 46.146.216.44:1080",
        "SOCKS 209.38.214.48:1080",
        "SOCKS 165.16.192.205:1080",
        "SOCKS 46.146.210.123:1080",
        "SOCKS 43.161.253.113:1080",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 202.40.190.74:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}