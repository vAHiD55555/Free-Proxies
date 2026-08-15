function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.191.114.251:1080",
        "SOCKS 171.253.92.42:1085",
        "SOCKS 103.239.201.49:58765",
        "SOCKS 139.28.240.201:1082",
        "SOCKS 195.133.14.222:49152",
        "SOCKS 111.119.162.248:10902",
        "SOCKS 45.133.210.241:1080",
        "SOCKS 81.177.136.40:1086",
        "SOCKS 171.253.95.24:1085",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 8.211.51.115:1900",
        "SOCKS 157.22.205.217:1080",
        "SOCKS 171.253.95.28:1085",
        "SOCKS 62.106.66.174:143",
        "SOCKS 8.221.126.184:80",
        "SOCKS 43.157.247.44:7000",
        "SOCKS 8.130.36.163:8008",
        "SOCKS 8.211.51.115:8090",
        "SOCKS 103.131.215.221:10800",
        "SOCKS 161.35.90.93:1082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}