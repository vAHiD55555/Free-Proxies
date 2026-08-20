function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.164.136.189:1080",
        "SOCKS 118.145.141.251:44090",
        "SOCKS 46.146.242.142:1080",
        "SOCKS 47.252.18.37:50",
        "SOCKS 89.23.102.250:1080",
        "SOCKS 66.59.197.61:3128",
        "SOCKS 72.195.34.60:27391",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 216.106.179.216:49334",
        "SOCKS 118.145.141.251:44151",
        "SOCKS 47.252.18.37:1000",
        "SOCKS 156.238.237.121:1080",
        "SOCKS 77.37.209.86:1081",
        "SOCKS 165.245.187.193:3128",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 118.145.141.251:44190",
        "SOCKS 37.204.230.182:1080",
        "SOCKS 64.188.99.230:1080",
        "SOCKS 8.215.25.3:2080",
        "SOCKS 174.138.61.184:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}