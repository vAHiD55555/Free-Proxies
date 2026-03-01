function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 64.227.131.240:1080",
        "SOCKS 14.56.118.24:3128",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 47.83.199.137:58367",
        "SOCKS 14.56.118.164:3128",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 88.210.11.250:1080",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 120.77.203.0:443",
        "SOCKS 38.76.200.182:58367",
        "SOCKS 61.72.221.84:3128",
        "SOCKS 213.111.146.71:8888",
        "SOCKS 213.155.220.174:1080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 121.128.121.144:3128",
        "SOCKS 46.21.153.16:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}