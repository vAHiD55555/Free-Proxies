function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.135.140:1080",
        "SOCKS 122.117.18.15:1080",
        "SOCKS 87.192.233.75:3128",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 174.138.162.37:36077",
        "SOCKS 103.89.2.102:1080",
        "SOCKS 174.138.162.35:8865",
        "SOCKS 112.216.54.226:12121",
        "SOCKS 174.138.162.38:36866",
        "SOCKS 65.109.196.122:2080",
        "SOCKS 72.56.104.252:9058",
        "SOCKS 86.102.255.179:3128",
        "SOCKS 159.223.76.52:1080",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 65.21.252.66:10811",
        "SOCKS 174.138.162.37:36113",
        "SOCKS 45.74.31.30:7630",
        "SOCKS 62.60.210.173:1080",
        "SOCKS 104.238.100.115:45314",
        "SOCKS 72.195.34.42:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}