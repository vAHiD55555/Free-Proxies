function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.37.175.200:22292",
        "SOCKS 123.54.197.52:22488",
        "SOCKS 159.223.53.194:1080",
        "SOCKS 146.71.76.186:1088",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 61.72.110.124:3128",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 47.109.39.34:3389",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 213.165.58.8:1080",
        "SOCKS 193.32.178.160:57329",
        "SOCKS 121.230.8.250:1080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 109.245.231.73:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}